import{s as M,n as V,b as W,q,r as C,e as P,o as A,v as N}from"../chunks/scheduler.d208cd37.js";import{S as H,i as O,g as v,h as w,j as b,f as u,k as z,l as k,a as x,x as I,A as B,I as S,s as j,r as U,c as T,u as F,z as E,v as X,d as Y,t as $,w as G}from"../chunks/index.c95bd50b.js";import{i as J,d as K}from"../chunks/index.351585a2.js";import{p as L}from"../chunks/stores.d6d6cca1.js";const Q=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Z(a){let n,s,r,o;return{c(){n=v("div"),s=v("div"),this.h()},l(t){n=w(t,"DIV",{class:!0});var i=b(n);s=w(i,"DIV",{class:!0}),b(s).forEach(u),i.forEach(u),this.h()},h(){z(s,"class","absolute right-0 bottom-0 w-5 h-5 bg-orange-400 cursor-nw-resize svelte-1o3tvyk"),z(n,"class","relative overflow-auto border min-w-12 min-h-12 border-orange-400 svelte-1o3tvyk"),k(n,"width",a[0][0]+"px"),k(n,"height",a[0][1]+"px")},m(t,i){x(t,n,i),I(n,s),r||(o=B(s,"pointerdown",a[1]),r=!0)},p(t,[i]){i&1&&k(n,"width",t[0][0]+"px"),i&1&&k(n,"height",t[0][1]+"px")},i:V,o:V,d(t){t&&u(n),r=!1,o()}}}function ee(){document.onpointermove=document.onpointerup=null}function te(a,n,s){let{size:r=[170,70]}=n;function o(i){document.onpointermove=t,document.onpointerup=ee}function t(i){s(0,r[0]=(i.clientX-window.innerWidth/2)*2,r),s(0,r[1]=(i.clientY-window.innerHeight*.6/2)*2,r)}return a.$$set=i=>{"size"in i&&s(0,r=i.size)},[r,o]}class ne extends H{constructor(n){super(),O(this,n,te,Z,M,{size:0})}}const{window:se}=Q;function oe(a){let n,s,r,o,t,i,y,d,f,p,D,c;function m(e){a[6](e)}let g={};return a[1]!==void 0&&(g.size=a[1]),t=new ne({props:g}),W.push(()=>S(t,"size",m)),{c(){n=v("div"),s=v("video"),r=j(),o=v("div"),U(t.$$.fragment),y=j(),d=v("div"),f=v("button"),this.h()},l(e){n=w(e,"DIV",{class:!0});var l=b(n);s=w(l,"VIDEO",{class:!0}),b(s).forEach(u),l.forEach(u),r=T(e),o=w(e,"DIV",{class:!0});var h=b(o);F(t.$$.fragment,h),h.forEach(u),y=T(e),d=w(e,"DIV",{class:!0});var _=b(d);f=w(_,"BUTTON",{class:!0}),b(f).forEach(u),_.forEach(u),this.h()},h(){z(s,"class","w-full"),z(n,"class","fixed inset-x-0 inset-y-0"),z(o,"class","fixed w-full h-[60vh] inset-x-0 top-0 flex items-center justify-center"),z(f,"class","rounded-full bg-orange-400 w-[5rem] h-[5rem]"),z(d,"class","fixed flex justify-center items-center svelte-1o1knjk"),E(d,"placeBottom",a[2]),E(d,"placeRight",!a[2])},m(e,l){x(e,n,l),I(n,s),a[5](s),x(e,r,l),x(e,o,l),X(t,o,null),x(e,y,l),x(e,d,l),I(d,f),p=!0,D||(c=[B(se,"resize",a[4]),B(f,"click",a[3])],D=!0)},p(e,[l]){const h={};!i&&l&2&&(i=!0,h.size=e[1],q(()=>i=!1)),t.$set(h),(!p||l&4)&&E(d,"placeBottom",e[2]),(!p||l&4)&&E(d,"placeRight",!e[2])},i(e){p||(Y(t.$$.fragment,e),p=!0)},o(e){$(t.$$.fragment,e),p=!1},d(e){e&&(u(n),u(r),u(o),u(y),u(d)),a[5](null),G(t),D=!1,C(c)}}}function ie(a,n,s){let r;P(a,L,c=>s(7,r=c));let o,t,i;f(),A(()=>{navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}).then(c=>{s(0,o.srcObject=c,o),o.play()}).catch(c=>{console.error(`An error occurred: ${c}`)})}),N(()=>{o.srcObject.getVideoTracks()[0].stop()});function y(c){const[m,g]=[o.videoWidth,o.videoHeight],e=document.createElement("canvas");e.width=m,e.height=g;const l=e.getContext("2d");l.drawImage(o,0,0,m,g);const h=d(),_=m/window.innerWidth,R=l.getImageData(h.x*_,h.y*_,h.width*_,h.height*_);K.files.update(Number.parseInt(r.params.problemId),{question:R}).then(()=>history.back())}function d(){const{clientWidth:c,clientHeight:m}=document.documentElement,g=c/2,e=m*.3;return{x:Math.round(g-t[0]/2),y:Math.round(e-t[1]/2),width:t[0],height:t[1]}}function f(){s(2,i=window.innerWidth<window.innerHeight?!0:!J())}function p(c){W[c?"unshift":"push"](()=>{o=c,s(0,o)})}function D(c){t=c,s(1,t)}return[o,t,i,y,f,p,D]}class de extends H{constructor(n){super(),O(this,n,ie,oe,M,{})}}export{de as component};
