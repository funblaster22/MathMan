import{n as p,f as I,r as x,s as O,i as U}from"./scheduler.75de2e2f.js";const f=[];function j(e,t){return{subscribe:b(e,t).subscribe}}function b(e,t=p){let n;const r=new Set;function o(s){if(O(e,s)&&(e=s,n)){const i=!f.length;for(const l of r)l[1](),f.push(l,e);if(i){for(let l=0;l<f.length;l+=2)f[l][0](f[l+1]);f.length=0}}}function c(s){o(s(e))}function a(s,i=p){const l=[s,i];return r.add(l),r.size===1&&(n=t(o,c)||p),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:a}}function K(e,t,n){const r=!Array.isArray(e),o=r?[e]:e;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=t.length<2;return j(n,(a,s)=>{let i=!1;const l=[];let _=0,h=p;const v=()=>{if(_)return;h();const u=t(r?l[0]:l,a,s);c?a(u):h=U(u)?u:p},S=o.map((u,g)=>I(u,T=>{l[g]=T,_&=~(1<<g),i&&v()},()=>{_|=1<<g}));return i=!0,v(),function(){x(S),h(),i=!1}})}var w;const L=((w=globalThis.__sveltekit_jul1f7)==null?void 0:w.base)??"/MathMan";var A;const N=((A=globalThis.__sveltekit_jul1f7)==null?void 0:A.assets)??L,P="1700513812950",$="sveltekit:snapshot",z="sveltekit:scroll",B="sveltekit:index",k={tap:1,hover:2,viewport:3,eager:4,off:-1};function C(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function D(){return{x:pageXOffset,y:pageYOffset}}function d(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const y={...k,"":k.hover};function E(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function G(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function M(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!r||Y(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),c=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:o,target:r,download:c}}function X(e){let t=null,n=null,r=null,o=null,c=null,a=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=d(s,"preload-code")),o===null&&(o=d(s,"preload-data")),t===null&&(t=d(s,"keepfocus")),n===null&&(n=d(s,"noscroll")),c===null&&(c=d(s,"reload")),a===null&&(a=d(s,"replacestate")),s=E(s);function i(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:y[r??"off"],preload_data:y[o??"off"],keep_focus:i(t),noscroll:i(n),reload:i(c),replace_state:i(a)}}function m(e){const t=b(e);let n=!0;function r(){n=!0,t.update(a=>a)}function o(a){n=!1,t.set(a)}function c(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:r,set:o,subscribe:c}}function V(){const{set:e,subscribe:t}=b(!1);let n;async function r(){clearTimeout(n);try{const o=await fetch(`${N}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!o.ok)return!1;const a=(await o.json()).version!==P;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:r}}function Y(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let R;function H(e){R=e.client}function W(e){return(...t)=>R[e](...t)}const F={url:m({}),page:m({}),navigating:b(null),updated:V()};export{B as I,k as P,z as S,$ as a,M as b,X as c,F as d,L as e,G as f,C as g,H as h,Y as i,W as j,K as k,j as r,D as s,b as w};
