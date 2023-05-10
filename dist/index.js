(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300;1,400&display=swap);"]),a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  outline: 0;\r\n  border: 0;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  background: #fff;\r\n}\r\n\r\n.container {\r\n  width: 50%;\r\n  margin: 8rem auto 0;\r\n  padding: 2rem;\r\n  border-radius: 0.5rem;\r\n  box-shadow: 0 0 0.5rem rgba(100, 100, 111, 0.2);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  color: #999;\r\n  font-size: 1rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\nhr {\r\n  border-bottom: 1px solid #ddd;\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 1.5rem;\r\n  color: #999;\r\n  margin-bottom: 1rem;\r\n  font-weight: 400;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  margin: 20px;\r\n}\r\n\r\n.todo-input {\r\n  border: none;\r\n}\r\n\r\n#todo-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  color: #999;\r\n  font-size: 1.1rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\ni.uil-ellipsis-v {\r\n  margin-left: auto;\r\n}\r\n\r\ninput[type='text'] {\r\n  flex: 1;\r\n  padding: 10px;\r\n  background: transparent;\r\n  margin-left: -1.3rem;\r\n  color: #999;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n}\r\n\r\n.todo-input::placeholder {\r\n  color: #999;\r\n  font-style: italic;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.delete-button {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #c0392b;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  margin-left: 0.5rem;\r\n  padding: 0;\r\n}\r\n\r\nli:hover .delete-button {\r\n  display: block;\r\n}\r\n\r\ni {\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title i {\r\n  color: #999;\r\n}\r\n\r\nbutton[type='submit'] {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-radius: 0 5px 5px 0;\r\n  color: white;\r\n  cursor: pointer;\r\n  outline: none;\r\n  margin-left: 0.5rem;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  margin-right: 10px;\r\n}\r\n\r\nspan {\r\n  margin-left: 10px;\r\n}\r\n\r\ninput[type='checkbox']:checked + span {\r\n  text-decoration: line-through;\r\n}\r\n\r\np {\r\n  text-align: center;\r\n  margin: 2rem auto 0;\r\n  font-size: 1.3rem;\r\n  font-weight: 400;\r\n  color: #999;\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=t(n,o),l=0;l<i.length;l++){var d=r(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),s=r(565),c=r.n(s),l=r(216),d=r.n(l),p=r(589),u=r.n(p),f=r(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const y=document.getElementById("todo-list"),h=document.getElementById("todo-Input"),g=document.querySelector("form");let v,b,x=JSON.parse(localStorage.getItem("tasks"))||[];const E=()=>{localStorage.setItem("tasks",JSON.stringify(x))},k=n=>{const e=document.createElement("button"),r=document.createElement("li"),t=document.createElement("i"),o=document.createElement("span"),i=document.createElement("input");return i.type="checkbox",i.checked=n.completed,i.addEventListener("change",(()=>{n.completed=i.checked,E(),i.checked?(e.style.display="block",t.style.display="none",r.style.display="flex",r.style.justifyContent="flex-start",e.style.marginLeft="auto"):(e.style.display="none",t.style.display="block",o.style.color="#999")})),o.textContent=n.description,o.addEventListener("click",(()=>{v(n)})),r.appendChild(i),r.appendChild(o),t.classList.add("uil","uil-ellipsis-v"),t.addEventListener("click",(()=>{v(n)})),r.appendChild(t),e.innerHTML='<i class="uil uil-trash"></i>',e.classList.add("delete-button"),e.style.display="none",e.addEventListener("click",(()=>{b(n.index)})),r.appendChild(e),r},w=()=>{y.innerHTML="",x.sort(((n,e)=>n.index-e.index)).forEach((n=>{const e=k(n);y.appendChild(e)}))};b=n=>{x=x.filter((e=>e.index!==n)),x.forEach(((n,e)=>{n.index=e})),E(),w()},v=n=>{const e=document.createElement("input");e.type="text",e.value=n.description,e.classList.add("edit-input"),e.addEventListener("keydown",(r=>{"Enter"===r.key?(n.description=e.value.trim(),E(),w()):"Escape"===r.key&&w()}));const r=y.children[n.index];r.replaceChild(e,r.children[1]),e.select()},g.addEventListener("submit",(n=>{n.preventDefault();const e=h.value;""!==e.trim()&&(function(n){const e={description:n,completed:!1,index:x.length};x.push(e),E();const r=k(e);y.appendChild(r)}(e),h.value="")})),w(),window.addEventListener("load",w)})()})();