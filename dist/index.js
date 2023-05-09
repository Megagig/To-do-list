(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300;1,400&display=swap);"]),a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n  border: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  background: #fff;\r\n}\r\n\r\n.container {\r\n  width: 50%;\r\n  margin: 8rem auto 0;\r\n  padding: 2rem auto;\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0 0 0.5rem rgba(100, 100, 111, 0.2);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  color: #999;\r\n  font-size: 1rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\nhr {\r\n  border-bottom: 1px solid #ddd;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.5rem;\r\n  color: #999;\r\n  margin-bottom: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  margin: 20px;\r\n}\r\n\r\n.todo-input {\r\n  border: none;\r\n}\r\n\r\ninput[type='text'] {\r\n  flex: 1;\r\n  padding: 10px;\r\n  background: transparent;\r\n  margin-left: -1.3rem;\r\n}\r\n\r\n.todo-input::placeholder {\r\n  color: #999;\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nbutton[type='submit'] {\r\n  padding: 10px;\r\n  background-color: #4caf50;\r\n  border: none;\r\n  border-radius: 0 5px 5px 0;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  margin-right: 10px;\r\n}\r\n\r\ninput[type='checkbox']:checked + span {\r\n  text-decoration: line-through;\r\n}\r\n\r\nspan {\r\n  margin-left: 10px;\r\n}\r\n\r\np {\r\n  text-align: center;\r\n  margin: 2rem auto 0;\r\n  font-size: 1.3rem;\r\n  font-weight: 400;\r\n  color: #999;\r\n}\r\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=t.base?d[0]+t.base:d[0],p=i[s]||0,u="".concat(s," ").concat(p);i[s]=p+1;var l=r(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var d=t(n,o),s=0;s<i.length;s++){var p=r(i[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=d}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),d=r.n(c),s=r(216),p=r.n(s),u=r(589),l=r.n(u),f=r(426),m={};m.styleTagTransform=l(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=n=>{const e=document.createElement("li"),r=document.createElement("input");r.type="checkbox",r.checked=n.completed,r.addEventListener("change",(()=>{n.completed=r.checked}));const t=document.createElement("span");t.textContent=n.description,e.appendChild(r),e.appendChild(t);const o=document.createElement("hr");return e.appendChild(o),e},v=document.getElementById("todo-list"),g=document.getElementById("todo-Input"),y=document.querySelector("form"),x=[{description:"Morning Prayer",completed:!1,index:0},{description:"Morning Session meeting",completed:!0,index:1},{description:"Lunch Break",completed:!1,index:2},{description:"Finish the project for the day",completed:!1,index:3}];y.addEventListener("submit",(n=>{n.preventDefault();const e=g.value;""!==e.trim()&&(((n,e,r,t)=>{const o={description:n,completed:!1,index:e.length};e.push(o);const i=r(o);t.appendChild(i)})(e,x,h,v),g.value="")}));const b=()=>{v.innerHTML="",x.sort(((n,e)=>n.index-e.index)).forEach((n=>{const e=h(n);v.appendChild(e)}))};b(),window.addEventListener("load",b)})()})();