const _0x221b=['disabled','summary','img','form','strong','isColorString','sorted','target','includes','width','header','tbody','blockquote','draggable','test','exports','cleanHTML','data-*','title','parse','span','map','option','button','href','_hasFileExtension','data','hasImageExtension','isJSON','abbr','valueInArray','scope','code','defineProperty','colspan','name','sanitize-html','select','rowspan','parseFragment','selected','isValidId','https','serialize','checked','isBase64Image','class','details','footer','label','headers','hasAudioExtension','open','table',')(\x5c?.*)?$','placeholder'];(function(_0x4eb99a,_0x221b2c){const _0x4b614b=function(_0x25c46f){while(--_0x25c46f){_0x4eb99a['push'](_0x4eb99a['shift']());}};_0x4b614b(++_0x221b2c);}(_0x221b,0x1af));const _0x4b61=function(_0x4eb99a,_0x221b2c){_0x4eb99a=_0x4eb99a-0x0;let _0x4b614b=_0x221b[_0x4eb99a];return _0x4b614b;};'use strict';Object[_0x4b61('0x32')](exports,'__esModule',{'value':!![]});const parse5=require('parse5');const sanitizeHTML=require(_0x4b61('0x35'));const {IMAGE_FILE_EXTENSIONS,VIDEO_FILE_EXTENSIONS,AUDIO_FILE_EXTENSIONS}=require('../../common/constants');class Validators{static[_0x4b61('0x2')](_0x4f013e){return/^[a-zA-Z0-9]{16}$/[_0x4b61('0x1f')](_0x4f013e);}static[_0x4b61('0x2a')](_0x26e347,_0x80f9db){const _0x5e623e=_0x80f9db[_0x4b61('0x26')](_0x268879=>'\x5c.'+_0x268879)['join']('|');const _0x18970c=new RegExp('('+_0x5e623e+_0x4b61('0xf'),'i');return!!_0x26e347&&_0x18970c[_0x4b61('0x1f')](_0x26e347);}static[_0x4b61('0x2c')](_0x5c72b4){return Validators[_0x4b61('0x2a')](_0x5c72b4,IMAGE_FILE_EXTENSIONS)||Validators[_0x4b61('0x6')](_0x5c72b4);}static[_0x4b61('0x6')](_0x4cfc39){return/^data:image\/(png|jpeg);base64,/[_0x4b61('0x1f')](_0x4cfc39);}static[_0x4b61('0x16')](_0x5b630c){return/#[0-9A-z]{6}/[_0x4b61('0x1f')](_0x5b630c);}static['hasVideoExtension'](_0x2a6b2d){return Validators[_0x4b61('0x2a')](_0x2a6b2d,VIDEO_FILE_EXTENSIONS);}static[_0x4b61('0xc')](_0x5e7919){return Validators[_0x4b61('0x2a')](_0x5e7919,AUDIO_FILE_EXTENSIONS);}static[_0x4b61('0x2f')](_0x3b7ea0,_0x16dc50){return _0x16dc50[_0x4b61('0x19')](_0x3b7ea0);}static[_0x4b61('0x2d')](_0x2b3ecb){try{JSON[_0x4b61('0x24')](_0x2b3ecb);return!![];}catch(_0x4542df){return![];}}static[_0x4b61('0x21')](_0x3c8938){const _0x3635d9=parse5[_0x4b61('0x0')](_0x3c8938);const _0x578903=sanitizeHTML(parse5[_0x4b61('0x4')](_0x3635d9),{'allowedTags':[_0x4b61('0x1b'),'h1','h2','h3','h4','h5','h6',_0x4b61('0x9'),'hr',_0x4b61('0x1d'),'p','a','ul','ol','nl','li','b','i','u','s',_0x4b61('0x15'),'em',_0x4b61('0x31'),_0x4b61('0x14'),'input',_0x4b61('0x36'),_0x4b61('0x27'),_0x4b61('0x28'),_0x4b61('0xa'),_0x4b61('0x25'),_0x4b61('0x12'),_0x4b61('0x8'),'br','div',_0x4b61('0xe'),'thead',_0x4b61('0x1c'),'tr','th','td','pre',_0x4b61('0x13')],'allowedAttributes':{'a':[_0x4b61('0x29'),_0x4b61('0x34'),_0x4b61('0x18')],'details':[_0x4b61('0xd')],'input':[_0x4b61('0x5'),_0x4b61('0x11'),'name','value',_0x4b61('0x10'),'type'],'img':['height','src',_0x4b61('0x1a')],'label':['for'],'select':[_0x4b61('0x34'),_0x4b61('0x11')],'option':['disabled',_0x4b61('0x1')],'td':[_0x4b61('0x33'),_0x4b61('0xb'),_0x4b61('0x37')],'th':[_0x4b61('0x2e'),_0x4b61('0x33'),'headers',_0x4b61('0x37'),_0x4b61('0x30'),_0x4b61('0x17')],'*':[_0x4b61('0x7'),_0x4b61('0x22'),'id',_0x4b61('0x23'),'style',_0x4b61('0x1e')]},'allowedSchemes':['http',_0x4b61('0x3'),_0x4b61('0x2b'),'mailto']});return _0x578903;}}exports['default']=Validators;module[_0x4b61('0x20')]=Validators;