const _0x2b09=['metadata','textAnchor','BOTTOM','../odm/validators','values','hasImageExtension','The\x20provided\x20icon\x20does\x20not\x20have\x20a\x20valid\x20image\x20extension.','notes','exports','mergeObject','icon','../odm/embedded','iconSize','entryId','schema','Font\x20Size\x20must\x20be\x20between\x208\x20and\x20128pt.','Map\x20Note\x20icon\x20size\x20must\x20be\x20at\x20least\x2032px.','text','iconTint','#FFFFFF','../../common/constants','Invalid\x20tooltip\x20anchor\x20location\x20requested.'];(function(_0x48e5da,_0x2b092e){const _0xd691d1=function(_0x12be15){while(--_0x12be15){_0x48e5da['push'](_0x48e5da['shift']());}};_0xd691d1(++_0x2b092e);}(_0x2b09,0x196));const _0xd691=function(_0x48e5da,_0x2b092e){_0x48e5da=_0x48e5da-0x0;let _0xd691d1=_0x2b09[_0x48e5da];return _0xd691d1;};const EmbeddedDocument=require(_0xd691('0x1'));const Validators=require(_0xd691('0xf'));const {DEFAULT_NOTE_ICON,TEXT_ANCHOR_POINTS}=require(_0xd691('0xa'));const util=require('../../common/utils');class Note extends EmbeddedDocument{static get['schema'](){const _0x52e35e=super[_0xd691('0x4')];_0x52e35e[_0xd691('0x3')]={'type':String,'required':![]};_0x52e35e['x']={'type':Number,'required':!![]};_0x52e35e['y']={'type':Number,'required':!![]};_0x52e35e[_0xd691('0x0')]={'type':String,'required':!![],'default':DEFAULT_NOTE_ICON,'validate':Validators[_0xd691('0x11')],'validationError':_0xd691('0x12')};_0x52e35e[_0xd691('0x2')]={'type':Number,'required':!![],'default':0x28,'validate':_0x1a6c9f=>_0x1a6c9f>=0x20,'validationError':_0xd691('0x6')};_0x52e35e[_0xd691('0x8')]={'type':String,'required':![]};_0x52e35e[_0xd691('0x7')]={'type':String,'required':![]};_0x52e35e['fontFamily']={'type':String,'required':!![],'default':'Signika'};_0x52e35e['fontSize']={'type':Number,'required':!![],'default':0x24,'validate':_0x414a39=>_0x414a39['between'](0x8,0x80),'validationError':_0xd691('0x5')};_0x52e35e[_0xd691('0xd')]={'type':Number,'required':!![],'default':TEXT_ANCHOR_POINTS[_0xd691('0xe')],'validate':_0x4874ed=>Object[_0xd691('0x10')](TEXT_ANCHOR_POINTS)['includes'](_0x4874ed),'validationError':_0xd691('0xb')};_0x52e35e['textColor']={'type':String,'required':![],'default':_0xd691('0x9')};return _0x52e35e;}static get['metadata'](){return util[_0xd691('0x15')](super[_0xd691('0xc')],{'collection':_0xd691('0x13')});}}module[_0xd691('0x14')]={'Note':Note};