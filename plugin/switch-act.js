/**
 Copyright (C) 2023.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : FORZEN-MD
 * @author : YASIYA-OFC <https://github.com/yasiyaofc1>
 * @description : FORZEN-MD,A Multi-functional whatsapp bot.
 * @version 1.0.0
 **/

function _0x4dba(_0x4ac4fc,_0x404073){const _0x594bc1=_0x594b();return _0x4dba=function(_0x4dba89,_0x4f89ca){_0x4dba89=_0x4dba89-0xb7;let _0x1c8e23=_0x594bc1[_0x4dba89];return _0x1c8e23;},_0x4dba(_0x4ac4fc,_0x404073);}const _0x32c596=_0x4dba;function _0x594b(){const _0x1dba5e=['12wNhfep','decodeJid','Successfully\x20Enabled\x20*NSFW*','Please\x20provide\x20me\x20term\x20like.\x0a1-events\x0a2-antilink\x0a3-nsfw\x0a4-economy','user','split','cardgame','9mhzGHV','economy','Successfully\x20Enabled\x20*Events*','true','Switches\x20for\x20varios\x20works.','24mHyZUV','8ErNtmj','save','findOne','*NSFW*\x20is\x20already\x20enabled','includes','../lib','271405TfRKjR','Economy\x20enabled\x20in\x20current\x20chat.','*Events*\x20are\x20already\x20enabled','antilink','❌\x20This\x20command\x20is\x20only\x20for\x20admin','Antilink\x20was\x20alredy\x20\x20enabled\x20here.*','updateOne','❌\x20Please\x20provide\x20me\x20term\x20like\x20like\x0a1-events\x0a2-antilink\x0a3-nsfw\x0a4-cardgame\x0a5-bot','nsfw','sender','*Card\x20Game*\x20was\x20already\x20enabled','group','reply','48814491mJSPlf','8752429qTRTHN','events','4578280cKRvFG','chat','active','isGroup','13265631uEkaqm','Successfully\x20Enabled\x20*Card\x20Game.*','869220uwaVOf','../config','Enabled\x20antilink\x20in\x20current\x20chat.','387748ZWBSPO','act'];_0x594b=function(){return _0x1dba5e;};return _0x594b();}(function(_0x165b97,_0x31ba2e){const _0x5cb8ac=_0x4dba,_0x4999c8=_0x165b97();while(!![]){try{const _0x4c6fb0=-parseInt(_0x5cb8ac(0xc3))/0x1*(parseInt(_0x5cb8ac(0xde))/0x2)+-parseInt(_0x5cb8ac(0xb7))/0x3*(parseInt(_0x5cb8ac(0xdc))/0x4)+parseInt(_0x5cb8ac(0xd9))/0x5*(parseInt(_0x5cb8ac(0xbc))/0x6)+parseInt(_0x5cb8ac(0xd1))/0x7*(-parseInt(_0x5cb8ac(0xbd))/0x8)+-parseInt(_0x5cb8ac(0xd7))/0x9+parseInt(_0x5cb8ac(0xd3))/0xa+parseInt(_0x5cb8ac(0xd0))/0xb;if(_0x4c6fb0===_0x31ba2e)break;else _0x4999c8['push'](_0x4999c8['shift']());}catch(_0x224210){_0x4999c8['push'](_0x4999c8['shift']());}}}(_0x594b,0xe748a));const {cmd,sck,sck1,getAdmin,tlang,prefix}=require(_0x32c596(0xc2)),Config=require(_0x32c596(0xda));cmd({'pattern':_0x32c596(0xdd),'desc':_0x32c596(0xbb),'category':'group','filename':__filename},async(_0x205718,_0x453b86,_0x34bcd6,{isCreator:_0xb12bdf})=>{const _0x257130=_0x32c596;if(!_0x453b86['isGroup'])return _0x453b86[_0x257130(0xcf)](tlang()[_0x257130(0xce)]);const _0x14b08f=await getAdmin(_0x205718,_0x453b86),_0x358124=await _0x205718[_0x257130(0xdf)](_0x205718[_0x257130(0xe2)]['id']),_0x27109d=_0x453b86[_0x257130(0xd6)]?_0x14b08f['includes'](_0x358124):![],_0x340f0d=_0x453b86['isGroup']?_0x14b08f[_0x257130(0xc1)](_0x453b86[_0x257130(0xcc)]):![];if(!_0x453b86['isGroup'])return _0x453b86[_0x257130(0xcf)]('This\x20command\x20is\x20only\x20for\x20group');if(!_0x34bcd6)return _0x453b86[_0x257130(0xcf)](_0x257130(0xca));if(!_0x340f0d)return _0x453b86[_0x257130(0xcf)](_0x257130(0xc7));switch(_0x34bcd6[_0x257130(0xe3)]('\x20')[0x0]){case'antilink':{let _0x4146f8=await sck[_0x257130(0xbf)]({'id':_0x453b86[_0x257130(0xd4)]});if(!_0x4146f8)return await new sck({'id':_0x453b86[_0x257130(0xd4)],'antilink':_0x257130(0xba)})['save'](),_0x453b86[_0x257130(0xcf)]('\x20Antilink\x20Enabled\x20Successfully');else{if(_0x4146f8[_0x257130(0xc6)]=='true')return _0x453b86[_0x257130(0xcf)](_0x257130(0xc8));await sck[_0x257130(0xc9)]({'id':_0x453b86[_0x257130(0xd4)]},{'antilink':_0x257130(0xba)}),_0x453b86['reply'](_0x257130(0xdb));return;}}break;case'economy':{let _0x3acba8=await sck[_0x257130(0xbf)]({'id':_0x453b86[_0x257130(0xd4)]});if(!_0x3acba8)return await new sck({'id':_0x453b86[_0x257130(0xd4)],'economy':_0x257130(0xba)})[_0x257130(0xbe)](),_0x453b86[_0x257130(0xcf)]('\x20Economy\x20Enabled\x20Successfully');else{if(_0x3acba8[_0x257130(0xb8)]==_0x257130(0xba))return _0x453b86[_0x257130(0xcf)]('Economy\x20was\x20alredy\x20enabled.');await sck[_0x257130(0xc9)]({'id':_0x453b86['chat']},{'economy':_0x257130(0xba)}),_0x453b86[_0x257130(0xcf)](_0x257130(0xc4));return;}}break;case _0x257130(0xd2):{let _0x8bfcaf=await sck[_0x257130(0xbf)]({'id':_0x453b86['chat']});if(!_0x8bfcaf)return await new sck({'id':_0x453b86['chat'],'events':_0x257130(0xba)})[_0x257130(0xbe)](),_0x453b86[_0x257130(0xcf)]('Successfully\x20Enabled\x20*Events*');else{if(_0x8bfcaf[_0x257130(0xd2)]=='true')return _0x453b86[_0x257130(0xcf)](_0x257130(0xc5));return await sck[_0x257130(0xc9)]({'id':_0x453b86[_0x257130(0xd4)]},{'events':_0x257130(0xba)}),_0x453b86['reply'](_0x257130(0xb9));}}break;case _0x257130(0xe4):{let _0xfb672d=sck[_0x257130(0xbf)]({'id':_0x453b86['chat']});if(!_0xfb672d)return await new sck({'id':_0x453b86[_0x257130(0xd4)],'cardgame':_0x257130(0xd5)})[_0x257130(0xbe)](),_0x453b86[_0x257130(0xcf)]('Successfully\x20Enabled\x20*Card\x20Game*');else{if(_0xfb672d['cardgame']==_0x257130(0xd5))return _0x453b86[_0x257130(0xcf)](_0x257130(0xcd));return await sck['updateOne']({'id':_0x453b86['chat']},{'cardgame':_0x257130(0xd5)}),_0x453b86[_0x257130(0xcf)](_0x257130(0xd8));}}break;case _0x257130(0xcb):{let _0x419233=await sck['findOne']({'id':_0x453b86[_0x257130(0xd4)]});if(!_0x419233)return await new sck({'id':_0x453b86['chat'],'nsfw':_0x257130(0xba)})[_0x257130(0xbe)](),_0x453b86[_0x257130(0xcf)](_0x257130(0xe0));else{if(_0x419233[_0x257130(0xcb)]==_0x257130(0xba))return _0x453b86[_0x257130(0xcf)](_0x257130(0xc0));await sck[_0x257130(0xc9)]({'id':_0x453b86[_0x257130(0xd4)]},{'nsfw':_0x257130(0xba)}),_0x453b86[_0x257130(0xcf)](_0x257130(0xe0));return;}}break;default:{_0x453b86[_0x257130(0xcf)](_0x257130(0xe1));}}});