const _0xc17e=['game','between','isFinite','scale','metadata','actorData','effects','actorLink','forEach','brightLight','secondaryTokenAttribute','The\x20provided\x20media\x20file\x20does\x20not\x20have\x20a\x20valid\x20image\x20or\x20video\x20file\x20extension.','hasRole','../../common/constants','validate','mirrorY','Token\x20height\x20must\x20be\x20a\x20positive\x20number.','elevation','exports','lightAnimation','img','../entities/actor','The\x20light\x20alpha\x20value\x20must\x20be\x20between\x200\x20and\x201.','lockRotation','preSave','vision','Token\x20width\x20must\x20be\x20a\x20positive\x20number.','mirrorX','mergeObject','dimSight','lightAngle','Bright\x20light\x20emission\x20distance\x20must\x20be\x20numeric.','name','randomImg','./light','sightAngle','../odm/abstract','includes','../../common/utils','../odm/validators','overlayEffect','Dim\x20light\x20emission\x20distance\x20must\x20be\x20numeric.','isColorString','actorId','rotation','Token\x20tint\x20color\x20must\x20be\x20a\x20valid\x20color\x20string.','canCreate','width','tint','findOne','values','NONE','isNumeric','hasVideoExtension','../odm/embedded','canUpdate','brightSight','schema','ASSISTANT','dimLight','_id','hidden'];(function(_0x3508c0,_0xc17ec3){const _0x8aa93e=function(_0x101db3){while(--_0x101db3){_0x3508c0['push'](_0x3508c0['shift']());}};_0x8aa93e(++_0xc17ec3);}(_0xc17e,0x142));const _0x8aa9=function(_0x3508c0,_0xc17ec3){_0x3508c0=_0x3508c0-0x0;let _0x8aa93e=_0xc17e[_0x3508c0];return _0x8aa93e;};const {DEFAULT_TOKEN,TOKEN_DISPLAY_MODES}=require(_0x8aa9('0x1'));const AbstractBaseDocument=require(_0x8aa9('0x18'));const EmbeddedDocument=require(_0x8aa9('0x2a'));const {LightAnimation}=require(_0x8aa9('0x16'));const Validators=require(_0x8aa9('0x1b'));const util=require(_0x8aa9('0x1a'));class TokenBar extends AbstractBaseDocument{static get[_0x8aa9('0x2d')](){return{'attribute':{'type':String,'required':![]}};}}class Token extends EmbeddedDocument{static get['schema'](){const _0x4ba842=super[_0x8aa9('0x2d')];_0x4ba842[_0x8aa9('0x14')]={'type':String,'required':!![],'default':''};_0x4ba842['displayName']={'type':Number,'required':!![],'default':TOKEN_DISPLAY_MODES['NONE'],'validate':_0x234ed9=>Object[_0x8aa9('0x26')](TOKEN_DISPLAY_MODES)['includes'](_0x234ed9)};_0x4ba842[_0x8aa9('0x8')]={'type':String,'required':!![],'default':DEFAULT_TOKEN,'validate':_0x5282b9=>Validators['hasImageExtension'](_0x5282b9)||Validators[_0x8aa9('0x29')](_0x5282b9),'validationError':_0x8aa9('0x3d')};_0x4ba842[_0x8aa9('0x24')]={'type':String,'required':![],'default':null,'validate':Validators[_0x8aa9('0x1e')],'validationError':_0x8aa9('0x21')};_0x4ba842[_0x8aa9('0x23')]={'type':Number,'required':!![],'min':0x0,'default':0x1,'validate':_0x4fcf41=>Number['isFinite'](_0x4fcf41)&&_0x4fcf41>0x0,'validationError':_0x8aa9('0xe')};_0x4ba842['height']={'type':Number,'required':!![],'min':0x0,'default':0x1,'validate':_0x11c9a9=>Number[_0x8aa9('0x34')](_0x11c9a9)&&_0x11c9a9>0x0,'validationError':_0x8aa9('0x4')};_0x4ba842[_0x8aa9('0x35')]={'type':Number,'required':!![],'min':0.25,'max':0x3,'default':0x1};_0x4ba842[_0x8aa9('0xf')]={'type':Boolean,'required':![]};_0x4ba842[_0x8aa9('0x3')]={'type':Boolean,'required':![]};_0x4ba842['x']={'type':Number,'required':!![],'default':0x0};_0x4ba842['y']={'type':Number,'required':!![],'default':0x0};_0x4ba842[_0x8aa9('0x5')]={'type':Number,'required':!![],'default':0x0};_0x4ba842[_0x8aa9('0xb')]={'type':Boolean,'required':!![],'default':![]};_0x4ba842[_0x8aa9('0x20')]={'type':Number,'required':!![],'default':0x0};_0x4ba842[_0x8aa9('0x38')]={'type':[String],'required':!![],'default':[]};_0x4ba842[_0x8aa9('0x1c')]={'type':String,'required':![]};_0x4ba842[_0x8aa9('0x31')]={'type':Boolean,'required':!![],'default':![]};_0x4ba842[_0x8aa9('0xd')]={'type':Boolean,'required':!![],'default':_0x4f07af=>[_0x4f07af[_0x8aa9('0x11')],_0x4f07af[_0x8aa9('0x2c')]]['some'](_0x28fbb6=>Number[_0x8aa9('0x34')](_0x28fbb6)&&_0x28fbb6>0x0)};_0x4ba842[_0x8aa9('0x11')]={'type':Number,'required':!![],'default':0x0,'validate':_0x39775d=>Number['isNumeric'](_0x39775d),'validationError':'Dim\x20vision\x20distances\x20must\x20be\x20numeric.'};_0x4ba842['brightSight']={'type':Number,'required':!![],'default':0x0,'validate':_0xcb443c=>Number[_0x8aa9('0x28')](_0xcb443c),'validationError':'Bright\x20vision\x20distance\x20must\x20be\x20numeric.'};_0x4ba842[_0x8aa9('0x2f')]={'type':Number,'required':!![],'default':0x0,'validate':_0x2c0392=>Number[_0x8aa9('0x28')](_0x2c0392),'validationError':_0x8aa9('0x1d')};_0x4ba842[_0x8aa9('0x3b')]={'type':Number,'required':!![],'default':0x0,'validate':_0xde5671=>Number[_0x8aa9('0x28')](_0xde5671),'validationError':_0x8aa9('0x13')};_0x4ba842[_0x8aa9('0x17')]={'type':Number,'required':!![],'default':0x168,'validate':_0x4d05d3=>_0x4d05d3['between'](0x1,0x168),'validationError':'Sight\x20angle\x20must\x20be\x20between\x201\x20and\x20360\x20degrees.'};_0x4ba842['lightAngle']={'type':Number,'required':!![],'default':0x168,'validate':_0x316b69=>_0x316b69[_0x8aa9('0x33')](0x1,0x168),'validationError':'Light\x20emission\x20angle\x20must\x20be\x20between\x201\x20and\x20360\x20degrees.'};_0x4ba842['lightColor']={'type':String,'required':![]};_0x4ba842['lightAlpha']={'type':Number,'required':!![],'default':0x1,'validate':_0x7027f8=>Number[_0x8aa9('0x33')](_0x7027f8,0x0,0x1,!![]),'validationError':_0x8aa9('0xa')};_0x4ba842[_0x8aa9('0x7')]={'type':LightAnimation,'required':!![],'default':{}};_0x4ba842['actorId']={'type':Actor,'required':![]};_0x4ba842[_0x8aa9('0x39')]={'type':Boolean,'required':!![],'default':![]};_0x4ba842['actorData']={'type':Object,'required':!![],'default':{}};_0x4ba842['disposition']={'type':Number,'required':!![],'default':-0x1};_0x4ba842['displayBars']={'type':Number,'required':!![],'default':TOKEN_DISPLAY_MODES[_0x8aa9('0x27')],'validate':_0x49c9aa=>Object[_0x8aa9('0x26')](TOKEN_DISPLAY_MODES)[_0x8aa9('0x19')](_0x49c9aa)};_0x4ba842['bar1']={'type':TokenBar,'required':!![],'default':()=>{return{'attribute':global[_0x8aa9('0x32')]['system']['primaryTokenAttribute']};}};_0x4ba842['bar2']={'type':TokenBar,'required':!![],'default':()=>{return{'attribute':global[_0x8aa9('0x32')]['system'][_0x8aa9('0x3c')]};}};return _0x4ba842;}static get[_0x8aa9('0x36')](){return util[_0x8aa9('0x10')](super[_0x8aa9('0x36')],{'collection':'tokens'});}async[_0x8aa9('0xc')](_0x4ed284){await super[_0x8aa9('0xc')](_0x4ed284);if(!this['sightAngle'])this[_0x8aa9('0x17')]=0x168;if(!this['lightAngle'])this[_0x8aa9('0x12')]=0x168;for(let _0x9dc8b5 of['dimSight',_0x8aa9('0x2c'),'dimLight','brightLight']){if(!this[_0x9dc8b5])this[_0x9dc8b5]=0x0;}}static async[_0x8aa9('0x22')](_0x4dde39,_0x4e6c64,_0x4cd86c,_0x142511){return _0x4dde39['hasPermission']('TOKEN_CREATE');}static async[_0x8aa9('0x2b')](_0x5d220e,_0x279793,_0x12630f,_0xe3e066){const _0x1da63d=await Actor[_0x8aa9('0x25')]({'_id':_0x12630f[_0x8aa9('0x1f')]});if(!_0x1da63d)return _0x5d220e[_0x8aa9('0x0')](_0x8aa9('0x2e'));return Actor['canUpdate'](_0x5d220e,_0x1da63d,{});}}class PrototypeToken extends Token{static get[_0x8aa9('0x2d')](){const _0x8a19d8=super['schema'];const _0x36b55f=[_0x8aa9('0x30'),'x','y',_0x8aa9('0x5'),_0x8aa9('0x38'),'overlayEffect',_0x8aa9('0x31'),_0x8aa9('0x37')];_0x36b55f[_0x8aa9('0x3a')](_0x2a8795=>delete _0x8a19d8[_0x2a8795]);delete _0x8a19d8[_0x8aa9('0x8')][_0x8aa9('0x2')];_0x8a19d8[_0x8aa9('0x15')]={'type':Boolean,'required':!![],'default':![]};return _0x8a19d8;}}module[_0x8aa9('0x6')]={'Token':Token,'PrototypeToken':PrototypeToken};const {Actor}=require(_0x8aa9('0x9'));