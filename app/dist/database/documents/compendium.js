const _0x3361=['source','_onModifyDocument','postSave','path','modifyCompendium','\x20entities\x20in\x20Compendium\x20pack\x20','migrate','Compendium\x20packs\x20must\x20specify\x20their\x20relative\x20file\x20path.','filename','\x20already\x20exists\x20in\x20the\x20World\x20and\x20cannot\x20be\x20created','deleteMany','../../const','info','packs','Migrating\x20','map','create','permission','The\x20Compendium\x20pack\x20','validateMetadata','absPath','default','Compendium\x20packs\x20must\x20specify\x20the\x20entity\x20type\x20they\x20contain.','label','_onGet','\x20provided\x20for\x20Database\x20operation','disconnect','package','Compendium\x20packs\x20must\x20define\x20a\x20canonical\x20name','has','thumb','_onCreate','name','An\x20absolute\x20file\x20path\x20must\x20be\x20provided\x20when\x20a\x20new\x20Compendium\x20is\x20defined.','_onMigrateCompendium','Compendium','../odm/document','The\x20provided\x20Compendium\x20query\x20returned\x20multiple\x20results\x20when\x20only\x20one\x20was\x20expected','COMPENDIUM_ENTITY_TYPES','preSave','_getTable','canUpdate','_onCreateCompendium','index','get','sort','prototype','User\x20','\x20does\x20not\x20exist!','_id','An\x20implementation\x20of\x20the\x20BaseCompendium\x20class\x20must\x20define\x20its\x20file\x20path','includes','hasRole','manageCompendium','Migrated\x20all\x20','\x20does\x20not\x20exist','entry','\x20cannot\x20migrate\x20a\x20Compendium\x20Pack','slugify','\x20is\x20configured\x20for\x20an\x20invalid\x20Entity\x20type\x20','isGM','Compendium\x20','save','exports','connect','delete','existsSync','call','_onDeleteCompendium','Invalid\x20Compendium\x20management\x20action\x20','collection','content','world.','\x20in\x20Compendium\x20pack\x20','.db','\x20Compendium\x20to\x20updated\x20system\x20template\x20version.','Invalid\x20Compendium\x20collection\x20','_deletePack','The\x20Compendium\x20Pack\x20','defineProperty','activate','\x20cannot\x20delete\x20a\x20Compendium\x20pack','system','__esModule','metadata','length','Created\x20new\x20Compendium\x20Pack\x20','entity','packs/','socketListeners','ASSISTANT','Migrated\x20','world','find','connected','getCompendium','\x20cannot\x20create\x20a\x20Compendium\x20Pack','bind','_onManageCompendium'];(function(_0x48fc5d,_0x336152){const _0x12dc5d=function(_0x5c69e1){while(--_0x5c69e1){_0x48fc5d['push'](_0x48fc5d['shift']());}};_0x12dc5d(++_0x336152);}(_0x3361,0x196));const _0x12dc=function(_0x48fc5d,_0x336152){_0x48fc5d=_0x48fc5d-0x0;let _0x12dc5d=_0x3361[_0x48fc5d];return _0x12dc5d;};'use strict';var __importDefault=this&&this['__importDefault']||function(_0x178f9e){return _0x178f9e&&_0x178f9e[_0x12dc('0x49')]?_0x178f9e:{'default':_0x178f9e};};Object[_0x12dc('0x45')](exports,_0x12dc('0x49'),{'value':!![]});const fs_1=__importDefault(require('fs'));const const_1=require(_0x12dc('0x1'));const document_1=__importDefault(require(_0x12dc('0x1a')));class BaseCompendium extends document_1[_0x12dc('0xb')]{static get['schema'](){return db[this[_0x12dc('0x4a')][_0x12dc('0x4d')]]['schema'];}static get[_0x12dc('0x4a')](){throw new Error('An\x20implementation\x20of\x20the\x20BaseCompendium\x20class\x20must\x20define\x20it\x27s\x20own\x20metadata');}static get[_0x12dc('0x61')](){throw new Error(_0x12dc('0x28'));}static get[_0x12dc('0x3c')](){return this[_0x12dc('0x4a')]['package']+'.'+this['metadata'][_0x12dc('0x16')];}static[_0x12dc('0x1f')](_0x51c884,_0x35af83,_0xc3a69e){return _0x51c884[_0x12dc('0x2a')](_0x12dc('0x50'));}static[_0x12dc('0x6')](_0x41c3fd,_0x27decb){const _0x5d68cc=db[this[_0x12dc('0x4a')]['entity']];const _0x35d46d=_0x5d68cc[_0x12dc('0x6')](_0x41c3fd,_0x27decb);return super[_0x12dc('0x6')](_0x35d46d,_0x27decb);}static async['migrate'](_0x325ba2){logger['info'](_0x12dc('0x4')+this[_0x12dc('0x4a')][_0x12dc('0x16')]+_0x12dc('0x41'));let _0x4530dc=db[this[_0x12dc('0x4a')][_0x12dc('0x4d')]];if(!this[_0x12dc('0x54')])await this[_0x12dc('0x36')]();const _0x597372=await this[_0x12dc('0x53')]();for(let _0x47158f of _0x597372){const _0x1f2937=new _0x4530dc(_0x47158f);_0x1f2937['_updateDataModel'](_0x325ba2);const _0x5b73c3=new this(_0x1f2937);await _0x5b73c3[_0x12dc('0x34')](_0x325ba2);logger[_0x12dc('0x2')](_0x12dc('0x51')+this[_0x12dc('0x4a')][_0x12dc('0x4d')]+'\x20'+_0x1f2937['name']+_0x12dc('0x3f')+this[_0x12dc('0x3c')]+'.');}logger[_0x12dc('0x2')](_0x12dc('0x2c')+_0x597372['length']+'\x20'+this[_0x12dc('0x4a')][_0x12dc('0x16')]+_0x12dc('0x5e')+this[_0x12dc('0x3c')]+'.');}async[_0x12dc('0x1d')](_0x3bfec0){const _0x82872c=this['constructor']['metadata'];let _0x4c4240=db[_0x82872c[_0x12dc('0x4d')]];_0x4c4240[_0x12dc('0x24')]['preSave'][_0x12dc('0x39')](this,_0x3bfec0);}[_0x12dc('0x5b')](_0x5766e2){const _0x528560=this['constructor'][_0x12dc('0x4a')];let _0x5241c2=db[_0x528560['entity']];return _0x5241c2[_0x12dc('0x24')]['postSave'][_0x12dc('0x39')](this,_0x5766e2);}static[_0x12dc('0x9')](_0x5dede4={}){if(!('name'in _0x5dede4))throw new Error(_0x12dc('0x12'));if(!(_0x12dc('0x5c')in _0x5dede4))throw new Error(_0x12dc('0x60'));if(!(_0x12dc('0x4d')in _0x5dede4))throw new Error(_0x12dc('0xc'));if(!const_1[_0x12dc('0x1c')][_0x12dc('0x29')](_0x5dede4[_0x12dc('0x4d')])){throw new Error(_0x12dc('0x33')+_0x5dede4['label']+_0x12dc('0x31')+_0x5dede4[_0x12dc('0x4d')]);}return!![];}static[_0x12dc('0x55')](_0xde07f3={}){this[_0x12dc('0x9')](_0xde07f3);let _0x372d4a=_0xde07f3['package']+'.'+_0xde07f3['name'];if(!db[_0x12dc('0x3')][_0x12dc('0x13')](_0x372d4a)){const _0x3c7c45=defineCompendium(_0xde07f3);_0x3c7c45[_0x12dc('0x46')]();}return db['packs']['get'](_0x372d4a);}static['activate'](){db[_0x12dc('0x3')]['set'](this[_0x12dc('0x3c')],this);}static[_0x12dc('0x10')](){super[_0x12dc('0x10')]();db[_0x12dc('0x3')][_0x12dc('0x37')](this['collection']);}static[_0x12dc('0x4f')](_0xbabd8c,_0x3a92b5){_0xbabd8c['on'](_0x12dc('0x2b'),_0x3a92b5[_0x12dc('0x57')](_0xbabd8c,_0x12dc('0x2b'),this[_0x12dc('0x58')][_0x12dc('0x57')](this)));_0xbabd8c['on'](_0x12dc('0x5d'),_0x3a92b5[_0x12dc('0x57')](_0xbabd8c,'modifyCompendium',this[_0x12dc('0x5a')][_0x12dc('0x57')](this)));}static async[_0x12dc('0x1e')](_0x32496f){if(!_0x32496f||!db[_0x12dc('0x3')][_0x12dc('0x13')](_0x32496f)){throw new Error(_0x12dc('0x42')+_0x32496f+_0x12dc('0xf'));}const _0x310f85=db[_0x12dc('0x3')][_0x12dc('0x22')](_0x32496f);if(!_0x310f85['connected'])await _0x310f85[_0x12dc('0x36')]();return _0x310f85;}static async[_0x12dc('0xe')](_0x9caf5a,_0x5348a1,_0x55f9e4){_0x55f9e4['broadcast']=![];const _0x1c216c=await this['find'](_0x5348a1,{'sort':{'name':0x1}});switch(_0x55f9e4['returnType']){case _0x12dc('0x21'):return _0x1c216c[_0x12dc('0x5')](_0x44d584=>{return{'_id':_0x44d584[_0x12dc('0x27')],'name':_0x44d584[_0x12dc('0x16')],'img':_0x44d584[_0x12dc('0x14')]||_0x44d584['img']};});case _0x12dc('0x2e'):if(_0x1c216c[_0x12dc('0x4b')]>0x1){throw new Error(_0x12dc('0x1b'));}return _0x1c216c;case _0x12dc('0x3d'):default:return _0x1c216c;}}static async[_0x12dc('0x15')](_0x2f15bf,_0x1937d7,_0x215b75){if(!this[_0x12dc('0x54')])await this[_0x12dc('0x36')]();for(let _0x41ba88 of _0x1937d7){delete _0x41ba88[_0x12dc('0x27')];delete _0x41ba88[_0x12dc('0x7')];delete _0x41ba88['folder'];delete _0x41ba88[_0x12dc('0x23')];}return super[_0x12dc('0x15')](_0x2f15bf,_0x1937d7,_0x215b75);}static async[_0x12dc('0x58')](_0x202983,{action,type,data,options}){switch(action){case _0x12dc('0x6'):return this[_0x12dc('0x20')](_0x202983,data,options);case _0x12dc('0x37'):return this[_0x12dc('0x3a')](_0x202983,data,options);case'migrate':return this[_0x12dc('0x18')](_0x202983,data,options);default:throw new Error(_0x12dc('0x3b')+action+'\x20requested');}}static async['_onCreateCompendium'](_0x287760,_0x272171,_0x27b210={}){if(!_0x287760['isGM'])throw new Error(_0x12dc('0x25')+_0x287760[_0x12dc('0x16')]+_0x12dc('0x56'));_0x272171['name']=_0x272171[_0x12dc('0x16')]||_0x272171[_0x12dc('0xd')][_0x12dc('0x30')]({'strict':!![]});_0x272171[_0x12dc('0x5c')]=_0x12dc('0x4e')+_0x272171[_0x12dc('0x16')]+_0x12dc('0x40');_0x272171[_0x12dc('0x48')]=game['world'][_0x12dc('0x48')]['id'];_0x272171[_0x12dc('0x11')]=_0x12dc('0x52');if(db['packs'][_0x12dc('0x13')](_0x272171['package']+'.'+_0x272171['name'])){throw new Error(_0x12dc('0x8')+_0x272171[_0x12dc('0x16')]+_0x12dc('0x62'));}game[_0x12dc('0x52')]['_createPack'](_0x272171);const _0x49c27e=this[_0x12dc('0x55')](_0x272171);if(_0x27b210[_0x12dc('0x59')]){const _0x188551=db[_0x12dc('0x3')][_0x12dc('0x22')](_0x27b210[_0x12dc('0x59')])||null;if(_0x188551)fs_1[_0x12dc('0xb')]['copyFileSync'](_0x188551[_0x12dc('0x61')],_0x49c27e[_0x12dc('0x61')]);}logger[_0x12dc('0x2')](_0x12dc('0x4c')+_0x49c27e['collection']);return _0x49c27e[_0x12dc('0x4a')];}static async[_0x12dc('0x3a')](_0x69858,_0x5125b0,_0x1dabe4={}){if(!_0x69858[_0x12dc('0x32')])throw new Error(_0x12dc('0x25')+_0x69858[_0x12dc('0x16')]+_0x12dc('0x47'));const _0x16f3e6=_0x12dc('0x3e')+_0x5125b0;if(!db[_0x12dc('0x3')][_0x12dc('0x13')](_0x16f3e6))throw new Error('The\x20requested\x20World\x20pack\x20name\x20'+_0x5125b0+_0x12dc('0x2d'));const _0x1f06ae=db['packs'][_0x12dc('0x22')]('world.'+_0x5125b0);game[_0x12dc('0x52')][_0x12dc('0x43')](_0x5125b0);if(_0x1f06ae[_0x12dc('0x54')])await _0x1f06ae['db'][_0x12dc('0x0')]({});if(fs_1[_0x12dc('0xb')][_0x12dc('0x38')](_0x1f06ae['filename']))fs_1['default']['unlinkSync'](_0x1f06ae['filename']);db[_0x12dc('0x3')][_0x12dc('0x37')](_0x16f3e6);return _0x1f06ae[_0x12dc('0x4a')];}static async[_0x12dc('0x18')](_0x2b7329,_0x3a732d,_0x36f22f={}){if(!_0x2b7329[_0x12dc('0x32')])throw new Error('User\x20'+_0x2b7329[_0x12dc('0x16')]+_0x12dc('0x2f'));if(!db[_0x12dc('0x3')]['has'](_0x3a732d))throw new Error(_0x12dc('0x44')+_0x3a732d+_0x12dc('0x26'));const _0x2a152d=db['packs'][_0x12dc('0x22')](_0x3a732d);if(!_0x2a152d[_0x12dc('0x54')])await _0x2a152d[_0x12dc('0x36')]();await _0x2a152d[_0x12dc('0x5f')](_0x36f22f);return _0x2a152d[_0x12dc('0x4a')];}}exports[_0x12dc('0xb')]=BaseCompendium;function defineCompendium(_0x4e81af){const _0x287460=_0x4e81af[_0x12dc('0xa')];if(!_0x287460)throw new Error(_0x12dc('0x17'));const _0x228f5d=class _0x2d6c60 extends BaseCompendium{static get[_0x12dc('0x4a')](){return _0x4e81af;}static get[_0x12dc('0x61')](){return _0x287460;}};Object[_0x12dc('0x45')](_0x228f5d,_0x12dc('0x16'),{'value':_0x12dc('0x19')+_0x4e81af[_0x12dc('0x4d')],'writable':![]});return _0x228f5d;}module[_0x12dc('0x35')]=BaseCompendium;