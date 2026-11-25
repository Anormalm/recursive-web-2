/* Archive policy: source context, independent findings and associated correspondence.
   This is presentation/progression metadata, not a security boundary. */
(() => {
 'use strict';
 const findings={
  registry:{requires:[],context:[]}, institution:{requires:[],context:[]},
  namecode:{requires:[],context:[]}, building:{requires:[],context:[]},
  reelnote:{requires:[],context:['aLetterhead']}, reels:{requires:[],context:[]},
  dial:{requires:[],context:[]}, tracks:{requires:[],context:[]},
  parity:{requires:[],context:[]}, noisewords:{requires:[],context:[]},
  audit:{requires:[],context:[]}, hiddenindex:{requires:[],context:[]},
  dropcoords:{requires:['reels'],context:[]}, newsclip:{requires:[],context:[]},
  annex:{requires:[],context:[]}, recursion:{requires:[],context:['aRails']},
  provenance:{requires:[],context:[]}, triangulate:{requires:[],context:['aLetterhead']},
  masterkey:{requires:['dropcoords'],context:[],physical:true},
  judgment:{requires:['registry','institution','namecode','building','reelnote','reels','dial','tracks','parity','noisewords','audit','hiddenindex','dropcoords','newsclip','annex','recursion','provenance','triangulate','masterkey'],context:['aVerdict'],physical:true}
 };
 const scenes={
  'c1-assignment':[], 'c1-reconcile':['registry'], 'c1-disposition':['registry','institution'],
  'c2-worksheet':[], 'c2-names':['namecode','building'], 'c2-recordings':['reelnote','reels'],
  'c3-session':[], 'c3-attribution':['dial','tracks','parity'], 'c3-carriers':['noisewords','reels'],
  'c4-review':[], 'c4-withdrawal':['audit','hiddenindex'], 'c4-external':['newsclip','dropcoords'],
  'c5-versions':[], 'c5-sources':['annex','recursion','provenance'],
  'c5-scope':['annex','recursion','provenance','triangulate'],
  'c6-audit':['annex','recursion','provenance','triangulate'], 'c6-consistency':['masterkey'],
  'c6-handover':Object.keys(findings)
 };
 const exhibits={
  nHandover:[], nCorrection:['registry'], nName:[], nReels:['namecode','building'],
  nSession:[], nMargins:['dial','tracks','parity'], nRefusal:[], nCustody:['audit','hiddenindex'],
  nVersions:[], nDeparture:['annex','recursion','provenance'],
  nAudit:['annex','recursion','provenance','triangulate'], nLastNote:['masterkey']
 };
 const outputs={aDrop:{requires:['reels']},aVerdict:{requires:['masterkey'],physical:true}};
 const freeze=value=>{for(const child of Object.values(value))if(child&&typeof child==='object')freeze(child);return Object.freeze(value);};
 window.ZEPHYR_ARCHIVE=freeze({rev:1,findings,scenes,exhibits,outputs});
})();
