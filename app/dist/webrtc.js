const _0x1be8=['server','info','Socket\x20connection\x20failed\x20to\x20authenticate\x20to\x20WebRTC\x20Signaling\x20server.','WebRTC\x20Server\x20started\x20successfully','mode','proxySSL','sessionId','open-easyrtc','ssl','./common/utils','warn','bind','turnConfigs','silly','Error\x20starting\x20WebRTC\x20Server:\x20','addresses','log','events','logger','world','stop','EasyRTC:\x20','socket','turn:','./auth','turnServer','push','_onLog','FVTT','default','authenticate','error','start','express','0.0.0.0','options','includes','warning','socket.io','emit','The\x20WebRTC\x20server\x20was\x20requested\x20to\x20start,\x20but\x20Foundry\x20Virtual\x20Tabletop\x20is\x20not\x20running\x20in\x20SSL\x20mode\x20which\x20is\x20required.','FoundryVTT','_onAuthenticate','sessions','_createTurnServer'];(function(_0x2ddfe4,_0x1be8dc){const _0x4325bc=function(_0xaec121){while(--_0xaec121){_0x2ddfe4['push'](_0x2ddfe4['shift']());}};_0x4325bc(++_0x1be8dc);}(_0x1be8,0x124));const _0x4325=function(_0x2ddfe4,_0x1be8dc){_0x2ddfe4=_0x2ddfe4-0x0;let _0x4325bc=_0x1be8[_0x2ddfe4];return _0x4325bc;};const io=require(_0x4325('0x10'));const freeice=require('freeice');const Turn=require('node-turn');const easyrtc=require(_0x4325('0x1e'));const {sessions}=require(_0x4325('0x2'));const {randomID,getProperty,getRoute}=require(_0x4325('0x20'));class WebRTCServer{constructor(_0x41efae,_0x5a67bc,_0xb4748f){this[_0x4325('0xb')]=_0x41efae;this[_0x4325('0x17')]=_0x5a67bc;this['options']=_0xb4748f;this['socket']=null;this[_0x4325('0x3')]=null;easyrtc[_0x4325('0x28')]['on'](_0x4325('0x8'),this[_0x4325('0x14')][_0x4325('0x22')](this));easyrtc[_0x4325('0x28')]['on'](_0x4325('0x27'),this[_0x4325('0x5')][_0x4325('0x22')](this));}async[_0x4325('0xa')](_0x243894){if(this[_0x4325('0x0')])return!![];if(!this[_0x4325('0xb')][_0x4325('0x1f')]&&!this[_0x4325('0xd')][_0x4325('0x1c')]){console[_0x4325('0x9')](_0x4325('0x12'));return![];}if(!_0x243894||!_0x243894[_0x4325('0x1b')]||getProperty(_0x243894,'server.type')!==_0x4325('0x6'))return![];return new Promise(async _0x19f25b=>{const _0x4c8c04=io(this['server'],{'path':getRoute('easyrtc',{'prefix':this[_0x4325('0xb')]['routePrefix']})});const _0x24e437=freeice({'stunCount':0x2});if(this[_0x4325('0xd')][_0x4325('0x23')]instanceof Array){_0x24e437[_0x4325('0x4')](...this[_0x4325('0xd')][_0x4325('0x23')]);}else{const _0x22ec1d=randomID(0x10);const _0x2ef83a=randomID(0x10);const [_0x231c1c,_0x775434]=this[_0x4325('0x16')](_0x22ec1d,_0x2ef83a);this[_0x4325('0x3')]=_0x231c1c;_0x24e437['push']({'username':_0x22ec1d,'credential':_0x2ef83a,'url':_0x775434,'urls':[_0x775434]});}easyrtc['listen'](null,_0x4c8c04,{'appDefaultName':_0x4325('0x13'),'appAutoCreateEnable':![],'roomDefaultName':_0x4325('0x7'),'roomDefaultEnable':!![],'roomAutoCreateEnable':![],'appIceServers':_0x24e437,'apiEnable':![],'apiLabsEnable':![],'demosEnable':![],'sessionEnable':![],'logLevel':'info'},_0x5be5bd=>{if(_0x5be5bd){global['logger'][_0x4325('0x18')](_0x4325('0x25')+_0x5be5bd);_0x4c8c04['close']();_0x19f25b(![]);}else{global[_0x4325('0x29')][_0x4325('0x18')](_0x4325('0x1a'));this[_0x4325('0x0')]=_0x4c8c04;_0x19f25b(!![]);}});});}[_0x4325('0x16')](_0xd355df,_0x6525b6){const {turnListeningPort,turnListeningIps,turnExternalIps,turnRelayIps,turnMinPort,turnMaxPort,hostname}=this[_0x4325('0xd')];const _0x1f2857=turnListeningPort?turnListeningPort:0x82c6;const {remote,external}=this[_0x4325('0xb')][_0x4325('0x26')];const _0x443457=new Turn({'listeningPort':_0x1f2857,'listeningIps':turnListeningIps||[_0x4325('0xc')],'externalIps':turnExternalIps||external,'relayIps':turnRelayIps,'minPort':turnMinPort,'maxPort':turnMaxPort,'authMech':'long-term','credentials':{[_0xd355df]:_0x6525b6},'realm':hostname||'foundryvtt.com'});_0x443457[_0x4325('0xa')]();const _0x520698=_0x4325('0x1')+remote+':'+_0x1f2857;return[_0x443457,_0x520698];}async['stop'](){if(!this[_0x4325('0x0')])return!![];return new Promise(_0x3fb19d=>{if(this[_0x4325('0x3')])this[_0x4325('0x3')][_0x4325('0x2b')]();this[_0x4325('0x3')]=null;easyrtc['events'][_0x4325('0x11')]('shutdown',_0x234b9a=>_0x3fb19d(![]));});}async['_onAuthenticate'](_0x4542b5,_0x7ef7d8,_0x51feae,_0x300917,_0x3fdc32,_0x5cf087,_0x32e39d){const _0x1c583d=sessions[_0x4325('0x15')][_0x3fdc32[_0x4325('0x1d')]];const _0x22c6f9=_0x1c583d?_0x1c583d['worlds'][game[_0x4325('0x2a')]['id']]:null;let _0x299504=_0x22c6f9&&_0x300917===_0x22c6f9;_0x32e39d(_0x299504?null:_0x4325('0x19'));}[_0x4325('0x5')](_0xaf997d,_0x1bf7d1,_0x118eef,_0x51bed2){if(_0xaf997d===_0x4325('0xf'))_0xaf997d=_0x4325('0x21');else if(!['debug',_0x4325('0x18'),_0x4325('0x9')][_0x4325('0xe')](_0xaf997d))_0xaf997d=_0x4325('0x24');global[_0x4325('0x29')][_0x4325('0x27')](_0xaf997d,_0x4325('0x2c')+_0x1bf7d1,_0x118eef);if(_0x51bed2 instanceof Function)_0x51bed2(null);}}module['exports']={'WebRTCServer':WebRTCServer};