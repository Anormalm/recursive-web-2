import {cpSync,mkdirSync,rmSync,readFileSync,writeFileSync,lstatSync,readdirSync,existsSync,realpathSync} from 'node:fs';
import {resolve,relative,dirname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';

const root=fileURLToPath(new URL('../',import.meta.url));
let base='/',outDir=resolve(root,'dist'),verifyOnly=false;
const seen=new Set();
for(const arg of process.argv.slice(2)){
 const key=arg.split('=')[0];
 if(seen.has(key))throw Error('Duplicate build option: '+key);
 seen.add(key);
 if(key==='--base'&&arg.startsWith('--base='))base=arg.slice(7);
 else if(key==='--out-dir'&&arg.startsWith('--out-dir=')&&arg.slice(10))outDir=resolve(root,arg.slice(10));
 else if(arg==='--verify')verifyOnly=true;
 else throw Error('Unknown build option: '+arg);
}
if(!/^\/(?:[A-Za-z0-9._~-]+\/)*$/.test(base)||base.split('/').some(p=>p==='.'||p==='..'))throw Error('Base must be a root-relative directory path with leading and trailing slashes');
// Resolve existing parents too: an output symlink must never redirect a build into source files.
function physicalPath(path){return existsSync(path)?realpathSync(path):resolve(physicalPath(dirname(path)),relative(dirname(path),path));}
const sourceRoot=realpathSync(root),physicalOut=physicalPath(outDir);
const outputRelative=relative(sourceRoot,physicalOut);
if(outputRelative===''||relative(physicalOut,sourceRoot).split(sep)[0]!=='..')throw Error('Output must not contain the source repository');
const files=['index.html','catalog.html','log.html','404.html','finale.html','core-17','assets','evidence','config.js','data.js','js','styles.css','robots.txt','ai-plugin.json'];
// Explicit player-only manifest. Do not replace with a recursive repository copy.
if(outputRelative.split(sep)[0]!=='..'&&files.concat(['scripts','tests','.git','.github']).includes(outputRelative.split(sep)[0]))throw Error('Output must not overwrite source files');
const config={window:{}};vm.runInNewContext(readFileSync(resolve(root,'config.js'),'utf8'),config);
const c=config.window.ZEPHYR_CONFIG;
if(c.previewMode!==false||!Number.isFinite(Date.parse(c.launchAt))||!Number.isFinite(c.chapterIntervalHours)||c.chapterIntervalHours<=0)throw Error('Invalid production release configuration');
const data={window:{}};vm.runInNewContext(readFileSync(resolve(root,'data.js'),'utf8'),data);
const workbook=data.window.ZEPHYR_DATA.records.aWorkbook.body;
if(readFileSync(resolve(root,'evidence/1946-workbook.txt'),'utf8')!==workbook)throw Error('Source workbook must exactly match aWorkbook.body');
const source404=readFileSync(resolve(root,'404.html'),'utf8');
if(!/<head>\s*<base href="\/" \/>/.test(source404)||!source404.includes('class="err-home" href="index.html"'))throw Error('404 must declare its root base before resource links and use a relative game-home link');
const generated=new Map([
 ['404.html',source404.replace('<base href="/" />','<base href="'+base+'" />')],
 ['robots.txt',readFileSync(resolve(root,'robots.txt'),'utf8').replace(/^(Disallow:\s*)\/(.*)$/gm,(_,directive,path)=>directive+base+path)],
 ['evidence/1946-workbook.txt',workbook]
]);
function excluded(path){return path.split('/').some(p=>/^(?:tests|scripts|gm|RELEASE\.md)$/i.test(p));}
function entries(directory,prefix=''){
 const found=[];
 for(const name of readdirSync(directory).sort()){
  const path=prefix+name,full=resolve(directory,name),stat=lstatSync(full);
  if(stat.isSymbolicLink())throw Error('Symlink in player files: '+path);
  if(excluded(path))throw Error('Excluded non-player file: '+path);
  found.push(path);
  if(stat.isDirectory())found.push(...entries(full,path+'/'));
  else if(!stat.isFile())throw Error('Non-regular player file: '+path);
 }
 return found;
}
const expected=[];
for(const file of files){
 const stat=lstatSync(resolve(root,file));
 if(stat.isSymbolicLink())throw Error('Symlink in player files: '+file);
 expected.push(file);
 if(stat.isDirectory())expected.push(...entries(resolve(root,file),file+'/'));
}
expected.sort();
function checkArtifactTree(){
 if(lstatSync(outDir).isSymbolicLink())throw Error('Output must not be a symlink');
 const actual=entries(outDir).sort();
 if(JSON.stringify(actual)!==JSON.stringify(expected))throw Error('Artifact differs from explicit player manifest');
}
function verify(){
 checkArtifactTree();
 for(const file of expected){
  if(!lstatSync(resolve(root,file)).isFile())continue;
  const content=generated.has(file)?Buffer.from(generated.get(file)):readFileSync(resolve(root,file));
  if(!readFileSync(resolve(outDir,file)).equals(content))throw Error('Artifact content mismatch: '+file);
 }
 console.log('Verified player-only artifact at '+outDir+' (base '+base+')');
}
if(!verifyOnly){
 // Custom output destinations must be empty, or already have the exact player-only tree.
 if(existsSync(outDir)){
  if(lstatSync(outDir).isSymbolicLink()||!lstatSync(outDir).isDirectory())throw Error('Output must be a directory, not a symlink');
  if(outDir!==resolve(root,'dist')&&readdirSync(outDir).length)checkArtifactTree();
 }
 rmSync(outDir,{recursive:true,force:true});mkdirSync(outDir,{recursive:true});
 for(const file of files)cpSync(resolve(root,file),resolve(outDir,file),{recursive:true});
 for(const [file,content] of generated)writeFileSync(resolve(outDir,file),content);
 console.log('Player-only site built at '+outDir+' (base '+base+')');
}
verify();
