import{s as $,n as H,j as he,e as Y,k as Le,l as Ne,o as Se,f as ye,b as ie,m as je,r as Qe}from"../chunks/scheduler.a731e211.js";import{S as ee,i as te,s as Q,g as T,c as z,h as M,A as fe,k as w,l as j,a as D,z as B,C as Ve,f as g,j as S,x as A,r as X,m as Z,u as G,n as x,v as J,d as P,t as W,w as K,D as _e,o as me,y as ce,E as ge,F as ze,p as Fe,b as Oe,B as He}from"../chunks/index.f53a124d.js";import{p as se,e as ne}from"../chunks/index.73019456.js";import{e as le,j as Pe,w as ve,k as we}from"../chunks/singletons.b542c058.js";import{p as ue}from"../chunks/stores.4b5dd131.js";import{d as R,u as qe}from"../chunks/db.6208fdf7.js";var V=(n=>(n[n.Draw=0]="Draw",n[n.Correct=1]="Correct",n[n.Question=2]="Question",n[n.None=3]="None",n[n.Select=4]="Select",n))(V||{});const Ue=""+new URL("../assets/eraser.0e084288.png",import.meta.url).href;function be(n){let e,t="Show Solution";return{c(){e=T("button"),e.textContent=t,this.h()},l(l){e=M(l,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),fe(e)!=="svelte-on8fyx"&&(e.textContent=t),this.h()},h(){w(e,"class","border text-center"),j(e,"position","fixed"),j(e,"left",n[1][0]+"px"),j(e,"top",n[1][1]+"px"),j(e,"width",n[2][0]-n[1][0]+"px"),j(e,"height",n[2][1]-n[1][1]+"px")},m(l,r){D(l,e,r)},p(l,r){r&2&&j(e,"left",l[1][0]+"px"),r&2&&j(e,"top",l[1][1]+"px"),r&6&&j(e,"width",l[2][0]-l[1][0]+"px"),r&6&&j(e,"height",l[2][1]-l[1][1]+"px")},d(l){l&&g(e)}}}function We(n){let e,t,l='<div style="background-color: green">✅</div>',r,i,a=n[1][1]&&be(n);return{c(){a&&a.c(),e=Q(),t=T("div"),t.innerHTML=l,this.h()},l(o){a&&a.l(o),e=z(o),t=M(o,"DIV",{class:!0,"data-svelte-h":!0}),fe(t)!=="svelte-aiv1v7"&&(t.innerHTML=l),this.h()},h(){w(t,"class","tool"),j(t,"height",n[0]?"100%":"30px")},m(o,s){a&&a.m(o,s),D(o,e,s),D(o,t,s),r||(i=B(t,"pointerdown",Ve(n[8])),r=!0)},p(o,[s]){o[1][1]?a?a.p(o,s):(a=be(o),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),s&1&&j(t,"height",o[0]?"100%":"30px")},i:H,o:H,d(o){o&&(g(e),g(t)),a&&a.d(o),r=!1,i()}}}function Be(n,e,t){let l;const r=V.Select;let i=!1,a=!1,o=[],s=[],c,u,h=he("selection");Y(n,h,C=>t(7,l=C)),window.addEventListener("pointerdown",C=>{i&&(a=!0,t(5,o=t(6,s=[C.x,C.y])))}),window.addEventListener("pointermove",C=>{a&&t(6,s=[C.x,C.y])}),window.addEventListener("pointerup",()=>{a=!1});const v=()=>h.set(i?V.None:r);return n.$$.update=()=>{n.$$.dirty&128&&t(0,i=l===r),n.$$.dirty&96&&(t(1,c=[Math.min(o[0],s[0]),Math.min(o[1],s[1])]),t(2,u=[Math.max(o[0],s[0]),Math.max(o[1],s[1])]))},[i,c,u,r,h,o,s,l,v]}class Re extends ee{constructor(e){super(),te(this,e,Be,We,$,{})}}const Ye=""+new URL("../assets/marker.c9b3b178.png",import.meta.url).href;function Xe(n){let e,t,l,r,i;return{c(){e=T("div"),t=T("img"),this.h()},l(a){e=M(a,"DIV",{class:!0});var o=S(e);t=M(o,"IMG",{style:!0,src:!0,title:!0,draggable:!0}),o.forEach(g),this.h()},h(){j(t,"filter",n[1]),Le(t.src,l=Ye)||w(t,"src",l),w(t,"title",n[2]),w(t,"draggable","false"),w(e,"class","tool"),j(e,"height",n[3]?"100%":"30px")},m(a,o){D(a,e,o),A(e,t),r||(i=B(e,"pointerdown",Ve(n[6])),r=!0)},p(a,[o]){o&2&&j(t,"filter",a[1]),o&4&&w(t,"title",a[2]),o&8&&j(e,"height",a[3]?"100%":"30px")},i:H,o:H,d(a){a&&g(e),r=!1,i()}}}function Ge(n,e,t){let l,{tool:r}=e,{filter:i=""}=e,{title:a}=e,o=he("selection");Y(n,o,u=>t(5,l=u));let s=!1;const c=()=>o.set(s?V.None:r);return n.$$set=u=>{"tool"in u&&t(0,r=u.tool),"filter"in u&&t(1,i=u.filter),"title"in u&&t(2,a=u.title)},n.$$.update=()=>{n.$$.dirty&33&&t(3,s=l===r)},[r,i,a,s,o,l,c]}class pe extends ee{constructor(e){super(),te(this,e,Ge,Xe,$,{tool:0,filter:1,title:2})}}function Je(n){let e,t,l,r,i,a,o,s,c,u,h,v,C,E,I=`<img src="${Ue}" title="Eraser" draggable="false" class="svelte-h3rgmi"/>`,p,k,m;return t=new Re({}),s=new pe({props:{tool:V.Draw,filter:"grayscale(1)",title:"Your work"}}),u=new pe({props:{tool:V.Correct,filter:"hue-rotate(136deg)",title:"Correct"}}),v=new pe({props:{tool:V.Question,title:"Question"}}),{c(){e=T("div"),X(t.$$.fragment),l=Q(),r=T("a"),i=Z("📷"),o=Q(),X(s.$$.fragment),c=Q(),X(u.$$.fragment),h=Q(),X(v.$$.fragment),C=Q(),E=T("div"),E.innerHTML=I,this.h()},l(b){e=M(b,"DIV",{id:!0,class:!0});var f=S(e);G(t.$$.fragment,f),l=z(f),r=M(f,"A",{href:!0});var q=S(r);i=x(q,"📷"),q.forEach(g),o=z(f),G(s.$$.fragment,f),c=z(f),G(u.$$.fragment,f),h=z(f),G(v.$$.fragment,f),C=z(f),E=M(f,"DIV",{class:!0,"data-svelte-h":!0}),fe(E)!=="svelte-19p7wft"&&(E.innerHTML=I),f.forEach(g),this.h()},h(){w(r,"href",a=se.join("/",le,"camera",n[1].params.problemId)),w(E,"class","tool"),j(E,"height",n[0]?"100%":"30px"),w(e,"id","tools"),w(e,"class","svelte-h3rgmi")},m(b,f){D(b,e,f),J(t,e,null),A(e,l),A(e,r),A(r,i),A(e,o),J(s,e,null),A(e,c),J(u,e,null),A(e,h),J(v,e,null),A(e,C),A(e,E),p=!0,k||(m=B(E,"click",n[3]),k=!0)},p(b,[f]){(!p||f&2&&a!==(a=se.join("/",le,"camera",b[1].params.problemId)))&&w(r,"href",a),f&1&&j(E,"height",b[0]?"100%":"30px")},i(b){p||(P(t.$$.fragment,b),P(s.$$.fragment,b),P(u.$$.fragment,b),P(v.$$.fragment,b),p=!0)},o(b){W(t.$$.fragment,b),W(s.$$.fragment,b),W(u.$$.fragment,b),W(v.$$.fragment,b),p=!1},d(b){b&&g(e),K(t),K(s),K(u),K(v),k=!1,m()}}}function Ke(n,e,t){let l,r;Y(n,ue,s=>t(1,r=s));let{selected:i}=e;Ne("selection",i);let a=he("eraserEnabled");Y(n,a,s=>t(0,l=s));function o(s){a.set(!l)}return n.$$set=s=>{"selected"in s&&t(4,i=s.selected)},[l,r,a,o,i]}class Ze extends ee{constructor(e){super(),te(this,e,Ke,Je,$,{selected:4})}}function xe(n){let e,t,l,r,i,a,o;return{c(){e=T("canvas"),t=Q(),l=T("canvas"),r=Q(),i=T("canvas"),this.h()},l(s){e=M(s,"CANVAS",{width:!0,height:!0,class:!0}),S(e).forEach(g),t=z(s),l=M(s,"CANVAS",{width:!0,height:!0,class:!0}),S(l).forEach(g),r=z(s),i=M(s,"CANVAS",{width:!0,height:!0,class:!0}),S(i).forEach(g),this.h()},h(){w(e,"width",n[2]),w(e,"height",n[3]),w(e,"class","svelte-1rofrvo"),w(l,"width",n[2]),w(l,"height",n[3]),w(l,"class","svelte-1rofrvo"),w(i,"width",n[2]),w(i,"height",n[3]),w(i,"class","svelte-1rofrvo")},m(s,c){D(s,e,c),n[8](e),D(s,t,c),D(s,l,c),n[9](l),D(s,r,c),D(s,i,c),n[10](i),a||(o=B(i,"pointerdown",n[5]),a=!0)},p(s,[c]){c&4&&w(e,"width",s[2]),c&8&&w(e,"height",s[3]),c&4&&w(l,"width",s[2]),c&8&&w(l,"height",s[3]),c&4&&w(i,"width",s[2]),c&8&&w(i,"height",s[3])},i:H,o:H,d(s){s&&(g(e),g(t),g(l),g(r),g(i)),n[8](null),n[9](null),n[10](null),a=!1,o()}}}function $e(n,e,t){let l,r=H,i=()=>(r(),r=ye(o,d=>t(13,l=d)),o),a;n.$$.on_destroy.push(()=>r());let{selectedTool:o}=e;i();let{problemId:s}=e,{attemptId:c}=e,u=0,h=0,v=!1,C=he("eraserEnabled");Y(n,C,d=>t(14,a=d));let E,I=[];function p(){typeof window>"u"||(t(2,u=window.innerWidth),t(3,h=window.innerHeight),requestAnimationFrame(async()=>{if(I[0]==null)return;const d=(await R.files.get(s)).attempts[c];I[V.Draw].putImageData(d.work,0,0),I[V.Correct].putImageData(d.error,0,0),I[V.Question].putImageData(d.questions,0,0)}))}const k=()=>{const d=[0,0,u,h];R.files.update(s,N=>{const U=N.attempts[c];U.date=new Date,U.duration=Math.floor((new Date().getTime()-E)/1e3/60),l==V.Correct&&(U.mistakeCount=1),l==V.Question&&(U.questionCount=1),U[["work","error","questions"][l]]=I[l].getImageData(...d)})},m=typeof window>"u"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches,b={[V.Draw]:m?"white":"black",[V.Correct]:"red",[V.Question]:"blue"},f=d=>{if(l>=V.None)return;const N=I[l];v=!0,N.strokeStyle=b[l],N.lineWidth=a?20:1,N.globalCompositeOperation=a?"destination-out":"source-over",N.beginPath(),N.moveTo(d.clientX,d.clientY)},q=()=>{v&&k(),v=!1},F=d=>{if(v){const N=I[l];N.lineTo(d.clientX,d.clientY),N.stroke()}};Se(()=>{window.addEventListener("resize",p),document.addEventListener("pointermove",F),document.addEventListener("pointerup",q),t(1,I=I.map(d=>d.getContext("2d",{willReadFrequently:!0})))});function L(d){ie[d?"unshift":"push"](()=>{I[V.Draw]=d,t(1,I)})}function _(d){ie[d?"unshift":"push"](()=>{I[V.Correct]=d,t(1,I)})}function y(d){ie[d?"unshift":"push"](()=>{I[V.Question]=d,t(1,I)})}return n.$$set=d=>{"selectedTool"in d&&i(t(0,o=d.selectedTool)),"problemId"in d&&t(6,s=d.problemId),"attemptId"in d&&t(7,c=d.attemptId)},n.$$.update=()=>{if(n.$$.dirty&194){p(),E=new Date().getTime();for(const d of I){const N=d.canvas;d.clearRect(0,0,N.width,N.height)}}},[o,I,u,h,C,f,s,c,L,_,y]}class et extends ee{constructor(e){super(),te(this,e,$e,xe,$,{selectedTool:0,problemId:6,attemptId:7})}}const re=Pe("goto");function Ie(n,e,t){const l=n.slice();return l[13]=e[t],l}function ke(n,e,t){const l=n.slice();return l[16]=e[t],l}function Ee(n){let e,t=n[4][n[16]]+"",l;return{c(){e=T("option"),l=Z(t),this.h()},l(r){e=M(r,"OPTION",{});var i=S(e);l=x(i,t),i.forEach(g),this.h()},h(){e.__value=n[16],ge(e,e.__value)},m(r,i){D(r,e,i),A(e,l)},p:H,d(r){r&&g(e)}}}function Ce(n){let e,t=n[13].name+"",l,r,i;return{c(){e=T("option"),l=Z(t),this.h()},l(a){e=M(a,"OPTION",{});var o=S(e);l=x(o,t),o.forEach(g),this.h()},h(){e.__value=r=n[13].id,ge(e,e.__value),e.selected=i=n[13].name===n[2]},m(a,o){D(a,e,o),A(e,l)},p(a,o){o&8&&t!==(t=a[13].name+"")&&me(l,t),o&8&&r!==(r=a[13].id)&&(e.__value=r,ge(e,e.__value)),o&12&&i!==(i=a[13].name===a[2])&&(e.selected=i)},d(a){a&&g(e)}}}function tt(n){let e,t=n[1]?new Date().getMonth()===5?"🏳️‍🌈":"🚩":"🏳️",l,r,i,a,o,s,c,u,h="➡️",v,C,E=ne(Object.keys(n[4])),I=[];for(let m=0;m<E.length;m+=1)I[m]=Ee(ke(n,E,m));let p=ne(n[3]??[]),k=[];for(let m=0;m<p.length;m+=1)k[m]=Ce(Ie(n,p,m));return{c(){e=T("button"),l=Z(t),i=Q(),a=T("select");for(let m=0;m<I.length;m+=1)I[m].c();o=Q(),s=T("select");for(let m=0;m<k.length;m+=1)k[m].c();c=Q(),u=T("button"),u.textContent=h,this.h()},l(m){e=M(m,"BUTTON",{title:!0});var b=S(e);l=x(b,t),b.forEach(g),i=z(m),a=M(m,"SELECT",{});var f=S(a);for(let F=0;F<I.length;F+=1)I[F].l(f);f.forEach(g),o=z(m),s=M(m,"SELECT",{});var q=S(s);for(let F=0;F<k.length;F+=1)k[F].l(q);q.forEach(g),c=z(m),u=M(m,"BUTTON",{"data-svelte-h":!0}),fe(u)!=="svelte-1wjt799"&&(u.textContent=h),this.h()},h(){w(e,"title",r=(n[1]?"un":"")+"flag for later"),n[0]===void 0&&je(()=>n[11].call(a))},m(m,b){D(m,e,b),A(e,l),D(m,i,b),D(m,a,b);for(let f=0;f<I.length;f+=1)I[f]&&I[f].m(a,null);_e(a,n[0],!0),D(m,o,b),D(m,s,b);for(let f=0;f<k.length;f+=1)k[f]&&k[f].m(s,null);D(m,c,b),D(m,u,b),v||(C=[B(e,"click",n[7]),B(a,"change",n[11]),B(s,"change",n[5]),B(u,"click",n[6])],v=!0)},p(m,[b]){if(b&2&&t!==(t=m[1]?new Date().getMonth()===5?"🏳️‍🌈":"🚩":"🏳️")&&me(l,t),b&2&&r!==(r=(m[1]?"un":"")+"flag for later")&&w(e,"title",r),b&16){E=ne(Object.keys(m[4]));let f;for(f=0;f<E.length;f+=1){const q=ke(m,E,f);I[f]?I[f].p(q,b):(I[f]=Ee(q),I[f].c(),I[f].m(a,null))}for(;f<I.length;f+=1)I[f].d(1);I.length=E.length}if(b&17&&_e(a,m[0]),b&12){p=ne(m[3]??[]);let f;for(f=0;f<p.length;f+=1){const q=Ie(m,p,f);k[f]?k[f].p(q,b):(k[f]=Ce(q),k[f].c(),k[f].m(s,null))}for(;f<k.length;f+=1)k[f].d(1);k.length=p.length}},i:H,o:H,d(m){m&&(g(e),g(i),g(a),g(o),g(s),g(c),g(u)),ce(I,m),ce(k,m),v=!1,Qe(C)}}}function nt(n,e,t){let l,r;Y(n,ue,p=>t(12,l=p));var i=(p=>(p.Work="Work",p.Mistakes="Mistakes",p.Questions="Questions",p))(i||{});let{parentFolder:a}=e,{problemId:o}=e,s="Work",c=!1,u;function h(p){const k=p.target.value;re(k)}function v(){switch(s){case"Work":const p=Array.from(u.matchAll(/\d+/g)).at(-1),k=[];p!=null&&(k[0]=u.substring(0,p.index)+(Number.parseInt(p[0])+1)+u.substring(p.index+p[0].length)),R.newFile({basePath:l.data.path,route:k}).then(m=>{m>=0&&re(String(m))})}}function C(){t(1,c=!c),R.files.update(o,{flagged:c})}const E=qe(()=>R.files.where({parent:a}).toArray());Y(n,E,p=>t(3,r=p));function I(){s=ze(this),t(0,s),t(4,i)}return n.$$set=p=>{"parentFolder"in p&&t(9,a=p.parentFolder),"problemId"in p&&t(10,o=p.problemId)},n.$$.update=()=>{n.$$.dirty&1&&console.log(s),n.$$.dirty&1024&&R.files.get(o).then(p=>{t(1,c=(p==null?void 0:p.flagged)??!1),t(2,u=(p==null?void 0:p.name)??"")})},[s,c,u,r,i,h,v,C,E,a,o,I]}class st extends ee{constructor(e){super(),te(this,e,nt,tt,$,{parentFolder:9,problemId:10})}}function lt(n){let e,t,l,r,i=n[0]+1+"",a;return{c(){e=T("div"),t=T("canvas"),r=Z(`
    Attempt `),a=Z(i),this.h()},l(o){e=M(o,"DIV",{class:!0});var s=S(e);t=M(s,"CANVAS",{width:!0,height:!0}),S(t).forEach(g),r=x(s,`
    Attempt `),a=x(s,i),s.forEach(g),this.h()},h(){w(t,"width",n[1]),w(t,"height",l=n[1]-24),w(e,"class","text-center bg-gray-50 rounded-md"),j(e,"width",n[1]+"px")},m(o,s){D(o,e,s),A(e,t),n[4](t),A(e,r),A(e,a)},p(o,[s]){s&2&&w(t,"width",o[1]),s&2&&l!==(l=o[1]-24)&&w(t,"height",l),s&1&&i!==(i=o[0]+1+"")&&me(a,i),s&2&&j(e,"width",o[1]+"px")},i:H,o:H,d(o){o&&g(e),n[4](null)}}}function rt(n,e,t){let{attempt:l}=e,{idx:r}=e,{size:i=100}=e,a;function o(c,u){const h=document.createElement("canvas");h.width=u[0].width,h.height=u[0].height,c.scale(i/h.width,(i-24)/h.height);for(const v of u)h.getContext("2d").putImageData(v,0,0),c.drawImage(h,0,0)}Se(async()=>{const c=a.getContext("2d");o(c,[l.work,l.error,l.questions])});function s(c){ie[c?"unshift":"push"](()=>{a=c,t(2,a)})}return n.$$set=c=>{"attempt"in c&&t(3,l=c.attempt),"idx"in c&&t(0,r=c.idx),"size"in c&&t(1,i=c.size)},[r,i,a,l,s]}class ot extends ee{constructor(e){super(),te(this,e,rt,lt,$,{attempt:3,idx:0,size:1})}}function De(n,e,t){const l=n.slice();return l[5]=e[t],l[7]=t,l}function Te(n){let e,t,l,r,i;t=new ot({props:{attempt:n[5],idx:n[7]}});function a(){return n[4](n[7])}return{c(){e=T("div"),X(t.$$.fragment)},l(o){e=M(o,"DIV",{});var s=S(e);G(t.$$.fragment,s),s.forEach(g)},m(o,s){D(o,e,s),J(t,e,null),l=!0,r||(i=B(e,"click",a),r=!0)},p(o,s){n=o;const c={};s&1&&(c.attempt=n[5]),t.$set(c)},i(o){l||(P(t.$$.fragment,o),l=!0)},o(o){W(t.$$.fragment,o),l=!1},d(o){o&&g(e),K(t),r=!1,i()}}}function at(n){let e,t,l=`<div class="w-[100px] h-[76px] align-middle text-5xl leading-[1.65]">➕</div>
    New Attempt`,r,i,a,o=ne(n[0]??[]),s=[];for(let u=0;u<o.length;u+=1)s[u]=Te(De(n,o,u));const c=u=>W(s[u],1,1,()=>{s[u]=null});return{c(){for(let u=0;u<s.length;u+=1)s[u].c();e=Q(),t=T("div"),t.innerHTML=l,this.h()},l(u){for(let h=0;h<s.length;h+=1)s[h].l(u);e=z(u),t=M(u,"DIV",{class:!0,"data-svelte-h":!0}),fe(t)!=="svelte-59ttd9"&&(t.innerHTML=l),this.h()},h(){w(t,"class","text-center bg-gray-50 rounded-md w-[100px]")},m(u,h){for(let v=0;v<s.length;v+=1)s[v]&&s[v].m(u,h);D(u,e,h),D(u,t,h),r=!0,i||(a=B(t,"click",n[2]),i=!0)},p(u,[h]){if(h&1){o=ne(u[0]??[]);let v;for(v=0;v<o.length;v+=1){const C=De(u,o,v);s[v]?(s[v].p(C,h),P(s[v],1)):(s[v]=Te(C),s[v].c(),P(s[v],1),s[v].m(e.parentNode,e))}for(Fe(),v=o.length;v<s.length;v+=1)c(v);Oe()}},i(u){if(!r){for(let h=0;h<o.length;h+=1)P(s[h]);r=!0}},o(u){s=s.filter(Boolean);for(let h=0;h<s.length;h+=1)W(s[h]);r=!1},d(u){u&&(g(e),g(t)),ce(s,u),i=!1,a()}}}function it(n,e,t){let l,{problemId:r}=e;const i=qe(()=>R.files.get(r).then(s=>s.attempts));Y(n,i,s=>t(0,l=s));function a(){R.files.update(r,s=>{re("?attempt="+s.attempts.push(R.newBlankAttempt()))})}const o=s=>re("?attempt="+(s+1));return n.$$set=s=>{"problemId"in s&&t(3,r=s.problemId)},[l,i,a,r,o]}class ut extends ee{constructor(e){super(),te(this,e,it,at,$,{problemId:3})}}function ft(n){let e,t,l;return{c(){e=T("canvas"),this.h()},l(r){e=M(r,"CANVAS",{class:!0}),S(e).forEach(g),this.h()},h(){w(e,"class","fixed left-0 top-[2em]")},m(r,i){D(r,e,i),n[3](e),t||(l=B(e,"mousedown",n[1]),t=!0)},p:H,i:H,o:H,d(r){r&&g(e),n[3](null),t=!1,l()}}}function ct(n,e,t){let{problemId:l}=e,r,i;function a(s){setTimeout(()=>{i.dragStart(s)})}function o(s){ie[s?"unshift":"push"](()=>{r=s,t(0,r),t(2,l)})}return n.$$set=s=>{"problemId"in s&&t(2,l=s.problemId)},n.$$.update=()=>{n.$$.dirty&5&&R.files.get(l).then(s=>{s!=null&&s.question&&(t(0,r.width=s.question.width,r),t(0,r.height=s.question.height,r),r.getContext("2d").putImageData(s.question,0,0))})},[r,a,l,o]}class ht extends ee{constructor(e){super(),te(this,e,ct,ft,$,{problemId:2})}}function Me(n,e,t){const l=n.slice();return l[8]=e[t],l}function Ae(n){let e,t=n[8]+"",l;return{c(){e=Z("/"),l=Z(t)},l(r){e=x(r,"/"),l=x(r,t)},m(r,i){D(r,e,i),D(r,l,i)},p(r,i){i&2&&t!==(t=r[8]+"")&&me(l,t)},d(r){r&&(g(e),g(l))}}}function mt(n){let e,t,l,r,i,a,o,s,c,u,h,v,C,E,I,p,k,m,b,f,q;t=new ht({props:{problemId:n[0]}}),r=new et({props:{selectedTool:n[3],problemId:n[0],attemptId:n[2]}});let F=ne(n[1].params.path.split("/")),L=[];for(let _=0;_<F.length;_+=1)L[_]=Ae(Me(n,F,_));return E=new st({props:{problemId:n[0],parentFolder:n[1].params.path.split("/").at(-1)}}),k=new Ze({props:{selected:n[3]}}),f=new ut({props:{problemId:n[0]}}),{c(){e=Q(),X(t.$$.fragment),l=Q(),X(r.$$.fragment),i=Q(),a=T("div"),o=T("div"),s=T("a"),c=Z("🏠"),h=Q();for(let _=0;_<L.length;_+=1)L[_].c();v=Q(),C=T("div"),X(E.$$.fragment),I=Q(),p=T("div"),X(k.$$.fragment),m=Q(),b=T("div"),X(f.$$.fragment),this.h()},l(_){He("svelte-pyemm1",document.head).forEach(g),e=z(_),G(t.$$.fragment,_),l=z(_),G(r.$$.fragment,_),i=z(_),a=M(_,"DIV",{id:!0,class:!0});var d=S(a);o=M(d,"DIV",{id:!0,class:!0});var N=S(o);s=M(N,"A",{href:!0});var U=S(s);c=x(U,"🏠"),U.forEach(g),h=z(N);for(let de=0;de<L.length;de+=1)L[de].l(N);N.forEach(g),v=z(d),C=M(d,"DIV",{id:!0,class:!0});var oe=S(C);G(E.$$.fragment,oe),oe.forEach(g),I=z(d),p=M(d,"DIV",{id:!0,class:!0});var O=S(p);G(k.$$.fragment,O),O.forEach(g),m=z(d),b=M(d,"DIV",{id:!0,class:!0});var ae=S(b);G(f.$$.fragment,ae),ae.forEach(g),d.forEach(g),this.h()},h(){document.title="MathMan Draw",w(s,"href",u=se.join("/",le,n[1].params.path)),w(o,"id","breadcrumbs"),w(o,"class","svelte-1edzgew"),w(C,"id","question-management"),w(C,"class","text-right svelte-1edzgew"),w(p,"id","tools-container"),w(p,"class","svelte-1edzgew"),w(b,"id","attempts-container"),w(b,"class","flex flex-col p-3 gap-3 svelte-1edzgew"),w(a,"id","grid"),w(a,"class","svelte-1edzgew")},m(_,y){D(_,e,y),J(t,_,y),D(_,l,y),J(r,_,y),D(_,i,y),D(_,a,y),A(a,o),A(o,s),A(s,c),A(o,h);for(let d=0;d<L.length;d+=1)L[d]&&L[d].m(o,null);A(a,v),A(a,C),J(E,C,null),A(a,I),A(a,p),J(k,p,null),A(a,m),A(a,b),J(f,b,null),q=!0},p(_,[y]){const d={};y&1&&(d.problemId=_[0]),t.$set(d);const N={};if(y&1&&(N.problemId=_[0]),y&4&&(N.attemptId=_[2]),r.$set(N),(!q||y&2&&u!==(u=se.join("/",le,_[1].params.path)))&&w(s,"href",u),y&2){F=ne(_[1].params.path.split("/"));let O;for(O=0;O<F.length;O+=1){const ae=Me(_,F,O);L[O]?L[O].p(ae,y):(L[O]=Ae(ae),L[O].c(),L[O].m(o,null))}for(;O<L.length;O+=1)L[O].d(1);L.length=F.length}const U={};y&1&&(U.problemId=_[0]),y&2&&(U.parentFolder=_[1].params.path.split("/").at(-1)),E.$set(U);const oe={};y&1&&(oe.problemId=_[0]),f.$set(oe)},i(_){q||(P(t.$$.fragment,_),P(r.$$.fragment,_),P(E.$$.fragment,_),P(k.$$.fragment,_),P(f.$$.fragment,_),q=!0)},o(_){W(t.$$.fragment,_),W(r.$$.fragment,_),W(E.$$.fragment,_),W(k.$$.fragment,_),W(f.$$.fragment,_),q=!1},d(_){_&&(g(e),g(l),g(i),g(a)),K(t,_),K(r,_),ce(L,_),K(E),K(k),K(f)}}}function dt(n,e,t){let l,r,i;Y(n,ue,h=>t(1,r=h));const a=ve(V.None),o=ve(!1);Ne("eraserEnabled",o);const s=we(ue,h=>Number.parseInt(h.params.problemId));Y(n,s,h=>t(0,l=h));const c=we(ue,h=>Number.parseInt(h.url.searchParams.get("attempt")??"1")-1);Y(n,c,h=>t(2,i=h));function u(h){if(h){const v=h.route.join("/");"/"+r.params.path!==v&&re(se.join("/",le,v,r.params.problemId))}else re(se.join("/",le,r.params.path))}return n.$$.update=()=>{n.$$.dirty&1&&typeof window<"u"&&R.files.get(l).then(u)},[l,r,i,a,s,c]}class It extends ee{constructor(e){super(),te(this,e,dt,mt,$,{})}}export{It as component};
