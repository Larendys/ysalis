const _0xdf12=['../odm/entity','sounds','schema','values','metadata','emit','preloadAudio','mode','../../common/utils','mergeObject','folder','broadcast','playAudio','Invalid\x20Playlist\x20mode\x20provided,\x20you\x20must\x20choose\x20a\x20value\x20from\x20PLAYLIST_MODES','includes','../../common/constants','../embedded/sounds'];(function(_0x4e6bcc,_0xdf1288){const _0x1b098d=function(_0x135627){while(--_0x135627){_0x4e6bcc['push'](_0x4e6bcc['shift']());}};_0x1b098d(++_0xdf1288);}(_0xdf12,0x1ad));const _0x1b09=function(_0x4e6bcc,_0xdf1288){_0x4e6bcc=_0x4e6bcc-0x0;let _0x1b098d=_0xdf12[_0x4e6bcc];return _0x1b098d;};const util=require(_0x1b09('0x4'));const Entity=require(_0x1b09('0xd'));const {PlaylistSound}=require(_0x1b09('0xc'));const {PLAYLIST_MODES}=require(_0x1b09('0xb'));class Playlist extends Entity{static get[_0x1b09('0xf')](){const _0x299710=super[_0x1b09('0xf')];delete _0x299710[_0x1b09('0x6')];_0x299710[_0x1b09('0xe')]={'type':[PlaylistSound],'required':!![],'default':[]};_0x299710[_0x1b09('0x3')]={'type':Number,'required':!![],'default':PLAYLIST_MODES['SEQUENTIAL'],'validate':_0x30ef58=>Object[_0x1b09('0x10')](PLAYLIST_MODES)[_0x1b09('0xa')](_0x30ef58),'validationError':_0x1b09('0x9')};_0x299710['playing']={'type':Boolean,'required':!![],'default':![]};return _0x299710;}static get['metadata'](){return util[_0x1b09('0x5')](super[_0x1b09('0x0')],{'embeddedEntities':{'PlaylistSound':PlaylistSound}});}static['socketListeners'](_0x1beb04){_0x1beb04['on'](_0x1b09('0x8'),_0x57dc5c=>_0x1beb04[_0x1b09('0x7')][_0x1b09('0x1')](_0x1b09('0x8'),_0x57dc5c));_0x1beb04['on'](_0x1b09('0x2'),_0x4518c8=>_0x1beb04['broadcast']['emit']('preloadAudio',_0x4518c8));}}module['exports']={'Playlist':Playlist};