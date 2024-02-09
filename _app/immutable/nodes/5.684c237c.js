import{s as ee,n as W,f as ue,e as z,m as Ue,k as Ae,o as qe,j as Se,b as ie,p as He,r as We}from"../chunks/scheduler.d208cd37.js";import{S as te,i as ne,s as O,g as N,c as R,h as A,C as ae,k as v,l as Q,a as T,A as F,D as Le,f as b,j as V,x as q,r as X,m as x,u as J,n as $,v as K,d as j,t as Y,w as Z,E as Pe,F as _e,o as fe,y as Qe,G as he,H as Be,p as ze,b as Fe,B as je,z as be}from"../chunks/index.c95bd50b.js";import{e as le,u as Ve,d as Ye,o as Ge}from"../chunks/each.a4cefe4d.js";import{j as Xe,k as de,w as we}from"../chunks/singletons.f16c2967.js";import{a as pe,d as G,u as Oe,s as Je,c as Re,D as Ke,b as ge}from"../chunks/index.351585a2.js";import{p as re}from"../chunks/stores.d6d6cca1.js";var L=(n=>(n[n.Draw=0]="Draw",n[n.Correct=1]="Correct",n[n.Question=2]="Question",n[n.None=3]="None",n[n.Select=4]="Select",n))(L||{});const Ze=""+new URL("../assets/eraser.0e084288.png",import.meta.url).href;function ve(n){let e,t="Show Solution";return{c(){e=N("button"),e.textContent=t,this.h()},l(s){e=A(s,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),ae(e)!=="svelte-on8fyx"&&(e.textContent=t),this.h()},h(){v(e,"class","border text-center"),Q(e,"position","fixed"),Q(e,"left",n[1][0]+"px"),Q(e,"top",n[1][1]+"px"),Q(e,"width",n[2][0]-n[1][0]+"px"),Q(e,"height",n[2][1]-n[1][1]+"px")},m(s,r){T(s,e,r)},p(s,r){r&2&&Q(e,"left",s[1][0]+"px"),r&2&&Q(e,"top",s[1][1]+"px"),r&6&&Q(e,"width",s[2][0]-s[1][0]+"px"),r&6&&Q(e,"height",s[2][1]-s[1][1]+"px")},d(s){s&&b(e)}}}function xe(n){let e,t,s='<div style="background-color: green">✅</div>',r,i,a=n[1][1]&&ve(n);return{c(){a&&a.c(),e=O(),t=N("div"),t.innerHTML=s,this.h()},l(o){a&&a.l(o),e=R(o),t=A(o,"DIV",{class:!0,"data-svelte-h":!0}),ae(t)!=="svelte-aiv1v7"&&(t.innerHTML=s),this.h()},h(){v(t,"class","tool"),Q(t,"height",n[0]?"100%":"30px")},m(o,l){a&&a.m(o,l),T(o,e,l),T(o,t,l),r||(i=F(t,"pointerdown",Le(n[8])),r=!0)},p(o,[l]){o[1][1]?a?a.p(o,l):(a=ve(o),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),l&1&&Q(t,"height",o[0]?"100%":"30px")},i:W,o:W,d(o){o&&(b(e),b(t)),a&&a.d(o),r=!1,i()}}}function $e(n,e,t){let s;const r=L.Select;let i=!1,a=!1,o=[],l=[],u,d,p=ue("selection");z(n,p,g=>t(7,s=g)),window.addEventListener("pointerdown",g=>{i&&(a=!0,t(5,o=t(6,l=[g.x,g.y])))}),window.addEventListener("pointermove",g=>{a&&t(6,l=[g.x,g.y])}),window.addEventListener("pointerup",()=>{a=!1});const m=()=>p.set(i?L.None:r);return n.$$.update=()=>{n.$$.dirty&128&&t(0,i=s===r),n.$$.dirty&96&&(t(1,u=[Math.min(o[0],l[0]),Math.min(o[1],l[1])]),t(2,d=[Math.max(o[0],l[0]),Math.max(o[1],l[1])]))},[i,u,d,r,p,o,l,s,m]}class et extends te{constructor(e){super(),ne(this,e,$e,xe,ee,{})}}const tt=""+new URL("../assets/marker.c9b3b178.png",import.meta.url).href;function nt(n){let e,t,s,r,i;return{c(){e=N("div"),t=N("img"),this.h()},l(a){e=A(a,"DIV",{class:!0});var o=V(e);t=A(o,"IMG",{style:!0,src:!0,title:!0,draggable:!0}),o.forEach(b),this.h()},h(){Q(t,"filter",n[1]),Ue(t.src,s=tt)||v(t,"src",s),v(t,"title",n[2]),v(t,"draggable","false"),v(e,"class","tool"),Q(e,"height",n[3]?"100%":"30px")},m(a,o){T(a,e,o),q(e,t),r||(i=F(e,"pointerdown",Le(n[6])),r=!0)},p(a,[o]){o&2&&Q(t,"filter",a[1]),o&4&&v(t,"title",a[2]),o&8&&Q(e,"height",a[3]?"100%":"30px")},i:W,o:W,d(a){a&&b(e),r=!1,i()}}}function st(n,e,t){let s,{tool:r}=e,{filter:i=""}=e,{title:a}=e,o=ue("selection");z(n,o,d=>t(5,s=d));let l=!1;const u=()=>o.set(l?L.None:r);return n.$$set=d=>{"tool"in d&&t(0,r=d.tool),"filter"in d&&t(1,i=d.filter),"title"in d&&t(2,a=d.title)},n.$$.update=()=>{n.$$.dirty&33&&t(3,l=s===r)},[r,i,a,l,o,s,u]}class me extends te{constructor(e){super(),ne(this,e,st,nt,ee,{tool:0,filter:1,title:2})}}function lt(n){let e,t,s,r,i,a,o,l,u,d,p,m,g,y,E=`<img src="${Ze}" title="Eraser" draggable="false" class="svelte-h3rgmi"/>`,S,D,U;return t=new et({}),l=new me({props:{tool:L.Draw,filter:"grayscale(1)",title:"Your work"}}),d=new me({props:{tool:L.Correct,filter:"hue-rotate(136deg)",title:"Correct"}}),m=new me({props:{tool:L.Question,title:"Question"}}),{c(){e=N("div"),X(t.$$.fragment),s=O(),r=N("a"),i=x("📷"),o=O(),X(l.$$.fragment),u=O(),X(d.$$.fragment),p=O(),X(m.$$.fragment),g=O(),y=N("div"),y.innerHTML=E,this.h()},l(_){e=A(_,"DIV",{id:!0,class:!0});var C=V(e);J(t.$$.fragment,C),s=R(C),r=A(C,"A",{href:!0});var P=V(r);i=$(P,"📷"),P.forEach(b),o=R(C),J(l.$$.fragment,C),u=R(C),J(d.$$.fragment,C),p=R(C),J(m.$$.fragment,C),g=R(C),y=A(C,"DIV",{class:!0,"data-svelte-h":!0}),ae(y)!=="svelte-19p7wft"&&(y.innerHTML=E),C.forEach(b),this.h()},h(){v(r,"href",a=pe("camera",n[1].params.problemId)),v(y,"class","tool"),Q(y,"height",n[0]?"100%":"30px"),v(e,"id","tools"),v(e,"class","svelte-h3rgmi")},m(_,C){T(_,e,C),K(t,e,null),q(e,s),q(e,r),q(r,i),q(e,o),K(l,e,null),q(e,u),K(d,e,null),q(e,p),K(m,e,null),q(e,g),q(e,y),S=!0,D||(U=F(y,"click",n[3]),D=!0)},p(_,[C]){(!S||C&2&&a!==(a=pe("camera",_[1].params.problemId)))&&v(r,"href",a),C&1&&Q(y,"height",_[0]?"100%":"30px")},i(_){S||(j(t.$$.fragment,_),j(l.$$.fragment,_),j(d.$$.fragment,_),j(m.$$.fragment,_),S=!0)},o(_){Y(t.$$.fragment,_),Y(l.$$.fragment,_),Y(d.$$.fragment,_),Y(m.$$.fragment,_),S=!1},d(_){_&&b(e),Z(t),Z(l),Z(d),Z(m),D=!1,U()}}}function rt(n,e,t){let s,r;z(n,re,l=>t(1,r=l));let{selected:i}=e;Ae("selection",i);let a=ue("eraserEnabled");z(n,a,l=>t(0,s=l));function o(l){a.set(!s)}return n.$$set=l=>{"selected"in l&&t(4,i=l.selected)},[s,r,a,o,i]}class ot extends te{constructor(e){super(),ne(this,e,rt,lt,ee,{selected:4})}}function at(n){let e,t,s,r,i,a,o;return{c(){e=N("canvas"),t=O(),s=N("canvas"),r=O(),i=N("canvas"),this.h()},l(l){e=A(l,"CANVAS",{width:!0,height:!0,class:!0}),V(e).forEach(b),t=R(l),s=A(l,"CANVAS",{width:!0,height:!0,class:!0}),V(s).forEach(b),r=R(l),i=A(l,"CANVAS",{width:!0,height:!0,class:!0}),V(i).forEach(b),this.h()},h(){v(e,"width",n[2]),v(e,"height",n[3]),v(e,"class","svelte-1rofrvo"),v(s,"width",n[2]),v(s,"height",n[3]),v(s,"class","svelte-1rofrvo"),v(i,"width",n[2]),v(i,"height",n[3]),v(i,"class","svelte-1rofrvo")},m(l,u){T(l,e,u),n[8](e),T(l,t,u),T(l,s,u),n[9](s),T(l,r,u),T(l,i,u),n[10](i),a||(o=F(i,"pointerdown",Pe(n[5])),a=!0)},p(l,[u]){u&4&&v(e,"width",l[2]),u&8&&v(e,"height",l[3]),u&4&&v(s,"width",l[2]),u&8&&v(s,"height",l[3]),u&4&&v(i,"width",l[2]),u&8&&v(i,"height",l[3])},i:W,o:W,d(l){l&&(b(e),b(t),b(s),b(r),b(i)),n[8](null),n[9](null),n[10](null),a=!1,o()}}}function it(n,e,t){let s,r=W,i=()=>(r(),r=Se(o,c=>t(13,s=c)),o),a;n.$$.on_destroy.push(()=>r());let{selectedTool:o}=e;i();let{problemId:l}=e,{attemptId:u}=e,d=0,p=0,m=!1,g=ue("eraserEnabled");z(n,g,c=>t(14,a=c));let y,E=[];function S(){typeof window>"u"||l===0||(t(2,d=window.innerWidth),t(3,p=window.innerHeight),requestAnimationFrame(async()=>{if(E[0]==null)return;const c=(await G.files.get(l)).attempts[u];E[L.Draw].putImageData(c.work,0,0),E[L.Correct].putImageData(c.error,0,0),E[L.Question].putImageData(c.questions,0,0)}))}const D=()=>{const c=[0,0,d,p];G.files.update(l,k=>{const H=k.attempts[u];H.date=new Date,H.duration=Math.floor((new Date().getTime()-y)/1e3/60),s==L.Correct&&(H.mistakeCount=1),s==L.Question&&(H.questionCount=1),H[["work","error","questions"][s]]=E[s].getImageData(...c)})},U=typeof window>"u"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches,_={[L.Draw]:U?"white":"black",[L.Correct]:"red",[L.Question]:"blue"},C=c=>{if(s>=L.None)return;const k=E[s];m=!0,k.strokeStyle=_[s],k.lineWidth=a?20:1,k.globalCompositeOperation=a?"destination-out":"source-over",k.beginPath(),k.moveTo(c.clientX,c.clientY)},P=()=>{m&&D(),m=!1},I=c=>{if(m){const k=E[s];k.lineTo(c.clientX,c.clientY),k.stroke()}};qe(()=>{window.addEventListener("resize",S),document.addEventListener("pointermove",I),document.addEventListener("pointerup",P),E.forEach(c=>c.addEventListener("touchstart",k=>k.preventDefault())),t(1,E=E.map(c=>c.getContext("2d",{willReadFrequently:!0})))});function w(c){ie[c?"unshift":"push"](()=>{E[L.Draw]=c,t(1,E)})}function h(c){ie[c?"unshift":"push"](()=>{E[L.Correct]=c,t(1,E)})}function f(c){ie[c?"unshift":"push"](()=>{E[L.Question]=c,t(1,E)})}return n.$$set=c=>{"selectedTool"in c&&i(t(0,o=c.selectedTool)),"problemId"in c&&t(6,l=c.problemId),"attemptId"in c&&t(7,u=c.attemptId)},n.$$.update=()=>{if(n.$$.dirty&194){S(),y=new Date().getTime();for(const c of E){const k=c.canvas;c.clearRect(0,0,k.width,k.height)}}},[o,E,d,p,g,C,l,u,w,h,f]}class ut extends te{constructor(e){super(),ne(this,e,it,at,ee,{selectedTool:0,problemId:6,attemptId:7})}}const oe=Xe("goto");function ke(n,e,t){const s=n.slice();return s[19]=e[t],s[21]=t,s}function Ie(n,e,t){const s=n.slice();return s[22]=e[t],s}function Ce(n){let e,t="🧠 Resolve questions",s,r;return{c(){e=N("button"),e.textContent=t},l(i){e=A(i,"BUTTON",{"data-svelte-h":!0}),ae(e)!=="svelte-ykge1i"&&(e.textContent=t)},m(i,a){T(i,e,a),s||(r=F(e,"click",n[11]),s=!0)},p:W,d(i){i&&b(e),s=!1,r()}}}function Ee(n){let e,t=n[6][n[22]]+"",s;return{c(){e=N("option"),s=x(t),this.h()},l(r){e=A(r,"OPTION",{});var i=V(e);s=$(i,t),i.forEach(b),this.h()},h(){e.__value=n[22],he(e,e.__value)},m(r,i){T(r,e,i),q(e,s)},p:W,d(r){r&&b(e)}}}function De(n,e){let t,s=e[19].name+"",r,i,a;return{key:n,first:null,c(){t=N("option"),r=x(s),this.h()},l(o){t=A(o,"OPTION",{});var l=V(t);r=$(l,s),l.forEach(b),this.h()},h(){t.__value=i=e[21],he(t,t.__value),t.selected=a=e[19].id===e[0],this.first=t},m(o,l){T(o,t,l),q(t,r)},p(o,l){e=o,l&16&&s!==(s=e[19].name+"")&&fe(r,s),l&16&&i!==(i=e[21])&&(t.__value=i,he(t,t.__value)),l&17&&a!==(a=e[19].id===e[0])&&(t.selected=a)},d(o){o&&b(t)}}}function ft(n){var I,w,h;let e,t,s=n[5]?new Date().getMonth()===5?"🏳️‍🌈":"🚩":"🏳️",r,i,a,o,l,u,d=[],p=new Map,m,g,y="➡️",E,S,D=((h=(w=(I=n[4][n[2]])==null?void 0:I.attempts)==null?void 0:w[n[1]])==null?void 0:h.questions)>0&&Ce(n),U=le(Object.keys(n[6])),_=[];for(let f=0;f<U.length;f+=1)_[f]=Ee(Ie(n,U,f));let C=le(n[4]);const P=f=>f[19].id;for(let f=0;f<C.length;f+=1){let c=ke(n,C,f),k=P(c);p.set(k,d[f]=De(k,c))}return{c(){D&&D.c(),e=O(),t=N("button"),r=x(s),a=O(),o=N("select");for(let f=0;f<_.length;f+=1)_[f].c();l=O(),u=N("select");for(let f=0;f<d.length;f+=1)d[f].c();m=O(),g=N("button"),g.textContent=y,this.h()},l(f){D&&D.l(f),e=R(f),t=A(f,"BUTTON",{title:!0});var c=V(t);r=$(c,s),c.forEach(b),a=R(f),o=A(f,"SELECT",{});var k=V(o);for(let B=0;B<_.length;B+=1)_[B].l(k);k.forEach(b),l=R(f),u=A(f,"SELECT",{});var H=V(u);for(let B=0;B<d.length;B+=1)d[B].l(H);H.forEach(b),m=R(f),g=A(f,"BUTTON",{"data-svelte-h":!0}),ae(g)!=="svelte-1wjt799"&&(g.textContent=y),this.h()},h(){v(t,"title",i=(n[5]?"un":"")+"flag for later"),n[3]===void 0&&He(()=>n[15].call(o))},m(f,c){D&&D.m(f,c),T(f,e,c),T(f,t,c),q(t,r),T(f,a,c),T(f,o,c);for(let k=0;k<_.length;k+=1)_[k]&&_[k].m(o,null);_e(o,n[3],!0),T(f,l,c),T(f,u,c);for(let k=0;k<d.length;k+=1)d[k]&&d[k].m(u,null);T(f,m,c),T(f,g,c),E||(S=[F(t,"click",n[9]),F(o,"change",n[15]),F(u,"change",n[7]),F(g,"click",n[8])],E=!0)},p(f,[c]){var k,H,B;if(((B=(H=(k=f[4][f[2]])==null?void 0:k.attempts)==null?void 0:H[f[1]])==null?void 0:B.questions)>0?D?D.p(f,c):(D=Ce(f),D.c(),D.m(e.parentNode,e)):D&&(D.d(1),D=null),c&32&&s!==(s=f[5]?new Date().getMonth()===5?"🏳️‍🌈":"🚩":"🏳️")&&fe(r,s),c&32&&i!==(i=(f[5]?"un":"")+"flag for later")&&v(t,"title",i),c&64){U=le(Object.keys(f[6]));let M;for(M=0;M<U.length;M+=1){const se=Ie(f,U,M);_[M]?_[M].p(se,c):(_[M]=Ee(se),_[M].c(),_[M].m(o,null))}for(;M<_.length;M+=1)_[M].d(1);_.length=U.length}c&72&&_e(o,f[3]),c&17&&(C=le(f[4]),d=Ve(d,c,P,1,f,C,p,u,Ye,De,null,ke))},i:W,o:W,d(f){f&&(b(e),b(t),b(a),b(o),b(l),b(u),b(m),b(g)),D&&D.d(f),Qe(_,f);for(let c=0;c<d.length;c+=1)d[c].d();E=!1,We(S)}}}function ct(n,e,t){let s,r;z(n,re,I=>t(14,r=I));var i=(I=>(I.Work="Work",I.Mistakes="Mistakes",I.Questions="Questions",I))(i||{});let{problemRoute:a}=e,{problemId:o}=e,l=-1,u=0,d=r.url.searchParams.get("studyMode")??"Work",p=!1,m;function g(I){t(2,u=Number.parseInt(I.target.value)),t(1,l=-1),S()}function y(){return _[u].attempts.findIndex((I,w)=>I.questions>0&&w>l)}function E(){const I=l;if((d!=="Questions"||y()===-1)&&(t(2,u++,u),t(1,l=-1)),u>=_.length)if(d==="Work"){const w=Array.from(m.matchAll(/\d+/g)).at(-1);let h;w!=null&&(h=m.substring(0,w.index)+(Number.parseInt(w[0])+1)+m.substring(w.index+w[0].length)),G.newFile({basePath:r.params.path,route:h}).then(f=>{f>=0&&oe(String(f))})}else{alert("Hooray! You are done!"),t(2,u--,u),t(1,l=I);return}S()}function S(){t(1,l=d=="Questions"?y():_[u].attempts.length-1)}function D(){t(5,p=!p),G.files.update(o,{flagged:p})}const U=Oe(()=>G.files.where("route").startsWith(r.params.path).toArray().then(I=>I.map(w=>({id:w.id,route:w.route,name:w.name,flagged:w.flagged,attempts:w.attempts.map(h=>({questions:h.questionCount,mistakes:h.mistakeCount}))}))));z(n,U,I=>t(13,s=I));let _=[];function C(){G.files.update(o,I=>{I.attempts[l].questionCount=0}),E()}function P(){d=Be(this),t(3,d),t(6,i)}return n.$$set=I=>{"problemRoute"in I&&t(12,a=I.problemRoute),"problemId"in I&&t(0,o=I.problemId)},n.$$.update=()=>{var I;if(n.$$.dirty&16384&&t(1,l=r.data.attemptIdx),n.$$.dirty&12296){const w=s??[];switch(d){case"Work":t(4,_=w.filter(h=>h.route===a).sort((h,f)=>Je(h.name,f.name)));break;case"Mistakes":t(4,_=w.filter(h=>h.attempts.at(-1).mistakes>0||h.flagged));break;case"Questions":t(4,_=w.filter(h=>h.attempts.some(f=>f.questions>0)));break}}if(n.$$.dirty&17&&t(2,u=Math.max(0,_.findIndex(w=>w.id===o))),n.$$.dirty&30){const w=(I=_[u])==null?void 0:I.id;w&&oe(String(w)+Re({studyMode:d,attempt:String(l+1)}))}n.$$.dirty&1&&G.files.get(o).then(w=>{t(5,p=(w==null?void 0:w.flagged)??!1),m=(w==null?void 0:w.name)??""})},[o,l,u,d,_,p,i,g,E,D,U,C,a,s,r,P]}class mt extends te{constructor(e){super(),ne(this,e,ct,ft,ee,{problemRoute:12,problemId:0})}}function ht(n){let e,t,s,r,i=n[0]+1+"",a;return{c(){e=N("div"),t=N("canvas"),r=x(`
    Attempt `),a=x(i),this.h()},l(o){e=A(o,"DIV",{class:!0});var l=V(e);t=A(l,"CANVAS",{width:!0,height:!0}),V(t).forEach(b),r=$(l,`
    Attempt `),a=$(l,i),l.forEach(b),this.h()},h(){v(t,"width",n[1]),v(t,"height",s=n[1]-24),v(e,"class","text-center bg-gray-50"),Q(e,"width",n[1]+"px")},m(o,l){T(o,e,l),q(e,t),n[4](t),q(e,r),q(e,a)},p(o,[l]){l&2&&v(t,"width",o[1]),l&2&&s!==(s=o[1]-24)&&v(t,"height",s),l&1&&i!==(i=o[0]+1+"")&&fe(a,i),l&2&&Q(e,"width",o[1]+"px")},i:W,o:W,d(o){o&&b(e),n[4](null)}}}function dt(n,e,t){let{attempt:s}=e,{idx:r}=e,{size:i=100}=e,a;function o(u,d){const p=document.createElement("canvas");p.width=d[0].width,p.height=d[0].height,u.scale(i/p.width,(i-24)/p.height);for(const m of d)p.getContext("2d").putImageData(m,0,0),u.drawImage(p,0,0)}qe(async()=>{const u=a.getContext("2d");o(u,[s.work,s.error,s.questions])});function l(u){ie[u?"unshift":"push"](()=>{a=u,t(2,a)})}return n.$$set=u=>{"attempt"in u&&t(3,s=u.attempt),"idx"in u&&t(0,r=u.idx),"size"in u&&t(1,i=u.size)},[r,i,a,s,l]}class pt extends te{constructor(e){super(),ne(this,e,dt,ht,ee,{attempt:3,idx:0,size:1})}}function Te(n,e,t){const s=n.slice();return s[7]=e[t],s[9]=t,s}function ye(n,e){let t,s,r,i,a;s=new pt({props:{attempt:e[7],idx:e[9]}});function o(){return e[6](e[9])}return{key:n,first:null,c(){t=N("button"),X(s.$$.fragment),this.h()},l(l){t=A(l,"BUTTON",{class:!0});var u=V(t);J(s.$$.fragment,u),u.forEach(b),this.h()},h(){v(t,"class","rounded-md overflow-hidden"),Q(t,"outline",e[9]===e[3]?"0.25em solid #a400ff":""),this.first=t},m(l,u){T(l,t,u),K(s,t,null),r=!0,i||(a=F(t,"click",o),i=!0)},p(l,u){e=l;const d={};u&4&&(d.attempt=e[7]),u&4&&(d.idx=e[9]),s.$set(d),u&12&&Q(t,"outline",e[9]===e[3]?"0.25em solid #a400ff":"")},i(l){r||(j(s.$$.fragment,l),r=!0)},o(l){Y(s.$$.fragment,l),r=!1},d(l){l&&b(t),Z(s),i=!1,a()}}}function gt(n){let e=[],t=new Map,s,r,i=`<div class="w-[100px] h-[76px] align-middle text-5xl leading-[1.65]">➕</div>
    New Attempt`,a,o,l,u=le(n[2]??[]);const d=p=>""+p[0]+p[9];for(let p=0;p<u.length;p+=1){let m=Te(n,u,p),g=d(m);t.set(g,e[p]=ye(g,m))}return{c(){for(let p=0;p<e.length;p+=1)e[p].c();s=O(),r=N("button"),r.innerHTML=i,this.h()},l(p){for(let m=0;m<e.length;m+=1)e[m].l(p);s=R(p),r=A(p,"BUTTON",{class:!0,"data-svelte-h":!0}),ae(r)!=="svelte-1goxpwn"&&(r.innerHTML=i),this.h()},h(){v(r,"class","text-center bg-gray-50 rounded-md w-[100px]")},m(p,m){for(let g=0;g<e.length;g+=1)e[g]&&e[g].m(p,m);T(p,s,m),T(p,r,m),a=!0,o||(l=F(r,"click",n[5]),o=!0)},p(p,[m]){m&13&&(u=le(p[2]??[]),ze(),e=Ve(e,m,d,1,p,u,t,s.parentNode,Ge,ye,s,Te),Fe())},i(p){if(!a){for(let m=0;m<u.length;m+=1)j(e[m]);a=!0}},o(p){for(let m=0;m<e.length;m+=1)Y(e[m]);a=!1},d(p){p&&(b(s),b(r));for(let m=0;m<e.length;m+=1)e[m].d(p);o=!1,l()}}}function _t(n,e,t){let s,r=W,i=()=>(r(),r=Se(u,m=>t(2,s=m)),u),a;n.$$.on_destroy.push(()=>r());let{problemId:o}=e;const l=de(re,m=>m.data.attemptIdx);z(n,l,m=>t(3,a=m));let u;function d(){G.files.update(o,m=>{oe("?attempt="+m.attempts.push(Ke.newBlankAttempt()))})}const p=m=>oe(Re({attempt:String(m+1)}));return n.$$set=m=>{"problemId"in m&&t(0,o=m.problemId)},n.$$.update=()=>{n.$$.dirty&1&&i(t(1,u=Oe(()=>G.files.get(o).then(m=>m.attempts))))},[o,u,s,a,l,d,p]}class bt extends te{constructor(e){super(),ne(this,e,_t,gt,ee,{problemId:0})}}function wt(n){let e,t,s;return{c(){e=N("canvas"),this.h()},l(r){e=A(r,"CANVAS",{class:!0}),V(e).forEach(b),this.h()},h(){v(e,"class","fixed left-0 top-[2em]")},m(r,i){T(r,e,i),n[3](e),t||(s=F(e,"mousedown",n[1]),t=!0)},p:W,i:W,o:W,d(r){r&&b(e),n[3](null),t=!1,s()}}}function vt(n,e,t){let{problemId:s}=e,r,i;function a(l){setTimeout(()=>{i.dragStart(l)})}function o(l){ie[l?"unshift":"push"](()=>{r=l,t(0,r),t(2,s)})}return n.$$set=l=>{"problemId"in l&&t(2,s=l.problemId)},n.$$.update=()=>{n.$$.dirty&5&&G.files.get(s).then(l=>{l!=null&&l.question&&(t(0,r.width=l.question.width,r),t(0,r.height=l.question.height,r),r.getContext("2d").putImageData(l.question,0,0))})},[r,a,s,o]}class kt extends te{constructor(e){super(),ne(this,e,vt,wt,ee,{problemId:2})}}function Me(n,e,t){const s=n.slice();return s[10]=e[t],s}function Ne(n){let e,t=n[10]+"",s;return{c(){e=x("/"),s=x(t)},l(r){e=$(r,"/"),s=$(r,t)},m(r,i){T(r,e,i),T(r,s,i)},p(r,i){i&4&&t!==(t=r[10]+"")&&fe(s,t)},d(r){r&&(b(e),b(s))}}}function It(n){let e,t,s,r,i,a,o,l,u,d,p,m,g,y,E,S,D,U,_,C,P;t=new kt({props:{problemId:n[0]}}),r=new ut({props:{selectedTool:n[5],problemId:n[0],attemptId:n[3]}});let I=le(n[2].params.path.split("/")),w=[];for(let h=0;h<I.length;h+=1)w[h]=Ne(Me(n,I,h));return y=new mt({props:{problemId:n[0],problemRoute:n[1]}}),D=new ot({props:{selected:n[5]}}),C=new bt({props:{problemId:n[0]}}),{c(){e=O(),X(t.$$.fragment),s=O(),X(r.$$.fragment),i=O(),a=N("div"),o=N("div"),l=N("a"),u=x("🏠"),p=O();for(let h=0;h<w.length;h+=1)w[h].c();m=O(),g=N("div"),X(y.$$.fragment),E=O(),S=N("div"),X(D.$$.fragment),U=O(),_=N("div"),X(C.$$.fragment),this.h()},l(h){je("svelte-pyemm1",document.head).forEach(b),e=R(h),J(t.$$.fragment,h),s=R(h),J(r.$$.fragment,h),i=R(h),a=A(h,"DIV",{id:!0,class:!0});var c=V(a);o=A(c,"DIV",{id:!0,class:!0});var k=V(o);l=A(k,"A",{href:!0,class:!0});var H=V(l);u=$(H,"🏠"),H.forEach(b),p=R(k);for(let ce=0;ce<w.length;ce+=1)w[ce].l(k);k.forEach(b),m=R(c),g=A(c,"DIV",{id:!0,class:!0});var B=V(g);J(y.$$.fragment,B),B.forEach(b),E=R(c),S=A(c,"DIV",{id:!0,class:!0});var M=V(S);J(D.$$.fragment,M),M.forEach(b),U=R(c),_=A(c,"DIV",{id:!0,class:!0});var se=V(_);J(C.$$.fragment,se),se.forEach(b),c.forEach(b),this.h()},h(){document.title="MathMan Draw",v(l,"href",d=ge(n[2])),v(l,"class","svelte-yabuun"),v(o,"id","breadcrumbs"),v(o,"class","svelte-yabuun"),v(g,"id","question-management"),v(g,"class","text-right svelte-yabuun"),v(S,"id","tools-container"),v(S,"class","svelte-yabuun"),v(_,"id","attempts-container"),v(_,"class","flex flex-col p-3 gap-3 svelte-yabuun"),v(a,"id","grid"),v(a,"class","svelte-yabuun"),be(a,"selected",n[4]!==L.None)},m(h,f){T(h,e,f),K(t,h,f),T(h,s,f),K(r,h,f),T(h,i,f),T(h,a,f),q(a,o),q(o,l),q(l,u),q(o,p);for(let c=0;c<w.length;c+=1)w[c]&&w[c].m(o,null);q(a,m),q(a,g),K(y,g,null),q(a,E),q(a,S),K(D,S,null),q(a,U),q(a,_),K(C,_,null),P=!0},p(h,[f]){const c={};f&1&&(c.problemId=h[0]),t.$set(c);const k={};if(f&1&&(k.problemId=h[0]),f&8&&(k.attemptId=h[3]),r.$set(k),(!P||f&4&&d!==(d=ge(h[2])))&&v(l,"href",d),f&4){I=le(h[2].params.path.split("/"));let M;for(M=0;M<I.length;M+=1){const se=Me(h,I,M);w[M]?w[M].p(se,f):(w[M]=Ne(se),w[M].c(),w[M].m(o,null))}for(;M<w.length;M+=1)w[M].d(1);w.length=I.length}const H={};f&1&&(H.problemId=h[0]),f&2&&(H.problemRoute=h[1]),y.$set(H);const B={};f&1&&(B.problemId=h[0]),C.$set(B),(!P||f&16)&&be(a,"selected",h[4]!==L.None)},i(h){P||(j(t.$$.fragment,h),j(r.$$.fragment,h),j(y.$$.fragment,h),j(D.$$.fragment,h),j(C.$$.fragment,h),P=!0)},o(h){Y(t.$$.fragment,h),Y(r.$$.fragment,h),Y(y.$$.fragment,h),Y(D.$$.fragment,h),Y(C.$$.fragment,h),P=!1},d(h){h&&(b(e),b(s),b(i),b(a)),Z(t,h),Z(r,h),Qe(w,h),Z(y),Z(D),Z(C)}}}function Ct(n,e,t){let s,r,i,a;z(n,re,g=>t(2,r=g));const o=we(L.None);z(n,o,g=>t(4,a=g));const l=we(!1);Ae("eraserEnabled",l);const u=de(re,g=>g.data.problemId);z(n,u,g=>t(0,s=g));const d=de(re,g=>g.data.attemptIdx);z(n,d,g=>t(3,i=g));let p;function m(g){s!==0&&(g?(t(1,p=g.route),p.startsWith(r.params.path)||oe(pe(p,r.params.problemId))):oe(ge(r)))}return n.$$.update=()=>{n.$$.dirty&1&&G.files.get(s).then(m)},[s,p,r,i,a,o,u,d]}class At extends te{constructor(e){super(),ne(this,e,Ct,It,ee,{})}}export{At as component};
