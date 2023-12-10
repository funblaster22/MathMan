import{s as x,n as L,h as ce,e as R,i as Ne,j as Ae,o as Se,f as ye,b as oe}from"../chunks/scheduler.21a3a156.js";import{S as W,i as Y,s as M,g as D,c as N,h as E,z as te,k as g,l as T,a as C,B as K,C as Te,f as _,j as y,x as k,r as U,m as Z,u as B,n as $,v as O,d as j,t as F,w as P,y as me,D as ge,o as pe,p as Ve,b as qe,A as Le}from"../chunks/index.5cde54b0.js";import{p as ne,e as se,n as ze}from"../chunks/index.5530884e.js";import{e as re,j as je,w as _e,k as ve}from"../chunks/singletons.91314f9b.js";import{p as fe}from"../chunks/stores.ac5a8961.js";import{d as ee,u as Me}from"../chunks/db.0a5d7a2c.js";var A=(s=>(s[s.Draw=0]="Draw",s[s.Correct=1]="Correct",s[s.Question=2]="Question",s[s.None=3]="None",s[s.Select=4]="Select",s))(A||{});const Qe=""+new URL("../assets/eraser.0e084288.png",import.meta.url).href;function we(s){let e,t="Show Solution";return{c(){e=D("button"),e.textContent=t,this.h()},l(l){e=E(l,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),te(e)!=="svelte-on8fyx"&&(e.textContent=t),this.h()},h(){g(e,"class","border text-center"),T(e,"position","fixed"),T(e,"left",s[1][0]+"px"),T(e,"top",s[1][1]+"px"),T(e,"width",s[2][0]-s[1][0]+"px"),T(e,"height",s[2][1]-s[1][1]+"px")},m(l,r){C(l,e,r)},p(l,r){r&2&&T(e,"left",l[1][0]+"px"),r&2&&T(e,"top",l[1][1]+"px"),r&6&&T(e,"width",l[2][0]-l[1][0]+"px"),r&6&&T(e,"height",l[2][1]-l[1][1]+"px")},d(l){l&&_(e)}}}function Fe(s){let e,t,l='<div style="background-color: green">✅</div>',r,o,i=s[1][1]&&we(s);return{c(){i&&i.c(),e=M(),t=D("div"),t.innerHTML=l,this.h()},l(a){i&&i.l(a),e=N(a),t=E(a,"DIV",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-aiv1v7"&&(t.innerHTML=l),this.h()},h(){g(t,"class","tool"),T(t,"height",s[0]?"100%":"30px")},m(a,n){i&&i.m(a,n),C(a,e,n),C(a,t,n),r||(o=K(t,"pointerdown",Te(s[8])),r=!0)},p(a,[n]){a[1][1]?i?i.p(a,n):(i=we(a),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),n&1&&T(t,"height",a[0]?"100%":"30px")},i:L,o:L,d(a){a&&(_(e),_(t)),i&&i.d(a),r=!1,o()}}}function He(s,e,t){let l;const r=A.Select;let o=!1,i=!1,a=[],n=[],d,c,u=ce("selection");R(s,u,v=>t(7,l=v)),window.addEventListener("pointerdown",v=>{o&&(i=!0,t(5,a=t(6,n=[v.x,v.y])))}),window.addEventListener("pointermove",v=>{i&&t(6,n=[v.x,v.y])}),window.addEventListener("pointerup",()=>{i=!1});const f=()=>u.set(o?A.None:r);return s.$$.update=()=>{s.$$.dirty&128&&t(0,o=l===r),s.$$.dirty&96&&(t(1,d=[Math.min(a[0],n[0]),Math.min(a[1],n[1])]),t(2,c=[Math.max(a[0],n[0]),Math.max(a[1],n[1])]))},[o,d,c,r,u,a,n,l,f]}class Ue extends W{constructor(e){super(),Y(this,e,He,Fe,x,{})}}const Be=""+new URL("../assets/marker.c9b3b178.png",import.meta.url).href;function Oe(s){let e,t,l,r,o;return{c(){e=D("div"),t=D("img"),this.h()},l(i){e=E(i,"DIV",{class:!0});var a=y(e);t=E(a,"IMG",{style:!0,src:!0,title:!0,draggable:!0}),a.forEach(_),this.h()},h(){T(t,"filter",s[1]),Ne(t.src,l=Be)||g(t,"src",l),g(t,"title",s[2]),g(t,"draggable","false"),g(e,"class","tool"),T(e,"height",s[3]?"100%":"30px")},m(i,a){C(i,e,a),k(e,t),r||(o=K(e,"pointerdown",Te(s[6])),r=!0)},p(i,[a]){a&2&&T(t,"filter",i[1]),a&4&&g(t,"title",i[2]),a&8&&T(e,"height",i[3]?"100%":"30px")},i:L,o:L,d(i){i&&_(e),r=!1,o()}}}function Pe(s,e,t){let l,{tool:r}=e,{filter:o=""}=e,{title:i}=e,a=ce("selection");R(s,a,c=>t(5,l=c));let n=!1;const d=()=>a.set(n?A.None:r);return s.$$set=c=>{"tool"in c&&t(0,r=c.tool),"filter"in c&&t(1,o=c.filter),"title"in c&&t(2,i=c.title)},s.$$.update=()=>{s.$$.dirty&33&&t(3,n=l===r)},[r,o,i,n,a,l,d]}class de extends W{constructor(e){super(),Y(this,e,Pe,Oe,x,{tool:0,filter:1,title:2})}}function Re(s){let e,t,l,r,o,i,a,n,d,c,u,f,v,h,Q=`<img src="${Qe}" title="Eraser" draggable="false" class="svelte-h3rgmi"/>`,V,z,X;return t=new Ue({}),n=new de({props:{tool:A.Draw,filter:"grayscale(1)",title:"Your work"}}),c=new de({props:{tool:A.Correct,filter:"hue-rotate(136deg)",title:"Correct"}}),f=new de({props:{tool:A.Question,title:"Question"}}),{c(){e=D("div"),U(t.$$.fragment),l=M(),r=D("a"),o=Z("📷"),a=M(),U(n.$$.fragment),d=M(),U(c.$$.fragment),u=M(),U(f.$$.fragment),v=M(),h=D("div"),h.innerHTML=Q,this.h()},l(b){e=E(b,"DIV",{id:!0,class:!0});var I=y(e);B(t.$$.fragment,I),l=N(I),r=E(I,"A",{href:!0});var H=y(r);o=$(H,"📷"),H.forEach(_),a=N(I),B(n.$$.fragment,I),d=N(I),B(c.$$.fragment,I),u=N(I),B(f.$$.fragment,I),v=N(I),h=E(I,"DIV",{class:!0,"data-svelte-h":!0}),te(h)!=="svelte-19p7wft"&&(h.innerHTML=Q),I.forEach(_),this.h()},h(){g(r,"href",i=ne.join("/",re,"camera",s[1].params.problemId)),g(h,"class","tool"),T(h,"height",s[0]?"100%":"30px"),g(e,"id","tools"),g(e,"class","svelte-h3rgmi")},m(b,I){C(b,e,I),O(t,e,null),k(e,l),k(e,r),k(r,o),k(e,a),O(n,e,null),k(e,d),O(c,e,null),k(e,u),O(f,e,null),k(e,v),k(e,h),V=!0,z||(X=K(h,"click",s[3]),z=!0)},p(b,[I]){(!V||I&2&&i!==(i=ne.join("/",re,"camera",b[1].params.problemId)))&&g(r,"href",i),I&1&&T(h,"height",b[0]?"100%":"30px")},i(b){V||(j(t.$$.fragment,b),j(n.$$.fragment,b),j(c.$$.fragment,b),j(f.$$.fragment,b),V=!0)},o(b){F(t.$$.fragment,b),F(n.$$.fragment,b),F(c.$$.fragment,b),F(f.$$.fragment,b),V=!1},d(b){b&&_(e),P(t),P(n),P(c),P(f),z=!1,X()}}}function xe(s,e,t){let l,r;R(s,fe,n=>t(1,r=n));let{selected:o}=e;Ae("selection",o);let i=ce("eraserEnabled");R(s,i,n=>t(0,l=n));function a(n){i.set(!l)}return s.$$set=n=>{"selected"in n&&t(4,o=n.selected)},[l,r,i,a,o]}class We extends W{constructor(e){super(),Y(this,e,xe,Re,x,{selected:4})}}function Ye(s){let e,t,l,r,o,i,a;return{c(){e=D("canvas"),t=M(),l=D("canvas"),r=M(),o=D("canvas"),this.h()},l(n){e=E(n,"CANVAS",{width:!0,height:!0,class:!0}),y(e).forEach(_),t=N(n),l=E(n,"CANVAS",{width:!0,height:!0,class:!0}),y(l).forEach(_),r=N(n),o=E(n,"CANVAS",{width:!0,height:!0,class:!0}),y(o).forEach(_),this.h()},h(){g(e,"width",s[2]),g(e,"height",s[3]),g(e,"class","svelte-1rofrvo"),g(l,"width",s[2]),g(l,"height",s[3]),g(l,"class","svelte-1rofrvo"),g(o,"width",s[2]),g(o,"height",s[3]),g(o,"class","svelte-1rofrvo")},m(n,d){C(n,e,d),s[8](e),C(n,t,d),C(n,l,d),s[9](l),C(n,r,d),C(n,o,d),s[10](o),i||(a=K(o,"pointerdown",s[5]),i=!0)},p(n,[d]){d&4&&g(e,"width",n[2]),d&8&&g(e,"height",n[3]),d&4&&g(l,"width",n[2]),d&8&&g(l,"height",n[3]),d&4&&g(o,"width",n[2]),d&8&&g(o,"height",n[3])},i:L,o:L,d(n){n&&(_(e),_(t),_(l),_(r),_(o)),s[8](null),s[9](null),s[10](null),i=!1,a()}}}function Xe(s,e,t){let l,r=L,o=()=>(r(),r=ye(a,m=>t(12,l=m)),a),i;s.$$.on_destroy.push(()=>r());let{selectedTool:a}=e;o();let{problemId:n}=e,{attemptId:d}=e,c=0,u=0,f=!1,v=ce("eraserEnabled");R(s,v,m=>t(13,i=m));let h=[];function Q(){typeof window>"u"||(t(2,c=window.innerWidth),t(3,u=window.innerHeight),requestAnimationFrame(async()=>{if(h[0]==null)return;const m=(await ee.files.get(n)).attempts[d];h[A.Draw].putImageData(m.work,0,0),h[A.Correct].putImageData(m.error,0,0),h[A.Question].putImageData(m.questions,0,0)}))}function V(){const m=[0,0,c,u];ee.files.update(n,w=>{w.attempts[d]={date:new Date,work:h[A.Draw].getImageData(...m),error:h[A.Correct].getImageData(...m),questions:h[A.Question].getImageData(...m),rois:w.attempts[d].rois}})}const z=typeof window>"u"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches,X={[A.Draw]:z?"white":"black",[A.Correct]:"red",[A.Question]:"blue"},b=m=>{if(l>=A.None)return;const w=h[l];f=!0,w.strokeStyle=X[l],w.lineWidth=i?20:1,w.globalCompositeOperation=i?"destination-out":"source-over",w.beginPath(),w.moveTo(m.clientX,m.clientY)},I=()=>{f&&V(),f=!1},H=m=>{if(f){const w=h[l];w.lineTo(m.clientX,m.clientY),w.stroke()}};Se(()=>{window.addEventListener("resize",Q),document.addEventListener("pointermove",H),document.addEventListener("pointerup",I),t(1,h=h.map(m=>m.getContext("2d",{willReadFrequently:!0})))});function G(m){oe[m?"unshift":"push"](()=>{h[A.Draw]=m,t(1,h)})}function S(m){oe[m?"unshift":"push"](()=>{h[A.Correct]=m,t(1,h)})}function p(m){oe[m?"unshift":"push"](()=>{h[A.Question]=m,t(1,h)})}return s.$$set=m=>{"selectedTool"in m&&o(t(0,a=m.selectedTool)),"problemId"in m&&t(6,n=m.problemId),"attemptId"in m&&t(7,d=m.attemptId)},s.$$.update=()=>{if(s.$$.dirty&194){Q();for(const m of h){const w=m.canvas;m.clearRect(0,0,w.width,w.height)}}},[a,h,c,u,v,b,n,d,G,S,p]}class Ge extends W{constructor(e){super(),Y(this,e,Xe,Ye,x,{selectedTool:0,problemId:6,attemptId:7})}}const ue=je("goto");function be(s,e,t){const l=s.slice();return l[4]=e[t],l}function Ie(s){let e,t=s[4].name+"",l,r;return{c(){e=D("option"),l=Z(t),this.h()},l(o){e=E(o,"OPTION",{});var i=y(e);l=$(i,t),i.forEach(_),this.h()},h(){e.__value=r=s[4].id,ge(e,e.__value)},m(o,i){C(o,e,i),k(e,l)},p(o,i){i&1&&t!==(t=o[4].name+"")&&pe(l,t),i&1&&r!==(r=o[4].id)&&(e.__value=r,ge(e,e.__value))},d(o){o&&_(e)}}}function Je(s){let e,t="🚩",l,r,o,i,a="➡️",n,d,c=se(s[0]??[]),u=[];for(let f=0;f<c.length;f+=1)u[f]=Ie(be(s,c,f));return{c(){e=D("button"),e.textContent=t,l=M(),r=D("select");for(let f=0;f<u.length;f+=1)u[f].c();o=M(),i=D("button"),i.textContent=a},l(f){e=E(f,"BUTTON",{"data-svelte-h":!0}),te(e)!=="svelte-yzpet0"&&(e.textContent=t),l=N(f),r=E(f,"SELECT",{});var v=y(r);for(let h=0;h<u.length;h+=1)u[h].l(v);v.forEach(_),o=N(f),i=E(f,"BUTTON",{"data-svelte-h":!0}),te(i)!=="svelte-q61pzu"&&(i.textContent=a)},m(f,v){C(f,e,v),C(f,l,v),C(f,r,v);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(r,null);C(f,o,v),C(f,i,v),n||(d=K(r,"change",s[1]),n=!0)},p(f,[v]){if(v&1){c=se(f[0]??[]);let h;for(h=0;h<c.length;h+=1){const Q=be(f,c,h);u[h]?u[h].p(Q,v):(u[h]=Ie(Q),u[h].c(),u[h].m(r,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=c.length}},i:L,o:L,d(f){f&&(_(e),_(l),_(r),_(o),_(i)),me(u,f),n=!1,d()}}}function Ke(s,e,t){let l,{parentFolder:r}=e;function o(a){const n=a.target.value;ue(n)}const i=Me(()=>ee.files.where({parent:r}).toArray());return R(s,i,a=>t(0,l=a)),s.$$set=a=>{"parentFolder"in a&&t(3,r=a.parentFolder)},[l,o,i,r]}class Ze extends W{constructor(e){super(),Y(this,e,Ke,Je,x,{parentFolder:3})}}function $e(s){let e,t,l,r,o=s[0]+1+"",i;return{c(){e=D("div"),t=D("canvas"),r=Z(`
    Attempt `),i=Z(o),this.h()},l(a){e=E(a,"DIV",{class:!0});var n=y(e);t=E(n,"CANVAS",{width:!0,height:!0}),y(t).forEach(_),r=$(n,`
    Attempt `),i=$(n,o),n.forEach(_),this.h()},h(){g(t,"width",s[1]),g(t,"height",l=s[1]-24),g(e,"class","text-center bg-gray-50 rounded-md"),T(e,"width",s[1]+"px")},m(a,n){C(a,e,n),k(e,t),s[4](t),k(e,r),k(e,i)},p(a,[n]){n&2&&g(t,"width",a[1]),n&2&&l!==(l=a[1]-24)&&g(t,"height",l),n&1&&o!==(o=a[0]+1+"")&&pe(i,o),n&2&&T(e,"width",a[1]+"px")},i:L,o:L,d(a){a&&_(e),s[4](null)}}}function et(s,e,t){let{attempt:l}=e,{idx:r}=e,{size:o=100}=e,i;function a(d,c){const u=document.createElement("canvas");u.width=c[0].width,u.height=c[0].height,d.scale(o/u.width,(o-24)/u.height);for(const f of c)u.getContext("2d").putImageData(f,0,0),d.drawImage(u,0,0)}Se(async()=>{const d=i.getContext("2d");a(d,[l.work,l.error,l.questions])});function n(d){oe[d?"unshift":"push"](()=>{i=d,t(2,i)})}return s.$$set=d=>{"attempt"in d&&t(3,l=d.attempt),"idx"in d&&t(0,r=d.idx),"size"in d&&t(1,o=d.size)},[r,o,i,l,n]}class tt extends W{constructor(e){super(),Y(this,e,et,$e,x,{attempt:3,idx:0,size:1})}}function Ce(s,e,t){const l=s.slice();return l[5]=e[t],l[7]=t,l}function De(s){let e,t,l,r,o;t=new tt({props:{attempt:s[5],idx:s[7]}});function i(){return s[4](s[7])}return{c(){e=D("div"),U(t.$$.fragment)},l(a){e=E(a,"DIV",{});var n=y(e);B(t.$$.fragment,n),n.forEach(_)},m(a,n){C(a,e,n),O(t,e,null),l=!0,r||(o=K(e,"click",i),r=!0)},p(a,n){s=a;const d={};n&1&&(d.attempt=s[5]),t.$set(d)},i(a){l||(j(t.$$.fragment,a),l=!0)},o(a){F(t.$$.fragment,a),l=!1},d(a){a&&_(e),P(t),r=!1,o()}}}function nt(s){let e,t,l=`<div class="w-[100px] h-[76px] align-middle text-5xl leading-[1.65]">➕</div>
    New Attempt`,r,o,i,a=se(s[0]??[]),n=[];for(let c=0;c<a.length;c+=1)n[c]=De(Ce(s,a,c));const d=c=>F(n[c],1,1,()=>{n[c]=null});return{c(){for(let c=0;c<n.length;c+=1)n[c].c();e=M(),t=D("div"),t.innerHTML=l,this.h()},l(c){for(let u=0;u<n.length;u+=1)n[u].l(c);e=N(c),t=E(c,"DIV",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-59ttd9"&&(t.innerHTML=l),this.h()},h(){g(t,"class","text-center bg-gray-50 rounded-md w-[100px]")},m(c,u){for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(c,u);C(c,e,u),C(c,t,u),r=!0,o||(i=K(t,"click",s[2]),o=!0)},p(c,[u]){if(u&1){a=se(c[0]??[]);let f;for(f=0;f<a.length;f+=1){const v=Ce(c,a,f);n[f]?(n[f].p(v,u),j(n[f],1)):(n[f]=De(v),n[f].c(),j(n[f],1),n[f].m(e.parentNode,e))}for(Ve(),f=a.length;f<n.length;f+=1)d(f);qe()}},i(c){if(!r){for(let u=0;u<a.length;u+=1)j(n[u]);r=!0}},o(c){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)F(n[u]);r=!1},d(c){c&&(_(e),_(t)),me(n,c),o=!1,i()}}}function st(s,e,t){let l,{problemId:r}=e;const o=Me(()=>ee.files.get(r).then(n=>n.attempts));R(s,o,n=>t(0,l=n));function i(){ee.files.update(r,n=>{ue("?attempt="+n.attempts.push(ze()))})}const a=n=>ue("?attempt="+(n+1));return s.$$set=n=>{"problemId"in n&&t(3,r=n.problemId)},[l,o,i,r,a]}class rt extends W{constructor(e){super(),Y(this,e,st,nt,x,{problemId:3})}}function lt(s){let e,t,l;return{c(){e=D("canvas"),this.h()},l(r){e=E(r,"CANVAS",{class:!0}),y(e).forEach(_),this.h()},h(){g(e,"class","fixed left-0 top-[2em]")},m(r,o){C(r,e,o),s[3](e),t||(l=K(e,"mousedown",s[1]),t=!0)},p:L,i:L,o:L,d(r){r&&_(e),s[3](null),t=!1,l()}}}function at(s,e,t){let{problemId:l}=e,r,o;function i(n){setTimeout(()=>{o.dragStart(n)})}function a(n){oe[n?"unshift":"push"](()=>{r=n,t(0,r),t(2,l)})}return s.$$set=n=>{"problemId"in n&&t(2,l=n.problemId)},s.$$.update=()=>{s.$$.dirty&5&&ee.files.get(l).then(n=>{n!=null&&n.question&&(t(0,r.width=n.question.width,r),t(0,r.height=n.question.height,r),r.getContext("2d").putImageData(n.question,0,0))})},[r,i,l,a]}class it extends W{constructor(e){super(),Y(this,e,at,lt,x,{problemId:2})}}function Ee(s,e,t){const l=s.slice();return l[8]=e[t],l}function ke(s){let e,t=s[8]+"",l;return{c(){e=Z("/"),l=Z(t)},l(r){e=$(r,"/"),l=$(r,t)},m(r,o){C(r,e,o),C(r,l,o)},p(r,o){o&2&&t!==(t=r[8]+"")&&pe(l,t)},d(r){r&&(_(e),_(l))}}}function ot(s){let e,t,l,r,o,i,a,n,d,c,u,f,v,h,Q,V,z,X,b,I,H;t=new it({props:{problemId:s[0]}}),r=new Ge({props:{selectedTool:s[3],problemId:s[0],attemptId:s[2]}});let G=se(s[1].params.path.split("/")),S=[];for(let p=0;p<G.length;p+=1)S[p]=ke(Ee(s,G,p));return h=new Ze({props:{parentFolder:s[1].params.path.split("/").at(-1)}}),z=new We({props:{selected:s[3]}}),I=new rt({props:{problemId:s[0]}}),{c(){e=M(),U(t.$$.fragment),l=M(),U(r.$$.fragment),o=M(),i=D("div"),a=D("div"),n=D("a"),d=Z("🏠"),u=M();for(let p=0;p<S.length;p+=1)S[p].c();f=M(),v=D("div"),U(h.$$.fragment),Q=M(),V=D("div"),U(z.$$.fragment),X=M(),b=D("div"),U(I.$$.fragment),this.h()},l(p){Le("svelte-pyemm1",document.head).forEach(_),e=N(p),B(t.$$.fragment,p),l=N(p),B(r.$$.fragment,p),o=N(p),i=E(p,"DIV",{id:!0,class:!0});var w=y(i);a=E(w,"DIV",{id:!0,class:!0});var J=y(a);n=E(J,"A",{href:!0});var le=y(n);d=$(le,"🏠"),le.forEach(_),u=N(J);for(let he=0;he<S.length;he+=1)S[he].l(J);J.forEach(_),f=N(w),v=E(w,"DIV",{id:!0,class:!0});var ae=y(v);B(h.$$.fragment,ae),ae.forEach(_),Q=N(w),V=E(w,"DIV",{id:!0,class:!0});var q=y(V);B(z.$$.fragment,q),q.forEach(_),X=N(w),b=E(w,"DIV",{id:!0,class:!0});var ie=y(b);B(I.$$.fragment,ie),ie.forEach(_),w.forEach(_),this.h()},h(){document.title="MathMan Draw",g(n,"href",c=ne.join("/",re,s[1].params.path)),g(a,"id","breadcrumbs"),g(a,"class","svelte-1edzgew"),g(v,"id","question-management"),g(v,"class","text-right svelte-1edzgew"),g(V,"id","tools-container"),g(V,"class","svelte-1edzgew"),g(b,"id","attempts-container"),g(b,"class","flex flex-col p-3 gap-3 svelte-1edzgew"),g(i,"id","grid"),g(i,"class","svelte-1edzgew")},m(p,m){C(p,e,m),O(t,p,m),C(p,l,m),O(r,p,m),C(p,o,m),C(p,i,m),k(i,a),k(a,n),k(n,d),k(a,u);for(let w=0;w<S.length;w+=1)S[w]&&S[w].m(a,null);k(i,f),k(i,v),O(h,v,null),k(i,Q),k(i,V),O(z,V,null),k(i,X),k(i,b),O(I,b,null),H=!0},p(p,[m]){const w={};m&1&&(w.problemId=p[0]),t.$set(w);const J={};if(m&1&&(J.problemId=p[0]),m&4&&(J.attemptId=p[2]),r.$set(J),(!H||m&2&&c!==(c=ne.join("/",re,p[1].params.path)))&&g(n,"href",c),m&2){G=se(p[1].params.path.split("/"));let q;for(q=0;q<G.length;q+=1){const ie=Ee(p,G,q);S[q]?S[q].p(ie,m):(S[q]=ke(ie),S[q].c(),S[q].m(a,null))}for(;q<S.length;q+=1)S[q].d(1);S.length=G.length}const le={};m&2&&(le.parentFolder=p[1].params.path.split("/").at(-1)),h.$set(le);const ae={};m&1&&(ae.problemId=p[0]),I.$set(ae)},i(p){H||(j(t.$$.fragment,p),j(r.$$.fragment,p),j(h.$$.fragment,p),j(z.$$.fragment,p),j(I.$$.fragment,p),H=!0)},o(p){F(t.$$.fragment,p),F(r.$$.fragment,p),F(h.$$.fragment,p),F(z.$$.fragment,p),F(I.$$.fragment,p),H=!1},d(p){p&&(_(e),_(l),_(o),_(i)),P(t,p),P(r,p),me(S,p),P(h),P(z),P(I)}}}function ut(s,e,t){let l,r,o;R(s,fe,u=>t(1,r=u));const i=_e(A.None),a=_e(!1);Ae("eraserEnabled",a);const n=ve(fe,u=>Number.parseInt(u.params.problemId));R(s,n,u=>t(0,l=u));const d=ve(fe,u=>Number.parseInt(u.url.searchParams.get("attempt")??"1")-1);R(s,d,u=>t(2,o=u));function c(u){if(u){const f=u.route.join("/");"/"+r.params.path!==f&&ue(ne.join("/",re,f,r.params.problemId))}else ue(ne.join("/",re,r.params.path))}return s.$$.update=()=>{s.$$.dirty&1&&typeof window<"u"&&ee.files.get(l).then(c)},[l,r,o,i,n,d]}class gt extends W{constructor(e){super(),Y(this,e,ut,ot,x,{})}}export{gt as component};