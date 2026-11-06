import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,readFileSync,existsSync,mkdirSync,writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const script=fileURLToPath(new URL('../scripts/build.mjs',import.meta.url));
const folder=mkdtempSync(join(tmpdir(),'zephyr-build-test-'));
for(const [name,base] of [['root','/'],['project','/recursive-web-2/']])test('player artifact has exact exclusions and recovery base: '+name,()=>{
 const out=join(folder,name),args=[script,'--out-dir='+out,'--base='+base];
 execFileSync(process.execPath,args);execFileSync(process.execPath,[...args,'--verify']);
 for(const file of ['tests','scripts','gm','RELEASE.md','.github'])assert.equal(existsSync(join(out,file)),false);
 const html=readFileSync(join(out,'404.html'),'utf8');assert.ok(html.includes('<base href="'+base+'" />'));
 const missing=new URL('unknown/deep/file','https://example.test'+base);
 assert.equal(new URL('index.html',new URL(base,missing)).pathname,base+'index.html');
 const robots=readFileSync(join(out,'robots.txt'),'utf8');for(const file of ['1986-reel-a.wav','1986-reel-b.wav'])assert.ok(robots.includes(base+'evidence/'+file));
 mkdirSync(join(out,'tests'));writeFileSync(join(out,'tests','probe.txt'),'excluded fixture');
 assert.throws(()=>execFileSync(process.execPath,[...args,'--verify'],{stdio:'pipe'}));
});
test('build rejects unsafe base and source overwrite',()=>{
 for(const base of ['//example.test/','/../','/foo','/foo/?x=1'])assert.throws(()=>execFileSync(process.execPath,[script,'--base='+base,'--out-dir='+join(folder,'bad')],{stdio:'pipe'}));
 assert.throws(()=>execFileSync(process.execPath,[script,'--out-dir='+fileURLToPath(new URL('..',import.meta.url))],{stdio:'pipe'}));
});
