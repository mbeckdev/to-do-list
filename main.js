(()=>{"use strict";var n={28:(n,r,e)=>{e.d(r,{Z:()=>a});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,':root {\r\n  /* --main-bk-color: hsl(147, 31%, 43%); */\r\n  --main-bk-color: rgb(40, 44, 52);\r\n  --main-bk-color2: rgb(50, 54, 62);\r\n  --main-text-color: rgb(171, 178, 191);\r\n  --green: rgb(152, 195, 121);\r\n  --red: rgb(224, 108, 117);\r\n  --blue: rgb(97, 175, 239);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  color: var(--main-text-color);\r\n  background-color: var(--main-bk-color);\r\n  /* font-family: \'Concert One\', cursive; */\r\n  /* font-family: \'Noto Sans TC\', sans-serif;  --400 and 700-- */\r\n  font-family: "Noto Sans TC", sans-serif;\r\n  position: relative;\r\n\r\n  min-width: 320px;\r\n}\r\n\r\nh1 {\r\n  /* margin: 0 30px; */\r\n  font-family: "Concert One", cursive;\r\n  display: flex;\r\n  align-self: center;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  background-color: var(--main-bk-color2);\r\n  color: var(--green);\r\n  box-shadow: 0 0px 2px rgb(10, 10, 10);\r\n  text-shadow: 0 0 3px black;\r\n\r\n  height: 46px;\r\n  position: relative;\r\n}\r\n\r\nhr {\r\n  border: 1px solid var(--main-text-color);\r\n}\r\n\r\nmain {\r\n  padding: 0 3px;\r\n}\r\n\r\nnav {\r\n  width: 180px;\r\n\r\n  padding: 3px;\r\n  /* padding-right: 1em; */\r\n  position: absolute;\r\n  top: 47px;\r\n\r\n  background-color: var(--main-text-color);\r\n  color: var(--main-bk-color);\r\n\r\n  transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\r\n}\r\n\r\nnav > div,\r\nnav > div > div {\r\n  /* padding-left: 0.5em; */\r\n  border-radius: 5px;\r\n}\r\n\r\nnav hr {\r\n  border: 1px solid var(--main-bk-color2);\r\n}\r\n\r\n#hamburger {\r\n  position: relative;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 0 10px;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n#icon {\r\n  justify-content: center;\r\n  align-self: center;\r\n  font-family: "Concert One", cursive;\r\n  font-size: x-large;\r\n  background-color: var(--main-text-color);\r\n  color: var(--green);\r\n  /* text-shadow: -5px -5px 8px black, -5px 5px 8px black, 5px -5px 8px black,\r\n  5px 5px 6px black; */\r\n  text-shadow: 0 0 5px black, 0 0 5px black;\r\n  /* padding: 0 50px; */\r\n  width: 30px;\r\n  display: flex;\r\n  border-radius: 50%;\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n  height: 1.2em;\r\n\r\n  /* This turns off the icon -- Not sure if I want in on mobile layout - it takes up too much room */\r\n  display: none;\r\n}\r\n\r\n#main-header-container {\r\n  display: flex;\r\n}\r\n\r\n#projects {\r\n  font-weight: bold;\r\n  padding-left: 3px;\r\n}\r\n\r\n#projects div {\r\n  font-weight: normal;\r\n}\r\n\r\n#add-project,\r\n.task-set {\r\n  /* color: red; */\r\n  /* padding: 0 1em; */\r\n  cursor: pointer;\r\n}\r\n\r\n#add-project:hover,\r\n.task-set:hover {\r\n  color: var(--green);\r\n  background-color: var(--main-bk-color2);\r\n}\r\n.nav-item-padding {\r\n  padding: 2px 10px;\r\n}\r\n.add-task {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: stretch;\r\n  align-items: center;\r\n\r\n  /* This margin is meant for the header - might need to separate the two later */\r\n  padding: 0 10px;\r\n\r\n  cursor: pointer;\r\n  text-shadow: 0 0 3px black;\r\n}\r\n\r\n.add-task-icon {\r\n  margin-right: 10px;\r\n  font-size: xx-large;\r\n}\r\n\r\n.hamburger-line {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 4px;\r\n  background-color: var(--main-text-color);\r\n  margin: 2px 0;\r\n}\r\n\r\n.nav-is-left {\r\n  /* position: relative; */\r\n  transform: translate(-100%, 0);\r\n  /* background-color: var(--main-bk-color); */\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n/* .task > * { */\r\n/* margin: 3px; */\r\n/* } */\r\n\r\n.task-first-section,\r\n.task-last-section {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task-first-section > *,\r\n.task-last-section > * {\r\n  margin: 3px;\r\n}\r\n\r\n/* .task input { */\r\n/* display: flex; */\r\n/* } */\r\n\r\n@media only screen and (min-width: 320px) {\r\n  body {\r\n    /* color: blue; */\r\n  }\r\n}\r\n',""]);const a=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function i(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],o=0;o<n.length;o++){var s=n[o],c=r.base?s[0]+r.base:s[0],l=e[c]||0,d="".concat(c," ").concat(l);e[c]=l+1;var p=i(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:d,updater:v(f,r),references:1}),t.push(d)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=e.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var l,d=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function p(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function f(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var u=null,m=0;function v(n,r){var e,t,o;if(r.singleton){var a=m++;e=u||(u=c(r)),t=p.bind(null,e,a,!1),o=p.bind(null,e,a,!0)}else e=c(r),t=f.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=i(e[t]);a[o].references--}for(var c=s(n,r),l=0;l<e.length;l++){var d=i(e[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}e=c}}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=e(379),r=e.n(n),t=e(28);r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,document.getElementById("hamburger").addEventListener("click",(function(){console.log("toggling nav"),o.classList.contains("nav-is-left")?o.classList.remove("nav-is-left"):o.classList.add("nav-is-left")}));const o=document.getElementById("navigation")})()})();