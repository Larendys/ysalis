const _0x1f80=['schema','hasImageExtension','emit','showEntry','broadcast','The\x20provided\x20file\x20does\x20not\x20have\x20a\x20valid\x20image\x20extension.','metadata','journal','../../common/utils','mergeObject','exports','hasPermission','canCreate','JOURNAL_CREATE','../odm/entity','socketListeners'];(function(_0x5a3d28,_0x1f8004){const _0xcf122c=function(_0x1c4bc0){while(--_0x1c4bc0){_0x5a3d28['push'](_0x5a3d28['shift']());}};_0xcf122c(++_0x1f8004);}(_0x1f80,0x1df));const _0xcf12=function(_0x5a3d28,_0x1f8004){_0x5a3d28=_0x5a3d28-0x0;let _0xcf122c=_0x1f80[_0x5a3d28];return _0xcf122c;};const util=require(_0xcf12('0x9'));const Entity=require(_0xcf12('0xf'));const Validators=require('../odm/validators');class JournalEntry extends Entity{static get[_0xcf12('0x1')](){const _0x134c46=super[_0xcf12('0x1')];_0x134c46['content']={'type':String,'required':![],'default':''};_0x134c46['img']={'type':String,'required':![],'validate':Validators[_0xcf12('0x2')],'validationError':_0xcf12('0x6')};return _0x134c46;}static get['metadata'](){return util[_0xcf12('0xa')](super[_0xcf12('0x7')],{'collection':_0xcf12('0x8')});}static[_0xcf12('0xd')](_0x5861ac,_0x36d77a){return _0x5861ac[_0xcf12('0xc')](_0xcf12('0xe'));}static[_0xcf12('0x0')](_0x510f6d){_0x510f6d['on']('showEntry',(_0x451b5f,_0x40930b,_0x16ef4d,_0xbfbda5)=>{_0x510f6d[_0xcf12('0x5')][_0xcf12('0x3')](_0xcf12('0x4'),_0x451b5f,_0x40930b,_0x16ef4d);_0xbfbda5(!![]);});_0x510f6d['on']('shareImage',_0x949fd7=>{_0x510f6d[_0xcf12('0x5')]['emit']('shareImage',_0x949fd7);});}}module[_0xcf12('0xb')]={'JournalEntry':JournalEntry};