(function(e){function t(t){for(var s,a,u=t[0],i=t[1],l=t[2],c=0,d=[];c<u.length;c++)a=u[c],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,a=1;a<r.length;a++){var u=r[a];0!==n[u]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={1:0},n={1:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{2:"87d084ee",3:"72db8e87",4:"4607c702",5:"08539ec1",6:"e2ffdc69"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={2:1,3:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var s="css/"+({}[e]||e)+"."+{2:"8fed03b0",3:"6c51d349",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0"}[e]+".css",n=i.p+s,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===s||c===n))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],c=l.getAttribute("data-href");if(c===s||c===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,r){s=n[e]=[t,r]}));t.push(s[2]=o);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=n[e];if(0!==r){if(r){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,r[1](d)}n[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;o.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);r("5319"),r("7d6e"),r("e54f"),r("985d"),r("31cd");var s=r("2b0e"),a=r("1f91"),n=r("42d2"),o=r("b05d");s["a"].use(o["a"],{config:{},lang:a["a"],iconSet:n["a"]});var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},i=[],l=r("ded3"),c=r.n(l),d=r("2f62"),f={methods:c()({},Object(d["b"])("store",["handleAuthStateChanged"])),mounted(){this.handleAuthStateChanged()}},h=f,p=r("2877"),m=Object(p["a"])(h,u,i,!1,null,null,null),g=m.exports,b=r("260b"),v=(r("000b"),r("ea7b"),r("66ce"),{apiKey:"AIzaSyCoQ3MO3HvU-AbZ8WZG5MB9BCTdNU2TvVQ",authDomain:"smackchat-bdc4b.firebaseapp.com",projectId:"smackchat-bdc4b",storageBucket:"smackchat-bdc4b.appspot.com",messagingSenderId:"874944335844",appId:"1:874944335844:web:ec71a7454507ce0b97c1f1"});let y,w=b["a"].initializeApp(v),U=w.auth(),I=w.database();const P={userDetails:{},users:{},messages:{}},D={users:e=>{let t={};return Object.keys(e.users).forEach((r=>{r!==e.userDetails.userId&&(t[r]=e.users[r])})),t}},O={registeUser({},e){U.createUserWithEmailAndPassword(e.email,e.password).then((t=>{let r=U.currentUser.uid;I.ref("users/"+r).set({name:e.name,email:e.email,online:!0})})).catch((e=>{console.log(e.message)}))},loginUser({},e){U.signInWithEmailAndPassword(e.email,e.password).then((e=>{console.log(e)})).catch((e=>{console.log(e.message)}))},logoutUser({},e){U.signOut()},handleAuthStateChanged({commit:e,dispatch:t,state:r}){U.onAuthStateChanged((s=>{if(s){let r=U.currentUser.uid;I.ref("users/"+r).once("value",(t=>{let s=t.val();e("setUserDetails",{name:s.name,email:s.email,userId:r})})),t("firebaseUpdateUser",{userId:r,updates:{online:!0}}),"/"!==this.$router.history.current.path&&this.$router.push("/"),t("firebaseGetUsers")}else t("firebaseUpdateUser",{userId:r.userDetails.userId,updates:{online:!1}}),e("setUserDetails",{}),"/auth"!==this.$router.history.current.path&&this.$router.replace("/auth")}))},firebaseUpdateUser({},e){e.userId&&I.ref("users/"+e.userId).update(e.updates)},firebaseGetUsers({commit:e}){I.ref("users").on("child_added",(t=>{let r=t.val(),s=t.key;e("addUser",{userId:s,userDetails:r})})),I.ref("users").on("child_changed",(t=>{let r=t.val(),s=t.key;e("updateUser",{userId:s,userDetails:r})}))},firebaseGetMessages({commit:e,state:t},r){let s=t.userDetails.userId;y=I.ref("chats/"+s+"/"+r),y.on("child_added",(t=>{let r=t.val(),s=t.key;e("addMessage",{messageId:s,messageDetails:r})}))},firebaseStopGettingMessages({commit:e}){y&&(y.off("child_added"),e("clearMessages"))},firebaseSendMessage({state:e},t){I.ref("chats/"+e.userDetails.userId+"/"+t.otherUserId).push(t.message),t.message.from="them",I.ref("chats/"+t.otherUserId+"/"+e.userDetails.userId).push(t.message)}},S={setUserDetails(e,t){e.userDetails=t},addUser(e,t){s["a"].set(e.users,t.userId,t.userDetails)},updateUser(e,t){Object.assign(e.users[t.userId],t.userDetails)},addMessage(e,t){s["a"].set(e.messages,t.messageId,t.messageDetails)},clearMessages(e,t){e.messages={}}};var j={namespaced:!0,state:P,getters:D,actions:O,mutations:S};s["a"].use(d["a"]);var k=function(){const e=new d["a"].Store({modules:{store:j},strict:!1});return e},A=r("8c4f");r("ddb0");const _=[{path:"/",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"5e94"))},{path:"/auth",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"f724"))},{path:"/chat/:otherUserId",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"5b17"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"e51e"))}];var C=_;s["a"].use(A["a"]);var E=function(){const e=new A["a"]({scrollBehavior:()=>({x:0,y:0}),routes:C,mode:"hash",base:""});return e},M=async function(){const e="function"===typeof k?await k({Vue:s["a"]}):k,t="function"===typeof E?await E({Vue:s["a"],store:e}):E;e.$router=t;const r={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:r,store:e,router:t}};const x="";async function T(){const{app:e,store:t,router:r}=await M();let a=!1;const n=e=>{a=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),u=[void 0];for(let l=0;!1===a&&l<u.length;l++)if("function"===typeof u[l])try{await u[l]({app:e,router:r,store:t,Vue:s["a"],ssrContext:null,redirect:n,urlPath:o,publicPath:x})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==a&&new s["a"](e)}T()},"31cd":function(e,t,r){}});