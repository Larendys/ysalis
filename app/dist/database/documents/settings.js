const _0x582c=['core.time','permissions','string','save','start','values','modifyDocument','push','parse','set','activity','_onDelete','../odm/document','express','update','reduce','key','defaultRole','worldTime','core.moduleConfiguration','SETTINGS_MODIFY','value','_onUpdate','User\x20','findOne','core.permissions','_id','webrtc','world','hasPermission','updateActivePacks','schema','name','core.rtcWorldSettings','getPermissions','\x20lacks\x20permission\x20to\x20update\x20the\x20World\x20setting\x20','canUpdate','get','stringify'];(function(_0x1c7c2f,_0x582cf9){const _0x46e55e=function(_0x2e72a5){while(--_0x2e72a5){_0x1c7c2f['push'](_0x1c7c2f['shift']());}};_0x46e55e(++_0x582cf9);}(_0x582c,0xdb));const _0x46e5=function(_0x1c7c2f,_0x582cf9){_0x1c7c2f=_0x1c7c2f-0x0;let _0x46e55e=_0x582c[_0x1c7c2f];return _0x46e55e;};const Document=require(_0x46e5('0x1b'));const {USER_PERMISSIONS,USER_ROLES}=require('../../common/constants');class Setting extends Document{static get[_0x46e5('0x7')](){const _0x3c874c=super[_0x46e5('0x7')];_0x3c874c['key']={'type':String,'required':!![]};_0x3c874c[_0x46e5('0x24')]={'type':String,'required':!![]};return _0x3c874c;}static['canUpdate'](_0x56c642,_0x5f2cb7,_0x1c6ad9){return _0x56c642[_0x46e5('0x5')](_0x46e5('0x23'));}async['preSave'](){if(this[_0x46e5('0x1f')]===_0x46e5('0x1'))game[_0x46e5('0x10')]=JSON['parse'](this[_0x46e5('0x24')]);else if(this[_0x46e5('0x1f')]===_0x46e5('0x22'))await game[_0x46e5('0x4')][_0x46e5('0x6')]();}static async[_0x46e5('0x25')](_0x46bbaa,{key,value},_0x24a1b2){if(!this[_0x46e5('0xc')](_0x46bbaa)){throw new Error(_0x46e5('0x26')+_0x46bbaa[_0x46e5('0x8')]+_0x46e5('0xb')+key);}const _0xc8b94c=await this[_0x46e5('0x18')](key,value);return _0xc8b94c;}static async[_0x46e5('0x1a')](_0x18c613,_0x4e1225,_0x2dc51e){const _0x8cdeb1=await this['findOne']({'key':_0x4e1225});await this['db']['deleteOne']({'_id':_0x8cdeb1[_0x46e5('0x2')]});return _0x4e1225;}static async['get'](_0x4e58d8){let _0x58cc22=await this['findOne']({'key':_0x4e58d8});if(_0x58cc22===null)return null;return JSON[_0x46e5('0x17')](_0x58cc22[_0x46e5('0x24')]);}static async[_0x46e5('0x18')](_0x2f9f79,_0x2f4cae){_0x2f4cae=typeof _0x2f4cae===_0x46e5('0x11')?_0x2f4cae:JSON[_0x46e5('0xe')](_0x2f4cae);let _0x5a3427=await this[_0x46e5('0x0')]({'key':_0x2f9f79});if(_0x5a3427)_0x5a3427['update']({'value':_0x2f4cae});else _0x5a3427=this['create']({'key':_0x2f9f79,'value':_0x2f4cae});await _0x5a3427[_0x46e5('0x12')]();switch(_0x2f9f79){case _0x46e5('0x1'):game[_0x46e5('0x10')]=JSON[_0x46e5('0x17')](_0x2f4cae);break;case _0x46e5('0x22'):await game['world'][_0x46e5('0x6')]();break;case _0x46e5('0xf'):game[_0x46e5('0x19')][_0x46e5('0x21')]=parseInt(_0x2f4cae);break;case _0x46e5('0x9'):await global[_0x46e5('0x1c')][_0x46e5('0x3')][_0x46e5('0x13')](JSON['parse'](_0x2f4cae));break;}return _0x5a3427;}static async[_0x46e5('0xa')](){let _0x3b98c4=await this[_0x46e5('0xd')]('core.permissions')||{};let _0x6af2cc=![];for(let [_0x223911,_0x371103]of Object['entries'](USER_PERMISSIONS)){if(!(_0x223911 in _0x3b98c4)){_0x3b98c4[_0x223911]=Object[_0x46e5('0x14')](USER_ROLES)[_0x46e5('0x1e')]((_0x57f9bc,_0x350db0)=>{if(_0x371103[_0x46e5('0x20')]<=_0x350db0)_0x57f9bc[_0x46e5('0x16')](_0x350db0);return _0x57f9bc;},[]);_0x6af2cc=!![];}}if(_0x6af2cc)await this[_0x46e5('0x18')](_0x46e5('0x1'),_0x3b98c4);return game[_0x46e5('0x10')]=_0x3b98c4;}static async['advanceTime'](_0x40c061){if(!_0x40c061)return;const _0x5ba1a0=await this[_0x46e5('0xd')]('core.time');const _0x58ceab=_0x5ba1a0+_0x40c061;await this[_0x46e5('0x18')]('core.time',_0x58ceab);global[_0x46e5('0x1c')]['io']['emit'](_0x46e5('0x15'),{'request':{'type':'Setting','action':_0x46e5('0x1d')},'result':{'key':'core.time','value':_0x58ceab}});}}module['exports']={'Setting':Setting};