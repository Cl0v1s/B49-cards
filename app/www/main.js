!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:v(f,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,t){var n,r,i;if(t.singleton){var o=m++;n=h||(h=l(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=l(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,".card{position:relative;height:100vh;width:calc(100vh * .7);color:white;font-family:Arial, sans-serif}.card::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:url(./res/background.png);background-size:cover}.card .picture{position:absolute;top:40%;left:50%;transform:translate(-50%, -50%);height:50%;width:auto;-webkit-mask-image:linear-gradient(to bottom, black 95%, transparent)}.card h4.name{position:absolute;top:72%;left:0;width:100%;text-align:center;font-size:7vh}.card h4.name small{position:absolute;font-size:2.5vh;right:10%;transform:translateY(-50%);top:50%;text-align:right;width:20%}.card .description{position:absolute;bottom:10px;left:0;width:100%;text-align:center;z-index:1;font-size:5vh}html,body{margin:0;padding:0}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var r=class{constructor(){this.devices=[]}async start(){await this.scan()}async scan(){console.log("starting scan"),null!=window.ble?(await new Promise((e,t)=>{ble.startScan([],this.handleDevice.bind(this),t),setTimeout(e,5e3)}),ble.stopScan()):this.devices=[{id:"5D-B4-EA-74-0D-5D"},{id:"57:B0:EC:CF:67:2F"}],console.log("scan done")}handleDevice(e){console.log("device with id "+e.id+" discovered."),this.devices.push(e)}};class i{constructor(){this.index=i.INDEX,this.description=null,this.picture=null,this.name=null,this.surname=null,this.color=null,i.INDEX++}setDescription(e){this.description=e}setPicture(e){this.picture=e}setName(e){this.name=e}setSurname(e){this.surname=e}setColor(e){this.color=e}render(){const e=document.createElement("div");return e.classList.add("card"),e.classList.add(`card-${this.index}`),document.head.appendChild(document.createElement("style")).innerHTML=`.card-${this.index}::before { filter: ${this.color};  }`,e.innerHTML=`\n            <img class='picture' src=${this.picture} />\n            <h4 class='name'>\n                ${this.name}\n                <small>\n                    ${this.surname}\n                </small>\n            </h4>\n            <div class='description'>\n                ${this.description}\n            </div>\n        `,e}}i.INDEX=0;var o=i;class a{static setSite(e){a.SITE=e}static async ping(e){return await fetch(`${a.SITE}/${e}/content.json`)}static async buildCardFromId(e){const t=e.replace(/:/g,"-");let n=await a.ping(t);if(0==n.ok)return null;n=await n.json();const r=new o;return r.setPicture(`${a.SITE}/${t}/picture.png`),r.setName(n.name),r.setSurname(n.surname),r.setColor(n.color),r.setDescription(n.description),r}}a.SITE=null;var s=a;!async function(){s.setSite("https://clovis-portron.github.io/B49-cards/site");const e=new r;await e.start();const t=e.devices.map(e=>s.buildCardFromId(e.id));(await Promise.all(t)).filter(e=>null!=e).forEach(e=>{document.body.appendChild(e.render())})}()}]);
//# sourceMappingURL=main.js.map