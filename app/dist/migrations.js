const _0x8f91=['find','Folder','description','Scene','Done\x20migrating\x20User\x20roles','save','deleteMany','Creating\x20Scene\x20Notes\x20journal\x20folder','logger','Migrating\x20Scene\x20Notes\x20for\x20','role','Migrating\x20User\x20roles','journal','info','name','JournalEntry','User','_id','Scene\x20Notes','FogExploration','exports','permission','path','create','findOne'];(function(_0x59e607,_0x8f916a){const _0x2bf263=function(_0x4f72cc){while(--_0x4f72cc){_0x59e607['push'](_0x59e607['shift']());}};_0x2bf263(++_0x8f916a);}(_0x8f91,0x1de));const _0x2bf2=function(_0x59e607,_0x8f916a){_0x59e607=_0x59e607-0x0;let _0x2bf263=_0x8f91[_0x59e607];return _0x2bf263;};const _c=require('./common/constants');const path=require(_0x2bf2('0x13'));const fs=require('fs');const migrations={'0.7.3':[migrateDeleteFOW]};async function migrateUserRole(_0x17e24b){const _0x3600a2=global[_0x2bf2('0x5')];_0x3600a2['info'](_0x2bf2('0x8'));const _0x596fa6=await db[_0x2bf2('0xd')][_0x2bf2('0x16')]({});for(let _0x53a1f7 of _0x596fa6){_0x53a1f7[_0x2bf2('0x7')]=_0x53a1f7[_0x2bf2('0x12')];await _0x53a1f7[_0x2bf2('0x2')]();}_0x3600a2[_0x2bf2('0xa')](_0x2bf2('0x1'));}async function migrateSceneNotes(_0x4e3aca){const {db,logger}=global;let _0x3686d2=await db[_0x2bf2('0x17')][_0x2bf2('0x15')]({'name':_0x2bf2('0xf'),'entity':_0x2bf2('0xc')});if(!_0x3686d2){logger[_0x2bf2('0xa')](_0x2bf2('0x4'));_0x3686d2=db[_0x2bf2('0x17')][_0x2bf2('0x14')]({'name':_0x2bf2('0xf'),'type':_0x2bf2('0xc'),'parent':null});await _0x3686d2[_0x2bf2('0x2')]();}const _0x5bc421=await db[_0x2bf2('0x0')][_0x2bf2('0x16')]({});for(let _0x165069 of _0x5bc421){if(_0x165069['description']){logger[_0x2bf2('0xa')](_0x2bf2('0x6')+_0x165069[_0x2bf2('0xe')]);const _0xb6dd00=db['JournalEntry'][_0x2bf2('0x14')]({'name':_0x165069[_0x2bf2('0xb')],'content':_0x165069[_0x2bf2('0x18')],'folder':_0x3686d2['_id']});await _0xb6dd00[_0x2bf2('0x2')]();_0x165069[_0x2bf2('0x9')]=_0xb6dd00[_0x2bf2('0xe')];await _0x165069['save']();}}}async function migrateDeleteFOW(_0x2283e5){logger['info']('Clearing\x20legacy\x20fog\x20of\x20war\x20storage.');await db[_0x2bf2('0x10')]['db'][_0x2bf2('0x3')]({});}module[_0x2bf2('0x11')]=migrations;