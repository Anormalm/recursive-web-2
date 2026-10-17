import {cpSync,mkdirSync,rmSync,readFileSync,lstatSync} from 'node:fs';
import vm from 'node:vm';
const root=new URL('../',import.meta.url);
const config={window:{}};vm.runInNewContext(readFileSync(new URL('config.js',root),'utf8'),config);
const c=config.window.ZEPHYR_CONFIG;
if(c.previewMode!==false||!Number.isFinite(Date.parse(c.launchAt))||!Number.isFinite(c.chapterIntervalHours)||c.chapterIntervalHours<=0)throw Error('Invalid production release configuration');
const files=['index.html','catalog.html','log.html','404.html','finale.html','core-17','assets','evidence','config.js','data.js','js','styles.css','robots.txt','ai-plugin.json'];
// Explicit player-only manifest. Do not replace with a recursive repository copy.
function noLinks(path){if(lstatSync(path).isSymbolicLink())throw Error('Symlink in player files');}
rmSync(new URL('dist',root),{recursive:true,force:true});mkdirSync(new URL('dist',root));
for(const file of files){cpSync(new URL(file,root),new URL('dist/'+file,root),{recursive:true,filter:src=>{noLinks(src);return true;}});}
console.log('Player-only site built in dist/');
