import{i as S}from"../chunks/isInt.dabd68aa.js";import{s as F,a as G,o as H,t as J,b as I}from"../chunks/scheduler.8f0c50f0.js";import{S as K,i as M,s as Q,e as u,c as X,a as $,t as m,b as E,d as p,f as d,g as Y,h as Z,j as x,k as y,l as R,m as ee,n as te,o as ne,p as v,q as w,r as g,u as P,v as b,w as k}from"../chunks/index.618bd48e.js";const ie="modulepreload",se=function(f,e){return new URL(f,e).href},T={},L=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=se(l,r),l in T)return;T[l]=!0;const t=l.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const h=s[c];if(h.href===l&&(!t||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${o}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":ie,t||(a.as="script",a.crossOrigin=""),a.href=l,document.head.appendChild(a),t)return new Promise((c,h)=>{a.addEventListener("load",c),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e()).catch(l=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=l,window.dispatchEvent(t),!t.defaultPrevented)throw l})},re=f=>S(f),oe=f=>!S(f.split("/").at(-1)),$e={int:re,notint:oe};function fe(f){let e,n,r;var s=f[1][0];function l(t,o){return{props:{data:t[3],form:t[2]}}}return s&&(e=w(s,l(f)),f[18](e)),{c(){e&&g(e.$$.fragment),n=u()},l(t){e&&P(e.$$.fragment,t),n=u()},m(t,o){e&&b(e,t,o),$(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][0])){if(e){v();const i=e;m(i.$$.fragment,1,0,()=>{k(i,1)}),E()}s?(e=w(s,l(t)),t[18](e),g(e.$$.fragment),p(e.$$.fragment,1),b(e,n.parentNode,n)):e=null}else if(s){const i={};o&8&&(i.data=t[3]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){r||(e&&p(e.$$.fragment,t),r=!0)},o(t){e&&m(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[18](null),e&&k(e,t)}}}function le(f){let e,n,r;var s=f[1][0];function l(t,o){return{props:{data:t[3],$$slots:{default:[he]},$$scope:{ctx:t}}}}return s&&(e=w(s,l(f)),f[17](e)),{c(){e&&g(e.$$.fragment),n=u()},l(t){e&&P(e.$$.fragment,t),n=u()},m(t,o){e&&b(e,t,o),$(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][0])){if(e){v();const i=e;m(i.$$.fragment,1,0,()=>{k(i,1)}),E()}s?(e=w(s,l(t)),t[17](e),g(e.$$.fragment),p(e.$$.fragment,1),b(e,n.parentNode,n)):e=null}else if(s){const i={};o&8&&(i.data=t[3]),o&524407&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)}},i(t){r||(e&&p(e.$$.fragment,t),r=!0)},o(t){e&&m(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[17](null),e&&k(e,t)}}}function ae(f){let e,n,r;var s=f[1][1];function l(t,o){return{props:{data:t[4],form:t[2]}}}return s&&(e=w(s,l(f)),f[16](e)),{c(){e&&g(e.$$.fragment),n=u()},l(t){e&&P(e.$$.fragment,t),n=u()},m(t,o){e&&b(e,t,o),$(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][1])){if(e){v();const i=e;m(i.$$.fragment,1,0,()=>{k(i,1)}),E()}s?(e=w(s,l(t)),t[16](e),g(e.$$.fragment),p(e.$$.fragment,1),b(e,n.parentNode,n)):e=null}else if(s){const i={};o&16&&(i.data=t[4]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){r||(e&&p(e.$$.fragment,t),r=!0)},o(t){e&&m(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[16](null),e&&k(e,t)}}}function ce(f){let e,n,r;var s=f[1][1];function l(t,o){return{props:{data:t[4],$$slots:{default:[pe]},$$scope:{ctx:t}}}}return s&&(e=w(s,l(f)),f[15](e)),{c(){e&&g(e.$$.fragment),n=u()},l(t){e&&P(e.$$.fragment,t),n=u()},m(t,o){e&&b(e,t,o),$(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][1])){if(e){v();const i=e;m(i.$$.fragment,1,0,()=>{k(i,1)}),E()}s?(e=w(s,l(t)),t[15](e),g(e.$$.fragment),p(e.$$.fragment,1),b(e,n.parentNode,n)):e=null}else if(s){const i={};o&16&&(i.data=t[4]),o&524391&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)}},i(t){r||(e&&p(e.$$.fragment,t),r=!0)},o(t){e&&m(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[15](null),e&&k(e,t)}}}function _e(f){let e,n,r;var s=f[1][2];function l(t,o){return{props:{data:t[5],form:t[2]}}}return s&&(e=w(s,l(f)),f[14](e)),{c(){e&&g(e.$$.fragment),n=u()},l(t){e&&P(e.$$.fragment,t),n=u()},m(t,o){e&&b(e,t,o),$(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][2])){if(e){v();const i=e;m(i.$$.fragment,1,0,()=>{k(i,1)}),E()}s?(e=w(s,l(t)),t[14](e),g(e.$$.fragment),p(e.$$.fragment,1),b(e,n.parentNode,n)):e=null}else if(s){const i={};o&32&&(i.data=t[5]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){r||(e&&p(e.$$.fragment,t),r=!0)},o(t){e&&m(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[14](null),e&&k(e,t)}}}function ue(f){let e,n,r;var s=f[1][2];function l(t,o){return{props:{data:t[5],$$slots:{default:[me]},$$scope:{ctx:t}}}}return s&&(e=w(s,l(f)),f[13](e)),{c(){e&&g(e.$$.fragment),n=u()},l(t){e&&P(e.$$.fragment,t),n=u()},m(t,o){e&&b(e,t,o),$(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][2])){if(e){v();const i=e;m(i.$$.fragment,1,0,()=>{k(i,1)}),E()}s?(e=w(s,l(t)),t[13](e),g(e.$$.fragment),p(e.$$.fragment,1),b(e,n.parentNode,n)):e=null}else if(s){const i={};o&32&&(i.data=t[5]),o&524359&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)}},i(t){r||(e&&p(e.$$.fragment,t),r=!0)},o(t){e&&m(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[13](null),e&&k(e,t)}}}function me(f){let e,n,r;var s=f[1][3];function l(t,o){return{props:{data:t[6],form:t[2]}}}return s&&(e=w(s,l(f)),f[12](e)),{c(){e&&g(e.$$.fragment),n=u()},l(t){e&&P(e.$$.fragment,t),n=u()},m(t,o){e&&b(e,t,o),$(t,n,o),r=!0},p(t,o){if(o&2&&s!==(s=t[1][3])){if(e){v();const i=e;m(i.$$.fragment,1,0,()=>{k(i,1)}),E()}s?(e=w(s,l(t)),t[12](e),g(e.$$.fragment),p(e.$$.fragment,1),b(e,n.parentNode,n)):e=null}else if(s){const i={};o&64&&(i.data=t[6]),o&4&&(i.form=t[2]),e.$set(i)}},i(t){r||(e&&p(e.$$.fragment,t),r=!0)},o(t){e&&m(e.$$.fragment,t),r=!1},d(t){t&&d(n),f[12](null),e&&k(e,t)}}}function pe(f){let e,n,r,s;const l=[ue,_e],t=[];function o(i,a){return i[1][3]?0:1}return e=o(f),n=t[e]=l[e](f),{c(){n.c(),r=u()},l(i){n.l(i),r=u()},m(i,a){t[e].m(i,a),$(i,r,a),s=!0},p(i,a){let c=e;e=o(i),e===c?t[e].p(i,a):(v(),m(t[c],1,1,()=>{t[c]=null}),E(),n=t[e],n?n.p(i,a):(n=t[e]=l[e](i),n.c()),p(n,1),n.m(r.parentNode,r))},i(i){s||(p(n),s=!0)},o(i){m(n),s=!1},d(i){i&&d(r),t[e].d(i)}}}function he(f){let e,n,r,s;const l=[ce,ae],t=[];function o(i,a){return i[1][2]?0:1}return e=o(f),n=t[e]=l[e](f),{c(){n.c(),r=u()},l(i){n.l(i),r=u()},m(i,a){t[e].m(i,a),$(i,r,a),s=!0},p(i,a){let c=e;e=o(i),e===c?t[e].p(i,a):(v(),m(t[c],1,1,()=>{t[c]=null}),E(),n=t[e],n?n.p(i,a):(n=t[e]=l[e](i),n.c()),p(n,1),n.m(r.parentNode,r))},i(i){s||(p(n),s=!0)},o(i){m(n),s=!1},d(i){i&&d(r),t[e].d(i)}}}function V(f){let e,n=f[8]&&A(f);return{c(){e=Y("div"),n&&n.c(),this.h()},l(r){e=Z(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=x(e);n&&n.l(s),s.forEach(d),this.h()},h(){y(e,"id","svelte-announcer"),y(e,"aria-live","assertive"),y(e,"aria-atomic","true"),R(e,"position","absolute"),R(e,"left","0"),R(e,"top","0"),R(e,"clip","rect(0 0 0 0)"),R(e,"clip-path","inset(50%)"),R(e,"overflow","hidden"),R(e,"white-space","nowrap"),R(e,"width","1px"),R(e,"height","1px")},m(r,s){$(r,e,s),n&&n.m(e,null)},p(r,s){r[8]?n?n.p(r,s):(n=A(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&d(e),n&&n.d()}}}function A(f){let e;return{c(){e=ee(f[9])},l(n){e=te(n,f[9])},m(n,r){$(n,e,r)},p(n,r){r&512&&ne(e,n[9])},d(n){n&&d(e)}}}function de(f){let e,n,r,s,l;const t=[le,fe],o=[];function i(c,h){return c[1][1]?0:1}e=i(f),n=o[e]=t[e](f);let a=f[7]&&V(f);return{c(){n.c(),r=Q(),a&&a.c(),s=u()},l(c){n.l(c),r=X(c),a&&a.l(c),s=u()},m(c,h){o[e].m(c,h),$(c,r,h),a&&a.m(c,h),$(c,s,h),l=!0},p(c,[h]){let N=e;e=i(c),e===N?o[e].p(c,h):(v(),m(o[N],1,1,()=>{o[N]=null}),E(),n=o[e],n?n.p(c,h):(n=o[e]=t[e](c),n.c()),p(n,1),n.m(r.parentNode,r)),c[7]?a?a.p(c,h):(a=V(c),a.c(),a.m(s.parentNode,s)):a&&(a.d(1),a=null)},i(c){l||(p(n),l=!0)},o(c){m(n),l=!1},d(c){c&&(d(r),d(s)),o[e].d(c),a&&a.d(c)}}}function we(f,e,n){let{stores:r}=e,{page:s}=e,{constructors:l}=e,{components:t=[]}=e,{form:o}=e,{data_0:i=null}=e,{data_1:a=null}=e,{data_2:c=null}=e,{data_3:h=null}=e;G(r.page.notify);let N=!1,D=!1,O=null;H(()=>{const _=r.page.subscribe(()=>{N&&(n(8,D=!0),J().then(()=>{n(9,O=document.title||"untitled page")}))});return n(7,N=!0),_});function C(_){I[_?"unshift":"push"](()=>{t[3]=_,n(0,t)})}function q(_){I[_?"unshift":"push"](()=>{t[2]=_,n(0,t)})}function B(_){I[_?"unshift":"push"](()=>{t[2]=_,n(0,t)})}function U(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function j(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function W(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function z(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return f.$$set=_=>{"stores"in _&&n(10,r=_.stores),"page"in _&&n(11,s=_.page),"constructors"in _&&n(1,l=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,o=_.form),"data_0"in _&&n(3,i=_.data_0),"data_1"in _&&n(4,a=_.data_1),"data_2"in _&&n(5,c=_.data_2),"data_3"in _&&n(6,h=_.data_3)},f.$$.update=()=>{f.$$.dirty&3072&&r.page.set(s)},[t,l,o,i,a,c,h,N,D,O,r,s,C,q,B,U,j,W,z]}class Ee extends K{constructor(e){super(),M(this,e,we,de,F,{stores:10,page:11,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5,data_3:6})}}const ve=[()=>L(()=>import("../nodes/0.1d5d7bff.js"),["../nodes/0.1d5d7bff.js","../chunks/scheduler.8f0c50f0.js","../chunks/index.618bd48e.js","../assets/0.10858074.css"],import.meta.url),()=>L(()=>import("../nodes/1.639f902d.js"),["../nodes/1.639f902d.js","../chunks/scheduler.8f0c50f0.js","../chunks/index.618bd48e.js","../chunks/stores.f453de5f.js","../chunks/singletons.eacabfe7.js"],import.meta.url),()=>L(()=>import("../nodes/2.52d1b0cf.js"),["../nodes/2.52d1b0cf.js","../chunks/layout.e173dc35.js","../chunks/scheduler.8f0c50f0.js","../chunks/index.618bd48e.js"],import.meta.url),()=>L(()=>import("../nodes/3.05a22e6e.js"),["../nodes/3.05a22e6e.js","../chunks/layout.e173dc35.js","../chunks/scheduler.8f0c50f0.js","../chunks/index.618bd48e.js"],import.meta.url),()=>L(()=>import("../nodes/4.f653fdc4.js"),["../nodes/4.f653fdc4.js","../chunks/scheduler.8f0c50f0.js","../chunks/index.618bd48e.js","../chunks/db.f41d9ada.js","../chunks/singletons.eacabfe7.js","../chunks/isInt.dabd68aa.js","../chunks/each.6c4e4e8a.js","../chunks/stores.f453de5f.js","../assets/4.e84b4c02.css"],import.meta.url),()=>L(()=>import("../nodes/5.47299fc5.js"),["../nodes/5.47299fc5.js","../chunks/scheduler.8f0c50f0.js","../chunks/index.618bd48e.js","../chunks/each.6c4e4e8a.js","../chunks/singletons.eacabfe7.js","../chunks/db.f41d9ada.js","../chunks/isInt.dabd68aa.js","../chunks/stores.f453de5f.js","../assets/5.3eefce15.css"],import.meta.url),()=>L(()=>import("../nodes/6.3e5af768.js"),["../nodes/6.3e5af768.js","../chunks/scheduler.8f0c50f0.js","../chunks/index.618bd48e.js","../chunks/db.f41d9ada.js","../chunks/singletons.eacabfe7.js","../chunks/isInt.dabd68aa.js","../chunks/stores.f453de5f.js"],import.meta.url)],Re=[],Ne={"/camera/[problemId=int]":[6],"/[...path=notint]":[4,[2]],"/[...path=notint]/[problemId=int]":[5,[2,3]]},Ie={handleError:({error:f})=>{console.error(f)}};export{Ne as dictionary,Ie as hooks,$e as matchers,ve as nodes,Ee as root,Re as server_loads};
