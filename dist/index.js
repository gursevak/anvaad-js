!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["anvaad-js"]=t():e["anvaad-js"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(3),i=n(4),u=n(7);e.exports={ascii:a,firstLetters:r,mainLetters:o,translit:i,unicode:u}},function(e,t,n){"use strict";function a(e){return","+e.split("").map(function(e){return String(e.charCodeAt(0)).padStart(3,"0")}).join(",")+","}e.exports=a},function(e,t,n){"use strict";function a(){function e(e){return e?"i"!==e[0]||n?"|"===e[0]?"":e[0]:e[1]:""}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?t.replace(/\]/g,"").replace(/rhwa/g,"").replace(/[0-9]/g,"").split(" ").map(e).join(""):""}e.exports=a},function(e,t,n){"use strict";function a(e){return e.replace(/[^A-Za-z ]/g,"").replace(/[uUiIyYwWoOMNØRH@~®`]/g,"").trim()}e.exports=a},function(e,t,n){"use strict";function a(e){function t(e,t,n,a){var r=[" ","pehilaa","doojaa","teejaa","chauthhaa","panjavaa","chhayvaa","satvaa","atthvaa","nauvaa","dasvaa","gayaarvaa","baarvaa","tayrvaa","chaudavaa","pandaravaa","solavaa","sataaravaa"];return n.replace("m:","mahalaa")+" "+r[a]}var n=e;[["Ú",":"],["ˆ","N"],["Í","vY"],["vYY","vY"],["Œ","œ"],["†","t"],["ey","e"]].forEach(function(e){n=n.replace(new RegExp(e[0],"g"),e[1])}),n=r(n);var a=/i./gm;n=n.replace(a,function(e){return e.split("").reverse().join("")}),n=n.split("");for(var o=n.length,i=0;i<o;i+=1)!function(e){var t=n[e],a=n[e+1]||"",r=[["!","!"],['"','"'],["#","#"],["$","$"],["%","%"],["&","ph"],["'","'"],["(","("],[")",")"],["*","i"],["+","+"],[",",","],["-","-"],[".","."],["/","-"],[0,"0"],[1,"1"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[6,"6"],[7,"7"],[8,"8"],[9,"9"],[":",":"],[";",";"],["<","ik"],["=","="],[">","Oankaar"],["?","?"],["@","(h)"],["A","a"],["B","bh"],["C","chh"],["D","dh"],["E","o"],["F","dd"],["G","gh"],["H","h"],["I","ee"],["J","jh"],["K","kh"],["L","l"],["M","(n)"],["N","(n)"],["O","au"],["P","f"],["Q","thh"],["R","r"],["S","sh"],["T","tt"],["U","oo"],["V","R"],["W","aa(n)"],["X","y"],["Y","ai"],["Z","g(h)"],["[","|"],["\\","n(j)"],["]","||"],["^","kh"],["_","_"],["`",""],["a","u"],["b","b"],["c","ch"],["d","dh"],["e","e"],["f","dd"],["g","g"],["h","h"],["i","i"],["j","j"],["k","k"],["l","l"],["m","m"],["n","n"],["o","o"],["p","p"],["q","t"],["r","r"],["s","s"],["t","tt"],["u","u"],["v","v"],["w","aa"],["x","nn"],["y","ay"],["z","z"],["{","{"],["|","n(g)"],["}","}"],["~","’, "],["¡","ikOankaar "],["¢","¢"],["£","£"],["¤",""],["¥","¥"],["§","hoo"],["¨","oo"],["ª",""],["®","r"],["°",""],["±","±"],["´","ye"],["µ","n"],["¶","¶"],["·","·"],["¿","x"],["Å","ik"],["Æ","Oankaar"],["Ç",""],["Í","vY"],["Î","y"],["Ï","y"],["Ò","||"],["Ó",""],["Ô",""],["Ø",""],["Ú",":"],["å","Oankaar"],["æ",""],["ç","ch"],["ü","u"],["Œ",""],["œ","t"],["ƒ","noo(n)"],["ˆ","(n)"],["˜","n"],["–","–"],["—","—"],["‘","'"],["’","'"],["‚",""],["“",'"'],["”",'"'],["†","T"],["•","•"],["…","…"],["‰",""]],o=[],i=[];r.forEach(function(e){o.push(e[0]),i.push(e[1])})," "!==t&&(o.indexOf(t)>-1?t=i[o.indexOf(t)]:Number.isNaN(t-parseFloat(t))&&(t="")),""===t||-1!=="aeou ooaiee".indexOf(t.toLowerCase())||!/^[a-zA-Z]+$/.test(t)||t===i[o.indexOf("N")]||t===i[o.indexOf("M")]||"hoo"===t||"ye"===t||"noo(n)"===t||t===i[o.indexOf("<")]||t===i[o.indexOf(">")]||"ay"===t||!a||""===a||-1!=="iaeouyw".indexOf(a.toLowerCase())||-1!=="@ HRªÅÆÇÍÏÒÓÔØÚåæçüŒœ:[]()".indexOf(a)||a.toLowerCase().indexOf("i")>-1&&n[e+2]&&" "===n[e+2]||(t+="a"),"e"===t&&(n[e-1]||" "===n[e-1]||"]"===n[e-1])&&"i".indexOf(a.toLowerCase())>-1&&(t="i"),n[e]=t}(i);n=n.join("");var u=/[^aeiouy]i(\s|$|\|)/gm;n=n.replace(u,function(e){return e.replace("i","")});var c=/((m:|mahalaa|mahalu|ghar|gharu)\s*([0-9]0?))/gm;n=n.replace(c,t);var f=/([aeiou]|oo|ai|ee)(ie)aaa/gm;n=n.replace(f,function(e){return e.replace("ie","i")});var s=/ih\s+|$/gm;n=n.replace(s,function(e){return e.replace("ih","eh")});var l=/aie\s+|$/gm;return n=n.replace(l,function(e){return e.replace("ie","ey")}),[["(N)","n"],["ah ","eh "],["eee","e'ee"],["uu","au"],["Aih","ahai"],["aaa","aa"],["ii","i"],["eay","ey"],["jIA","jee"],["a'eh","eh"],["u "," "],["Re'ee","Reeay"],["re'ee","reeay"]].forEach(function(e){n=n.replace(new RegExp(e[0],"g"),e[1])}),n}var r=n(5);e.exports=a},function(e,t,n){"use strict";(function(t){function n(e){if("string"==typeof e)return e;if(r(e))return j?j.call(e):"";var t=e+"";return"0"==t&&1/e==-c?"-0":t}function a(e){return!!e&&"object"==(void 0===e?"undefined":u(e))}function r(e){return"symbol"==(void 0===e?"undefined":u(e))||a(e)&&m.call(e)==f}function o(e){return null==e?"":n(e)}function i(e){return e=o(e),e&&l.test(e)?e.replace(s,v):e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=1/0,f="[object Symbol]",s=/&(?:amp|lt|gt|quot|#39|#96);/g,l=RegExp(s.source),p={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},d="object"==(void 0===t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,h=d||y||Function("return this")(),v=function(e){return function(t){return null==e?void 0:e[t]}}(p),b=Object.prototype,m=b.toString,g=h.Symbol,x=g?g.prototype:void 0,j=x?x.toString:void 0;e.exports=i}).call(t,n(6))},function(e,t,n){"use strict";var a,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=function(){return this}();try{a=a||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(a=window)}e.exports=a},function(e,t,n){"use strict";function a(e){if(!e)return"";for(var t="",n=e.replace(/>/gi,"").replace(/Ø/gi,"").split(""),a=0;a<n.length;a+=1){var o=n[a],i=n[a+1],u=n[a+2];if("i"===o)null!=i?("e"===i?t+="ਇ":"R"===u||"H"===u||"Í"===u||"ç"===u||"†"===u||"œ"===u||"~"===u||"®"===u?(t+=r[i],t+=r[u],t+="ਿ",a+=1):(t+=r[i],t+="ਿ"),a+=1):t+=r[o];else if("a"===o)switch(i){case"u":t+="ਉ",a+=1;break;case"U":t+="ਊ",a+=1;break;default:t+=r[o]}else if("A"===o)switch(i){case"w":t+="ਆ",a+=1;break;case"W":t+="ਆਂ",a+=1;break;case"Y":t+="ਐ",a+=1;break;case"O":t+="ਔ",a+=1;break;default:t+=r[o]}else if("e"===o)switch(i){case"I":t+="ਈ",a+=1;break;case"y":t+="ਏ",a+=1;break;default:t+=r[o]}else"u"===o&&"o"===i?(t+="ੋੁ",a+=1):"@"===o&&"Y"===i||"@"===o&&"y"===i||"@"===o&&"o"===i||"@"===o&&"O"===i?(t+=r[i],t+="੍",a+=1):"@"===o&&"w"===i?(t+="੍ਹ",t+=r[i],a+=1):"N"===o&&"I"===i||"M"===o&&("U"===i||"u"===i||"ü"===i)||"ˆ"===o&&"I"===i||"N"===o&&"y"===i?(t+=r[i],t+=r[o],a+=1):t+=r[o]}return t}var r={a:"ੳ",A:"ਅ",s:"ਸ",S:"ਸ਼",d:"ਦ",D:"ਧ",f:"ਡ",F:"ਢ",g:"ਗ",G:"ਘ",h:"ਹ",H:"੍ਹ",j:"ਜ",J:"ਝ",k:"ਕ",K:"ਖ",l:"ਲ",L:"ਲ਼",q:"ਤ",Q:"ਥ",w:"ਾ",W:"ਾਂ",e:"ੲ",E:"ਓ",r:"ਰ",R:"੍ਰ","®":"੍ਰ",t:"ਟ",T:"ਠ",y:"ੇ",Y:"ੈ",u:"ੁ","ü":"ੁ",U:"ੂ",i:"ਿ",I:"ੀ",o:"ੋ",O:"ੌ",p:"ਪ",P:"ਫ",z:"ਜ਼",Z:"ਗ਼",x:"ਣ",X:"ਯ",c:"ਚ",C:"ਛ",v:"ਵ",V:"ੜ",b:"ਬ",B:"ਭ",n:"ਨ","ƒ":"ਨੂੰ",N:"ਂ","ˆ":"ਂ",m:"ਮ",M:"ੰ","µ":"ੰ","`":"ੱ","~":"ੱ","Í":"੍ਵ","ç":"੍ਚ","†":"੍ਟ","œ":"੍ਤ","˜":"੍ਨ","´":"੍ਯ",1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬","^":"ਖ਼",7:"੭","&":"ਫ਼",8:"੮",9:"੯",0:"੦","\\":"ਞ","|":"ਙ","[":"।","]":"॥","<":"ੴ","Ú":"ਃ","@":"੍ਹ","‚":"❁"," ":" "};e.exports=a}])});