const _0x1e81=['hasPermission','map','metadata','find','save','hasImageExtension','_updateDataModel','system','../odm/validators','active','migrate','../../common/utils','preSave','name','items','\x20Actors\x20to\x20the\x20latest\x20system\x20data\x20model','../odm/entity','img','schema','token','../embedded/active-effect','error','_id','length','../../common/constants','../embedded/token','canCreate','ACTOR_CREATE','info','The\x20provided\x20Actor\x20image\x20does\x20not\x20have\x20a\x20valid\x20image\x20file\x20extension.','actorId'];(function(_0x13a39e,_0x1e81d5){const _0x4b10f8=function(_0x3360a6){while(--_0x3360a6){_0x13a39e['push'](_0x13a39e['shift']());}};_0x4b10f8(++_0x1e81d5);}(_0x1e81,0x69));const _0x4b10=function(_0x13a39e,_0x1e81d5){_0x13a39e=_0x13a39e-0x0;let _0x4b10f8=_0x1e81[_0x13a39e];return _0x4b10f8;};const {DEFAULT_TOKEN}=require(_0x4b10('0xc'));const util=require(_0x4b10('0x1e'));const Entity=require(_0x4b10('0x4'));const Validators=require(_0x4b10('0x1b'));class Actor extends Entity{static get[_0x4b10('0x6')](){const _0x34861d=super[_0x4b10('0x6')];_0x34861d[_0x4b10('0x5')]={'type':String,'required':![],'validate':_0x352739=>Validators[_0x4b10('0x18')](_0x352739),'validationError':_0x4b10('0x11')};_0x34861d['token']={'type':PrototypeToken,'required':!![],'default':_0x54e1cc=>new PrototypeToken({'name':_0x54e1cc[_0x4b10('0x1')],'img':_0x54e1cc[_0x4b10('0x5')]})};_0x34861d[_0x4b10('0x2')]={'type':[OwnedItem],'default':[]};_0x34861d['effects']={'type':[ActiveEffect],'default':[]};return _0x34861d;}static get[_0x4b10('0x15')](){return util['mergeObject'](super[_0x4b10('0x15')],{'entityTypes':game[_0x4b10('0x1c')]?game[_0x4b10('0x1a')]['entityTypes']['Actor']:[],'customDataModel':!![],'embeddedEntities':{'ActiveEffect':ActiveEffect,'OwnedItem':OwnedItem}});}static[_0x4b10('0xe')](_0x34efa3,_0x53dd1b){return _0x34efa3[_0x4b10('0x13')](_0x4b10('0xf'));}async['preSave'](_0x527bd8){await super[_0x4b10('0x0')](_0x527bd8);if(this[_0x4b10('0xa')]&&this[_0x4b10('0x7')][_0x4b10('0x12')]!==this[_0x4b10('0x7')][_0x4b10('0xa')]){this[_0x4b10('0x7')][_0x4b10('0x12')]=this[_0x4b10('0xa')];}if(!this[_0x4b10('0x7')][_0x4b10('0x1')]){this['token'][_0x4b10('0x1')]=this[_0x4b10('0x1')];}if(this[_0x4b10('0x5')]&&(!this[_0x4b10('0x7')][_0x4b10('0x5')]||this['token']['img']===DEFAULT_TOKEN)){this[_0x4b10('0x7')][_0x4b10('0x5')]=this['img'];}}['postSave'](_0x32db58){if(this[_0x4b10('0x7')][_0x4b10('0x12')]!==this['_id']){this[_0x4b10('0x7')][_0x4b10('0x12')]=this[_0x4b10('0xa')];this[_0x4b10('0x17')]();}}static async[_0x4b10('0x1d')](){const {logger}=config;const _0x4f0436=await this[_0x4b10('0x16')]();for(let _0x259d34 of _0x4f0436){try{_0x259d34[_0x4b10('0x19')]();await _0x259d34[_0x4b10('0x17')]();}catch(_0xdf8981){logger[_0x4b10('0x9')](_0xdf8981);}}logger[_0x4b10('0x10')]('Successfully\x20migrated\x20'+_0x4f0436[_0x4b10('0xb')]+_0x4b10('0x3'));}[_0x4b10('0x19')](){super[_0x4b10('0x19')]();this[_0x4b10('0x2')]=this[_0x4b10('0x2')][_0x4b10('0x14')](_0xbd87f7=>{_0xbd87f7['_updateDataModel']();return _0xbd87f7;});}}module['exports']={'Actor':Actor};const {ActiveEffect}=require(_0x4b10('0x8'));const {OwnedItem}=require('../embedded/owned-item');const {PrototypeToken}=require(_0x4b10('0xd'));