const _0x19a9=['valueInArray','../odm/validators','walls','isGM','../../common/constants','schema','includes','exports','keys','move','_id','every','metadata','CLOSED','sense','values','dir','length','../../common/utils','door','NORMAL','NONE'];(function(_0x89ec4a,_0x19a954){const _0x3f7437=function(_0x5f26ee){while(--_0x5f26ee){_0x89ec4a['push'](_0x89ec4a['shift']());}};_0x3f7437(++_0x19a954);}(_0x19a9,0x88));const _0x3f74=function(_0x89ec4a,_0x19a954){_0x89ec4a=_0x89ec4a-0x0;let _0x3f7437=_0x19a9[_0x89ec4a];return _0x3f7437;};const EmbeddedDocument=require('../odm/embedded');const Validators=require(_0x3f74('0x13'));const {WALL_DIRECTIONS,WALL_DOOR_STATES,WALL_DOOR_TYPES,WALL_MOVEMENT_TYPES,WALL_SENSE_TYPES}=require(_0x3f74('0x0'));const util=require(_0x3f74('0xe'));class Wall extends EmbeddedDocument{static get[_0x3f74('0x1')](){const _0x587f85=super[_0x3f74('0x1')];_0x587f85['c']={'type':[Number],'required':!![],'validate':_0x345aee=>_0x345aee instanceof Array&&_0x345aee[_0x3f74('0xd')]===0x4};_0x587f85[_0x3f74('0x5')]={'type':Number,'required':!![],'validate':_0x56c558=>Validators[_0x3f74('0x12')](_0x56c558,Object[_0x3f74('0xb')](WALL_MOVEMENT_TYPES)),'default':WALL_MOVEMENT_TYPES[_0x3f74('0x10')]};_0x587f85[_0x3f74('0xa')]={'type':Number,'required':!![],'validate':_0x2c0578=>Validators[_0x3f74('0x12')](_0x2c0578,Object[_0x3f74('0xb')](WALL_SENSE_TYPES)),'default':WALL_SENSE_TYPES[_0x3f74('0x10')]};_0x587f85[_0x3f74('0xc')]={'type':Number,'required':![],'validate':_0x1fad07=>Validators['valueInArray'](_0x1fad07,Object['values'](WALL_DIRECTIONS))};_0x587f85[_0x3f74('0xf')]={'type':Number,'required':!![],'validate':_0x4e4130=>Validators['valueInArray'](_0x4e4130,Object[_0x3f74('0xb')](WALL_DOOR_TYPES)),'default':WALL_DOOR_TYPES[_0x3f74('0x11')]};_0x587f85['ds']={'type':Number,'required':!![],'default':WALL_DOOR_STATES[_0x3f74('0x9')],'validate':_0x2133e2=>Validators[_0x3f74('0x12')](_0x2133e2,Object[_0x3f74('0xb')](WALL_DOOR_STATES))};return _0x587f85;}static get[_0x3f74('0x8')](){return util['mergeObject'](super[_0x3f74('0x8')],{'collection':_0x3f74('0x14')});}static['canUpdate'](_0x3104fc,_0x167a58,_0x2291ea,_0xd8cf2c){if(_0x3104fc[_0x3f74('0x15')])return!![];if(Object[_0x3f74('0x4')](_0xd8cf2c)[_0x3f74('0x7')](_0x1240b2=>[_0x3f74('0x6'),'ds'][_0x3f74('0x2')](_0x1240b2))){return _0x3104fc['hasRole']('PLAYER');}return![];}}module[_0x3f74('0x3')]={'Wall':Wall};