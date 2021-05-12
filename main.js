(()=>{"use strict";var r={28:(r,n,e)=>{e.d(n,{Z:()=>i});var o=e(645),t=e.n(o)()((function(r){return r[1]}));t.push([r.id,':root {\r\n  /* --main-bk-color: hsl(147, 31%, 43%); */\r\n  --blue: rgb(97, 175, 239);\r\n  --edit-icon-color: var(--main-text-color);\r\n  --edit-icon-color-eraser: rgb(200, 100, 100);\r\n  --green: rgb(152, 195, 121);\r\n  --main-bk-color: rgb(40, 44, 52);\r\n  --main-bk-color2: rgb(50, 54, 62);\r\n  --main-text-color: rgb(171, 178, 191);\r\n  --red: rgb(224, 108, 117);\r\n  --delete-icon-color: var(--main-text-color);\r\n  --delete-icon-color2: var(--main-bk-color);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  color: var(--main-text-color);\r\n  background-color: var(--main-bk-color);\r\n  /* font-family: \'Concert One\', cursive; */\r\n  /* font-family: \'Noto Sans TC\', sans-serif;  --400 and 700-- */\r\n  font-family: "Noto Sans TC", sans-serif;\r\n  position: relative;\r\n\r\n  min-width: 320px;\r\n}\r\n\r\nh1 {\r\n  /* margin: 0 30px; */\r\n  font-family: "Concert One", cursive;\r\n  display: flex;\r\n  align-self: center;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  background-color: var(--main-bk-color2);\r\n  color: var(--green);\r\n  box-shadow: 0 0px 2px rgb(10, 10, 10);\r\n  text-shadow: 0 0 3px black;\r\n\r\n  height: 46px;\r\n  position: relative;\r\n}\r\n\r\nhr {\r\n  border: 1px solid var(--main-text-color);\r\n}\r\n\r\nmain {\r\n  padding: 0 3px;\r\n}\r\n\r\nnav {\r\n  width: 180px;\r\n\r\n  padding: 3px;\r\n  /* padding-right: 1em; */\r\n  position: absolute;\r\n  top: 47px;\r\n\r\n  background-color: var(--main-text-color);\r\n  color: var(--main-bk-color);\r\n\r\n  transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\r\n}\r\n\r\nnav > div,\r\nnav > div > div {\r\n  /* padding-left: 0.5em; */\r\n  border-radius: 5px;\r\n}\r\n\r\nnav hr {\r\n  border: 1px solid var(--main-bk-color2);\r\n}\r\n\r\n#hamburger {\r\n  position: relative;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 0 10px;\r\n\r\n  cursor: pointer;\r\n}\r\n\r\n#icon {\r\n  justify-content: center;\r\n  align-self: center;\r\n  font-family: "Concert One", cursive;\r\n  font-size: x-large;\r\n  background-color: var(--main-text-color);\r\n  color: var(--green);\r\n  /* text-shadow: -5px -5px 8px black, -5px 5px 8px black, 5px -5px 8px black,\r\n  5px 5px 6px black; */\r\n  text-shadow: 0 0 5px black, 0 0 5px black;\r\n  /* padding: 0 50px; */\r\n  width: 30px;\r\n  display: flex;\r\n  border-radius: 50%;\r\n  margin-left: 10px;\r\n  margin-right: 20px;\r\n  height: 1.2em;\r\n\r\n  /* This turns off the icon -- Not sure if I want in on mobile layout - it takes up too much room */\r\n  display: none;\r\n}\r\n\r\n#main-header-container {\r\n  display: flex;\r\n}\r\n\r\n#projects {\r\n  font-weight: bold;\r\n  padding-left: 3px;\r\n}\r\n\r\n#projects div {\r\n  font-weight: normal;\r\n}\r\n\r\n#add-project,\r\n.task-set {\r\n  /* color: red; */\r\n  /* padding: 0 1em; */\r\n  cursor: pointer;\r\n}\r\n\r\n#add-project:hover,\r\n.task-set:hover {\r\n  color: var(--green);\r\n  background-color: var(--main-bk-color2);\r\n}\r\n.nav-item-padding {\r\n  padding: 2px 10px;\r\n}\r\n.add-task {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: stretch;\r\n  align-items: center;\r\n\r\n  /* This margin is meant for the header - might need to separate the two later */\r\n  padding: 0 10px;\r\n\r\n  cursor: pointer;\r\n  text-shadow: 0 0 3px black;\r\n  color: var(--blue);\r\n}\r\n\r\n.add-task-icon {\r\n  margin-right: 10px;\r\n  font-size: xx-large;\r\n}\r\n\r\nform {\r\n  /* box-shadow: 0 0 10px var(--green); */\r\n  box-shadow: 0 0 10px black;\r\n  padding: 5px;\r\n  /* color: var(--blue); */\r\n  color: var(--main-text-color);\r\n  /* color: black; */\r\n  background-color: var(--main-bk-color2);\r\n\r\n  position: absolute;\r\n\r\n  /* transition: all 1.5s cubic-bezier(0.77, 0.2, 0.05, 1); */\r\n  /* transition: all 0.5s ease-in-out; */\r\n  /* transform: translate(0, 0); */\r\n  /* transform: none; */\r\n  /* backface-visibility: hidden; */\r\n  top: 4em;\r\n  left: 0;\r\n  width: 300px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  right: 0;\r\n}\r\nmain {\r\n  position: relative;\r\n}\r\n\r\nform input {\r\n  background-color: var(--main-bk-color);\r\n  /* color: var(--main-text-color); */\r\n  color: var(--blue);\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 1px solid var(--main-text-color);\r\n  border-radius: 5px;\r\n  padding: 3px 5px;\r\n}\r\n\r\nform label {\r\n  padding-left: 3px;\r\n}\r\n\r\n.form-row {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-row h2 {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: var(--green);\r\n}\r\n\r\n#form-row-urgent,\r\n#form-row-important {\r\n  /* make sure this appears below .form-row in css */\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n#form-row-urgent input,\r\n#form-row-important input {\r\n  position: relative;\r\n  top: 1px;\r\n}\r\n\r\n#form-row-urgent input {\r\n  margin-left: 35px;\r\n}\r\n#form-row-important input {\r\n  margin-left: 10px;\r\n}\r\n\r\nform input {\r\n  font-family: "Noto Sans TC", sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\nform input[type="submit"] {\r\n  /* color: var(--main-bk-color); */\r\n  color: black;\r\n\r\n  background-color: var(--green);\r\n  /* background: linear-gradient(0deg, var(--green), var(--blue), var(--green)); */\r\n  width: 60px;\r\n  border: none;\r\n  box-shadow: 0 0 8px black;\r\n}\r\n\r\nform input[type="submit"]:active {\r\n  box-shadow: none;\r\n}\r\n\r\n#form-row-submit {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  padding: 3px 8px;\r\n  margin: 15px 0 10px 0;\r\n}\r\n\r\n.delete-icon {\r\n  display: flex;\r\n  padding: 5px 2px 5px 3px;\r\n  position: relative;\r\n  /* background-color: blue; */\r\n}\r\n\r\n.delete1 {\r\n  /*   left: 30px; */\r\n  width: 18px;\r\n  height: 2px;\r\n  background-color: var(--delete-icon-color);\r\n  display: inline-block;\r\n  position: relative;\r\n  top: -2px;\r\n  /* left: -5px; */\r\n\r\n  /*   transform: rotate(-60deg); */\r\n}\r\n\r\n.delete1::before {\r\n  content: "";\r\n  display: block;\r\n  background-color: var(--delete-icon-color);\r\n  position: relative;\r\n  top: -3px;\r\n  left: 7px;\r\n\r\n  width: 4px;\r\n  height: 2px;\r\n\r\n  /*   this makes a triangle */\r\n  /*   border-top: 3px solid transparent; */\r\n  /*   border-bottom: 3px solid transparent;  */\r\n  /*   border-right: 4px solid var(--edit-icon-color);  */\r\n}\r\n\r\n.delete1::after {\r\n  content: "";\r\n  display: block;\r\n  position: relative;\r\n  left: 1px;\r\n  top: 1px;\r\n\r\n  width: 16px;\r\n  height: 14px;\r\n  background-color: var(--delete-icon-color);\r\n\r\n  border-bottom-left-radius: 2px;\r\n  border-bottom-right-radius: 2px;\r\n}\r\n\r\n.delete2 {\r\n  /*   left: 30px; */\r\n  width: 1px;\r\n  height: 10px;\r\n  background-color: var(--delete-icon-color2);\r\n  /*   background-color: red; */\r\n  display: inline-block;\r\n  position: relative;\r\n\r\n  left: -9px;\r\n  top: 3px;\r\n}\r\n\r\n.delete2::before {\r\n  content: "";\r\n  display: block;\r\n  background-color: var(--delete-icon-color2);\r\n  position: relative;\r\n  top: 0px;\r\n  left: -4px;\r\n\r\n  width: 1px;\r\n  height: 10px;\r\n}\r\n\r\n.delete2::after {\r\n  content: "";\r\n  display: block;\r\n  position: relative;\r\n  left: 4px;\r\n  top: -100%;\r\n\r\n  width: 1px;\r\n  height: 10px;\r\n  background-color: var(--delete-icon-color2);\r\n}\r\n\r\n.edit-icon {\r\n  display: flex;\r\n  padding: 6px 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-inner {\r\n  top: 1px;\r\n  width: 8px;\r\n  height: 6px;\r\n  background-color: var(--edit-icon-color);\r\n  display: inline-block;\r\n  position: relative;\r\n\r\n  transform: rotate(-60deg);\r\n}\r\n\r\n.edit-inner::before {\r\n  content: "";\r\n  display: block;\r\n  position: relative;\r\n  left: -5px;\r\n\r\n  width: 0;\r\n  height: 0;\r\n\r\n  /*   this makes a triangle */\r\n  border-top: 3px solid transparent;\r\n  border-bottom: 3px solid transparent;\r\n  border-right: 4px solid var(--edit-icon-color);\r\n}\r\n\r\n.edit-inner::after {\r\n  content: "";\r\n  display: block;\r\n  position: relative;\r\n  left: 9px;\r\n  top: -100%;\r\n\r\n  width: 4px;\r\n  height: 6px;\r\n  background-color: var(--edit-icon-color-eraser);\r\n}\r\n\r\n.hamburger-line {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 4px;\r\n  background-color: var(--main-text-color);\r\n  margin: 2px 0;\r\n}\r\n\r\n.nav-is-left {\r\n  transform: translate(-100%, 0);\r\n}\r\n.form-is-hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-first-section,\r\n.task-last-section {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.task-first-section > *,\r\n.task-last-section > * {\r\n  margin: 3px;\r\n}\r\n\r\n@media only screen and (min-width: 320px) {\r\n  /* for desktop layout changes */\r\n  body {\r\n    /* color: blue; */\r\n  }\r\n}\r\n@media only screen and (min-width: 520px) {\r\n  form {\r\n    width: 500px;\r\n  }\r\n}\r\n',""]);const i=t},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,o){"string"==typeof r&&(r=[[null,r,""]]);var t={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(t[a]=!0)}for(var l=0;l<r.length;l++){var c=[].concat(r[l]);o&&t[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},379:(r,n,e)=>{var o,t=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function a(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function l(r,n){for(var e={},o=[],t=0;t<r.length;t++){var l=r[t],c=n.base?l[0]+n.base:l[0],d=e[c]||0,s="".concat(c," ").concat(d);e[c]=d+1;var p=a(s),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:s,updater:m(f,n),references:1}),o.push(s)}return o}function c(r){var n=document.createElement("style"),o=r.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(r){n.setAttribute(r,o[r])})),"function"==typeof r.insert)r.insert(n);else{var a=t(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,s=(d=[],function(r,n){return d[r]=n,d.filter(Boolean).join("\n")});function p(r,n,e,o){var t=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(r.styleSheet)r.styleSheet.cssText=s(n,t);else{var i=document.createTextNode(t),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function f(r,n,e){var o=e.css,t=e.media,i=e.sourceMap;if(t?r.setAttribute("media",t):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=o;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(o))}}var u=null,x=0;function m(r,n){var e,o,t;if(n.singleton){var i=x++;e=u||(u=c(n)),o=p.bind(null,e,i,!1),t=p.bind(null,e,i,!0)}else e=c(n),o=f.bind(null,e,n),t=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return o(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;o(r=n)}else t()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=l(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var o=0;o<e.length;o++){var t=a(e[o]);i[t].references--}for(var c=l(r,n),d=0;d<e.length;d++){var s=a(e[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}e=c}}}}},n={};function e(o){var t=n[o];if(void 0!==t)return t.exports;var i=n[o]={id:o,exports:{}};return r[o](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var o in n)e.o(n,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:n[o]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r=e(379),n=e.n(r),o=e(28);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,document.getElementById("hamburger").addEventListener("click",(function(){console.log("toggling nav"),t.classList.contains("nav-is-left")?t.classList.remove("nav-is-left"):t.classList.add("nav-is-left")}));const t=document.getElementById("navigation");document.querySelectorAll(".add-task").forEach((r=>{r.addEventListener("click",a)}));const i=document.querySelector("form");function a(){console.log("add task btn clicked"),i.classList.remove("form-is-hidden"),document.getElementById("first-form-row").focus()}i.addEventListener("submit",(function(){i.classList.add("form-is-hidden")}))})()})();