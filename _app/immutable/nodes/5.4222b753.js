import{s as ee,n as H,f as ue,e as Z,m as Re,k as Ne,o as qe,j as Se,b as ie,p as je,r as Ue}from"../chunks/scheduler.d208cd37.js";import{S as te,i as ne,s as V,g as N,c as O,h as q,C as oe,k as w,l as R,a as D,A as B,D as Ae,f as _,j as Q,x as S,r as G,m as x,u as X,n as $,v as J,d as F,t as z,w as K,E as He,F as ge,o as fe,y as Qe,G as me,H as We,p as Pe,b as Be,B as Fe}from"../chunks/index.c95bd50b.js";import{e as le,u as Le,s as ze,a as Ve,d as Ye,o as Ge}from"../chunks/index.3b6591eb.js";import{j as Xe,w as _e,k as be}from"../chunks/singletons.70873acc.js";import{a as de,d as Y,u as Oe,D as Je,b as pe}from"../chunks/db.9f9b9749.js";import{p as ae}from"../chunks/stores.97f164fb.js";var L=(n=>(n[n.Draw=0]="Draw",n[n.Correct=1]="Correct",n[n.Question=2]="Question",n[n.None=3]="None",n[n.Select=4]="Select",n))(L||{});const Ke=""+new URL("../assets/eraser.0e084288.png",import.meta.url).href;function we(n){let e,t="Show Solution";return{c(){e=N("button"),e.textContent=t,this.h()},l(s){e=q(s,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),oe(e)!=="svelte-on8fyx"&&(e.textContent=t),this.h()},h(){w(e,"class","border text-center"),R(e,"position","fixed"),R(e,"left",n[1][0]+"px"),R(e,"top",n[1][1]+"px"),R(e,"width",n[2][0]-n[1][0]+"px"),R(e,"height",n[2][1]-n[1][1]+"px")},m(s,r){D(s,e,r)},p(s,r){r&2&&R(e,"left",s[1][0]+"px"),r&2&&R(e,"top",s[1][1]+"px"),r&6&&R(e,"width",s[2][0]-s[1][0]+"px"),r&6&&R(e,"height",s[2][1]-s[1][1]+"px")},d(s){s&&_(e)}}}function Ze(n){let e,t,s='<div style="background-color: green">✅</div>',r,a,i=n[1][1]&&we(n);return{c(){i&&i.c(),e=V(),t=N("div"),t.innerHTML=s,this.h()},l(o){i&&i.l(o),e=O(o),t=q(o,"DIV",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-aiv1v7"&&(t.innerHTML=s),this.h()},h(){w(t,"class","tool"),R(t,"height",n[0]?"100%":"30px")},m(o,l){i&&i.m(o,l),D(o,e,l),D(o,t,l),r||(a=B(t,"pointerdown",Ae(n[8])),r=!0)},p(o,[l]){o[1][1]?i?i.p(o,l):(i=we(o),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),l&1&&R(t,"height",o[0]?"100%":"30px")},i:H,o:H,d(o){o&&(_(e),_(t)),i&&i.d(o),r=!1,a()}}}function xe(n,e,t){let s;const r=L.Select;let a=!1,i=!1,o=[],l=[],u,h,p=ue("selection");Z(n,p,v=>t(7,s=v)),window.addEventListener("pointerdown",v=>{a&&(i=!0,t(5,o=t(6,l=[v.x,v.y])))}),window.addEventListener("pointermove",v=>{i&&t(6,l=[v.x,v.y])}),window.addEventListener("pointerup",()=>{i=!1});const m=()=>p.set(a?L.None:r);return n.$$.update=()=>{n.$$.dirty&128&&t(0,a=s===r),n.$$.dirty&96&&(t(1,u=[Math.min(o[0],l[0]),Math.min(o[1],l[1])]),t(2,h=[Math.max(o[0],l[0]),Math.max(o[1],l[1])]))},[a,u,h,r,p,o,l,s,m]}class $e extends te{constructor(e){super(),ne(this,e,xe,Ze,ee,{})}}const et=""+new URL("../assets/marker.c9b3b178.png",import.meta.url).href;function tt(n){let e,t,s,r,a;return{c(){e=N("div"),t=N("img"),this.h()},l(i){e=q(i,"DIV",{class:!0});var o=Q(e);t=q(o,"IMG",{style:!0,src:!0,title:!0,draggable:!0}),o.forEach(_),this.h()},h(){R(t,"filter",n[1]),Re(t.src,s=et)||w(t,"src",s),w(t,"title",n[2]),w(t,"draggable","false"),w(e,"class","tool"),R(e,"height",n[3]?"100%":"30px")},m(i,o){D(i,e,o),S(e,t),r||(a=B(e,"pointerdown",Ae(n[6])),r=!0)},p(i,[o]){o&2&&R(t,"filter",i[1]),o&4&&w(t,"title",i[2]),o&8&&R(e,"height",i[3]?"100%":"30px")},i:H,o:H,d(i){i&&_(e),r=!1,a()}}}function nt(n,e,t){let s,{tool:r}=e,{filter:a=""}=e,{title:i}=e,o=ue("selection");Z(n,o,h=>t(5,s=h));let l=!1;const u=()=>o.set(l?L.None:r);return n.$$set=h=>{"tool"in h&&t(0,r=h.tool),"filter"in h&&t(1,a=h.filter),"title"in h&&t(2,i=h.title)},n.$$.update=()=>{n.$$.dirty&33&&t(3,l=s===r)},[r,a,i,l,o,s,u]}class he extends te{constructor(e){super(),ne(this,e,nt,tt,ee,{tool:0,filter:1,title:2})}}function st(n){let e,t,s,r,a,i,o,l,u,h,p,m,v,y,T=`<img src="${Ke}" title="Eraser" draggable="false" class="svelte-h3rgmi"/>`,A,E,j;return t=new $e({}),l=new he({props:{tool:L.Draw,filter:"grayscale(1)",title:"Your work"}}),h=new he({props:{tool:L.Correct,filter:"hue-rotate(136deg)",title:"Correct"}}),m=new he({props:{tool:L.Question,title:"Question"}}),{c(){e=N("div"),G(t.$$.fragment),s=V(),r=N("a"),a=x("📷"),o=V(),G(l.$$.fragment),u=V(),G(h.$$.fragment),p=V(),G(m.$$.fragment),v=V(),y=N("div"),y.innerHTML=T,this.h()},l(g){e=q(g,"DIV",{id:!0,class:!0});var C=Q(e);X(t.$$.fragment,C),s=O(C),r=q(C,"A",{href:!0});var P=Q(r);a=$(P,"📷"),P.forEach(_),o=O(C),X(l.$$.fragment,C),u=O(C),X(h.$$.fragment,C),p=O(C),X(m.$$.fragment,C),v=O(C),y=q(C,"DIV",{class:!0,"data-svelte-h":!0}),oe(y)!=="svelte-19p7wft"&&(y.innerHTML=T),C.forEach(_),this.h()},h(){w(r,"href",i=de("camera",n[1].params.problemId)),w(y,"class","tool"),R(y,"height",n[0]?"100%":"30px"),w(e,"id","tools"),w(e,"class","svelte-h3rgmi")},m(g,C){D(g,e,C),J(t,e,null),S(e,s),S(e,r),S(r,a),S(e,o),J(l,e,null),S(e,u),J(h,e,null),S(e,p),J(m,e,null),S(e,v),S(e,y),A=!0,E||(j=B(y,"click",n[3]),E=!0)},p(g,[C]){(!A||C&2&&i!==(i=de("camera",g[1].params.problemId)))&&w(r,"href",i),C&1&&R(y,"height",g[0]?"100%":"30px")},i(g){A||(F(t.$$.fragment,g),F(l.$$.fragment,g),F(h.$$.fragment,g),F(m.$$.fragment,g),A=!0)},o(g){z(t.$$.fragment,g),z(l.$$.fragment,g),z(h.$$.fragment,g),z(m.$$.fragment,g),A=!1},d(g){g&&_(e),K(t),K(l),K(h),K(m),E=!1,j()}}}function lt(n,e,t){let s,r;Z(n,ae,l=>t(1,r=l));let{selected:a}=e;Ne("selection",a);let i=ue("eraserEnabled");Z(n,i,l=>t(0,s=l));function o(l){i.set(!s)}return n.$$set=l=>{"selected"in l&&t(4,a=l.selected)},[s,r,i,o,a]}class rt extends te{constructor(e){super(),ne(this,e,lt,st,ee,{selected:4})}}function ot(n){let e,t,s,r,a,i,o;return{c(){e=N("canvas"),t=V(),s=N("canvas"),r=V(),a=N("canvas"),this.h()},l(l){e=q(l,"CANVAS",{width:!0,height:!0,class:!0}),Q(e).forEach(_),t=O(l),s=q(l,"CANVAS",{width:!0,height:!0,class:!0}),Q(s).forEach(_),r=O(l),a=q(l,"CANVAS",{width:!0,height:!0,class:!0}),Q(a).forEach(_),this.h()},h(){w(e,"width",n[2]),w(e,"height",n[3]),w(e,"class","svelte-86e4yd"),w(s,"width",n[2]),w(s,"height",n[3]),w(s,"class","svelte-86e4yd"),w(a,"width",n[2]),w(a,"height",n[3]),w(a,"class","svelte-86e4yd")},m(l,u){D(l,e,u),n[8](e),D(l,t,u),D(l,s,u),n[9](s),D(l,r,u),D(l,a,u),n[10](a),i||(o=B(a,"pointerdown",He(n[5])),i=!0)},p(l,[u]){u&4&&w(e,"width",l[2]),u&8&&w(e,"height",l[3]),u&4&&w(s,"width",l[2]),u&8&&w(s,"height",l[3]),u&4&&w(a,"width",l[2]),u&8&&w(a,"height",l[3])},i:H,o:H,d(l){l&&(_(e),_(t),_(s),_(r),_(a)),n[8](null),n[9](null),n[10](null),i=!1,o()}}}function it(n,e,t){let s,r=H,a=()=>(r(),r=Se(o,c=>t(13,s=c)),o),i;n.$$.on_destroy.push(()=>r());let{selectedTool:o}=e;a();let{problemId:l}=e,{attemptId:u}=e,h=0,p=0,m=!1,v=ue("eraserEnabled");Z(n,v,c=>t(14,i=c));let y,T=[];function A(){typeof window>"u"||l===0||(t(2,h=window.innerWidth),t(3,p=window.innerHeight),requestAnimationFrame(async()=>{if(T[0]==null)return;const c=(await Y.files.get(l)).attempts[u];T[L.Draw].putImageData(c.work,0,0),T[L.Correct].putImageData(c.error,0,0),T[L.Question].putImageData(c.questions,0,0)}))}const E=()=>{const c=[0,0,h,p];Y.files.update(l,k=>{const U=k.attempts[u];U.date=new Date,U.duration=Math.floor((new Date().getTime()-y)/1e3/60),s==L.Correct&&(U.mistakeCount=1),s==L.Question&&(U.questionCount=1),U[["work","error","questions"][s]]=T[s].getImageData(...c)})},j=typeof window>"u"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches,g={[L.Draw]:j?"white":"black",[L.Correct]:"red",[L.Question]:"blue"},C=c=>{if(s>=L.None)return;const k=T[s];m=!0,k.strokeStyle=g[s],k.lineWidth=i?20:1,k.globalCompositeOperation=i?"destination-out":"source-over",k.beginPath(),k.moveTo(c.clientX,c.clientY)},P=()=>{m&&E(),m=!1},I=c=>{if(m){const k=T[s];k.lineTo(c.clientX,c.clientY),k.stroke()}};qe(()=>{window.addEventListener("resize",A),document.addEventListener("pointermove",I),document.addEventListener("pointerup",P),t(1,T=T.map(c=>c.getContext("2d",{willReadFrequently:!0})))});function b(c){ie[c?"unshift":"push"](()=>{T[L.Draw]=c,t(1,T)})}function d(c){ie[c?"unshift":"push"](()=>{T[L.Correct]=c,t(1,T)})}function f(c){ie[c?"unshift":"push"](()=>{T[L.Question]=c,t(1,T)})}return n.$$set=c=>{"selectedTool"in c&&a(t(0,o=c.selectedTool)),"problemId"in c&&t(6,l=c.problemId),"attemptId"in c&&t(7,u=c.attemptId)},n.$$.update=()=>{if(n.$$.dirty&194){A(),y=new Date().getTime();for(const c of T){const k=c.canvas;c.clearRect(0,0,k.width,k.height)}}},[o,T,h,p,v,C,l,u,b,d,f]}class at extends te{constructor(e){super(),ne(this,e,it,ot,ee,{selectedTool:0,problemId:6,attemptId:7})}}const re=Xe("goto");function ve(n,e,t){const s=n.slice();return s[19]=e[t],s[21]=t,s}function ke(n,e,t){const s=n.slice();return s[22]=e[t],s}function Ie(n){let e,t="🧠 Resolve questions",s,r;return{c(){e=N("button"),e.textContent=t},l(a){e=q(a,"BUTTON",{"data-svelte-h":!0}),oe(e)!=="svelte-ykge1i"&&(e.textContent=t)},m(a,i){D(a,e,i),s||(r=B(e,"click",n[11]),s=!0)},p:H,d(a){a&&_(e),s=!1,r()}}}function Ce(n){let e,t=n[6][n[22]]+"",s;return{c(){e=N("option"),s=x(t),this.h()},l(r){e=q(r,"OPTION",{});var a=Q(e);s=$(a,t),a.forEach(_),this.h()},h(){e.__value=n[22],me(e,e.__value)},m(r,a){D(r,e,a),S(e,s)},p:H,d(r){r&&_(e)}}}function Ee(n,e){let t,s=e[19].name+"",r,a,i;return{key:n,first:null,c(){t=N("option"),r=x(s),this.h()},l(o){t=q(o,"OPTION",{});var l=Q(t);r=$(l,s),l.forEach(_),this.h()},h(){t.__value=a=e[21],me(t,t.__value),t.selected=i=e[19].id===e[0],this.first=t},m(o,l){D(o,t,l),S(t,r)},p(o,l){e=o,l&16&&s!==(s=e[19].name+"")&&fe(r,s),l&16&&a!==(a=e[21])&&(t.__value=a,me(t,t.__value)),l&17&&i!==(i=e[19].id===e[0])&&(t.selected=i)},d(o){o&&_(t)}}}function ut(n){var I,b,d;let e,t,s=n[5]?new Date().getMonth()===5?"🏳️‍🌈":"🚩":"🏳️",r,a,i,o,l,u,h=[],p=new Map,m,v,y="➡️",T,A,E=((d=(b=(I=n[4][n[2]])==null?void 0:I.attempts)==null?void 0:b[n[1]])==null?void 0:d.questions)>0&&Ie(n),j=le(Object.keys(n[6])),g=[];for(let f=0;f<j.length;f+=1)g[f]=Ce(ke(n,j,f));let C=le(n[4]);const P=f=>f[19].id;for(let f=0;f<C.length;f+=1){let c=ve(n,C,f),k=P(c);p.set(k,h[f]=Ee(k,c))}return{c(){E&&E.c(),e=V(),t=N("button"),r=x(s),i=V(),o=N("select");for(let f=0;f<g.length;f+=1)g[f].c();l=V(),u=N("select");for(let f=0;f<h.length;f+=1)h[f].c();m=V(),v=N("button"),v.textContent=y,this.h()},l(f){E&&E.l(f),e=O(f),t=q(f,"BUTTON",{title:!0});var c=Q(t);r=$(c,s),c.forEach(_),i=O(f),o=q(f,"SELECT",{});var k=Q(o);for(let W=0;W<g.length;W+=1)g[W].l(k);k.forEach(_),l=O(f),u=q(f,"SELECT",{});var U=Q(u);for(let W=0;W<h.length;W+=1)h[W].l(U);U.forEach(_),m=O(f),v=q(f,"BUTTON",{"data-svelte-h":!0}),oe(v)!=="svelte-1wjt799"&&(v.textContent=y),this.h()},h(){w(t,"title",a=(n[5]?"un":"")+"flag for later"),n[3]===void 0&&je(()=>n[15].call(o))},m(f,c){E&&E.m(f,c),D(f,e,c),D(f,t,c),S(t,r),D(f,i,c),D(f,o,c);for(let k=0;k<g.length;k+=1)g[k]&&g[k].m(o,null);ge(o,n[3],!0),D(f,l,c),D(f,u,c);for(let k=0;k<h.length;k+=1)h[k]&&h[k].m(u,null);D(f,m,c),D(f,v,c),T||(A=[B(t,"click",n[9]),B(o,"change",n[15]),B(u,"change",n[7]),B(v,"click",n[8])],T=!0)},p(f,[c]){var k,U,W;if(((W=(U=(k=f[4][f[2]])==null?void 0:k.attempts)==null?void 0:U[f[1]])==null?void 0:W.questions)>0?E?E.p(f,c):(E=Ie(f),E.c(),E.m(e.parentNode,e)):E&&(E.d(1),E=null),c&32&&s!==(s=f[5]?new Date().getMonth()===5?"🏳️‍🌈":"🚩":"🏳️")&&fe(r,s),c&32&&a!==(a=(f[5]?"un":"")+"flag for later")&&w(t,"title",a),c&64){j=le(Object.keys(f[6]));let M;for(M=0;M<j.length;M+=1){const se=ke(f,j,M);g[M]?g[M].p(se,c):(g[M]=Ce(se),g[M].c(),g[M].m(o,null))}for(;M<g.length;M+=1)g[M].d(1);g.length=j.length}c&72&&ge(o,f[3]),c&17&&(C=le(f[4]),h=Le(h,c,P,1,f,C,p,u,Ye,Ee,null,ve))},i:H,o:H,d(f){f&&(_(e),_(t),_(i),_(o),_(l),_(u),_(m),_(v)),E&&E.d(f),Qe(g,f);for(let c=0;c<h.length;c+=1)h[c].d();T=!1,Ue(A)}}}function ft(n,e,t){let s,r;Z(n,ae,I=>t(14,r=I));var a=(I=>(I.Work="Work",I.Mistakes="Mistakes",I.Questions="Questions",I))(a||{});let{problemRoute:i}=e,{problemId:o}=e,l=-1,u=0,h=r.url.searchParams.get("studyMode")??"Work",p=!1,m;function v(I){t(2,u=Number.parseInt(I.target.value)),t(1,l=-1),A()}function y(){return g[u].attempts.findIndex((I,b)=>I.questions>0&&b>l)}function T(){const I=l;if((h!=="Questions"||y()===-1)&&(t(2,u++,u),t(1,l=-1)),u>=g.length)if(h==="Work"){const b=Array.from(m.matchAll(/\d+/g)).at(-1);let d;b!=null&&(d=m.substring(0,b.index)+(Number.parseInt(b[0])+1)+m.substring(b.index+b[0].length)),Y.newFile({basePath:r.params.path,route:d}).then(f=>{f>=0&&re(String(f))})}else{alert("Hooray! You are done!"),t(2,u--,u),t(1,l=I);return}A()}function A(){t(1,l=h=="Questions"?y():g[u].attempts.length-1)}function E(){t(5,p=!p),Y.files.update(o,{flagged:p})}const j=Oe(()=>Y.files.where("route").startsWith(r.params.path).toArray().then(I=>I.map(b=>({id:b.id,route:b.route,name:b.name,flagged:b.flagged,attempts:b.attempts.map(d=>({questions:d.questionCount,mistakes:d.mistakeCount}))}))));Z(n,j,I=>t(13,s=I));let g=[];function C(){Y.files.update(o,I=>{I.attempts[l].questionCount=0}),T()}function P(){h=We(this),t(3,h),t(6,a)}return n.$$set=I=>{"problemRoute"in I&&t(12,i=I.problemRoute),"problemId"in I&&t(0,o=I.problemId)},n.$$.update=()=>{var I;if(n.$$.dirty&16384&&t(1,l=r.data.attemptIdx),n.$$.dirty&12296){const b=s??[];switch(h){case"Work":t(4,g=b.filter(d=>d.route===i).sort((d,f)=>ze(d.name,f.name)));break;case"Mistakes":t(4,g=b.filter(d=>d.attempts.at(-1).mistakes>0||d.flagged));break;case"Questions":t(4,g=b.filter(d=>d.attempts.some(f=>f.questions>0)));break}}if(n.$$.dirty&17&&t(2,u=Math.max(0,g.findIndex(b=>b.id===o))),n.$$.dirty&30){const b=(I=g[u])==null?void 0:I.id;b&&re(String(b)+Ve({studyMode:h,attempt:String(l+1)}))}n.$$.dirty&1&&Y.files.get(o).then(b=>{t(5,p=(b==null?void 0:b.flagged)??!1),m=(b==null?void 0:b.name)??""})},[o,l,u,h,g,p,a,v,T,E,j,C,i,s,r,P]}class ct extends te{constructor(e){super(),ne(this,e,ft,ut,ee,{problemRoute:12,problemId:0})}}function ht(n){let e,t,s,r,a=n[0]+1+"",i;return{c(){e=N("div"),t=N("canvas"),r=x(`
    Attempt `),i=x(a),this.h()},l(o){e=q(o,"DIV",{class:!0});var l=Q(e);t=q(l,"CANVAS",{width:!0,height:!0}),Q(t).forEach(_),r=$(l,`
    Attempt `),i=$(l,a),l.forEach(_),this.h()},h(){w(t,"width",n[1]),w(t,"height",s=n[1]-24),w(e,"class","text-center bg-gray-50 rounded-md"),R(e,"width",n[1]+"px")},m(o,l){D(o,e,l),S(e,t),n[4](t),S(e,r),S(e,i)},p(o,[l]){l&2&&w(t,"width",o[1]),l&2&&s!==(s=o[1]-24)&&w(t,"height",s),l&1&&a!==(a=o[0]+1+"")&&fe(i,a),l&2&&R(e,"width",o[1]+"px")},i:H,o:H,d(o){o&&_(e),n[4](null)}}}function mt(n,e,t){let{attempt:s}=e,{idx:r}=e,{size:a=100}=e,i;function o(u,h){const p=document.createElement("canvas");p.width=h[0].width,p.height=h[0].height,u.scale(a/p.width,(a-24)/p.height);for(const m of h)p.getContext("2d").putImageData(m,0,0),u.drawImage(p,0,0)}qe(async()=>{const u=i.getContext("2d");o(u,[s.work,s.error,s.questions])});function l(u){ie[u?"unshift":"push"](()=>{i=u,t(2,i)})}return n.$$set=u=>{"attempt"in u&&t(3,s=u.attempt),"idx"in u&&t(0,r=u.idx),"size"in u&&t(1,a=u.size)},[r,a,i,s,l]}class dt extends te{constructor(e){super(),ne(this,e,mt,ht,ee,{attempt:3,idx:0,size:1})}}function De(n,e,t){const s=n.slice();return s[5]=e[t],s[7]=t,s}function Te(n,e){let t,s,r,a,i;s=new dt({props:{attempt:e[5],idx:e[7]}});function o(){return e[4](e[7])}return{key:n,first:null,c(){t=N("button"),G(s.$$.fragment),this.h()},l(l){t=q(l,"BUTTON",{});var u=Q(t);X(s.$$.fragment,u),u.forEach(_),this.h()},h(){this.first=t},m(l,u){D(l,t,u),J(s,t,null),r=!0,a||(i=B(t,"click",o),a=!0)},p(l,u){e=l;const h={};u&4&&(h.attempt=e[5]),u&4&&(h.idx=e[7]),s.$set(h)},i(l){r||(F(s.$$.fragment,l),r=!0)},o(l){z(s.$$.fragment,l),r=!1},d(l){l&&_(t),K(s),a=!1,i()}}}function pt(n){let e=[],t=new Map,s,r,a=`<div class="w-[100px] h-[76px] align-middle text-5xl leading-[1.65]">➕</div>
    New Attempt`,i,o,l,u=le(n[2]??[]);const h=p=>""+p[0]+p[7];for(let p=0;p<u.length;p+=1){let m=De(n,u,p),v=h(m);t.set(v,e[p]=Te(v,m))}return{c(){for(let p=0;p<e.length;p+=1)e[p].c();s=V(),r=N("button"),r.innerHTML=a,this.h()},l(p){for(let m=0;m<e.length;m+=1)e[m].l(p);s=O(p),r=q(p,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(r)!=="svelte-1goxpwn"&&(r.innerHTML=a),this.h()},h(){w(r,"class","text-center bg-gray-50 rounded-md w-[100px]")},m(p,m){for(let v=0;v<e.length;v+=1)e[v]&&e[v].m(p,m);D(p,s,m),D(p,r,m),i=!0,o||(l=B(r,"click",n[3]),o=!0)},p(p,[m]){m&5&&(u=le(p[2]??[]),Pe(),e=Le(e,m,h,1,p,u,t,s.parentNode,Ge,Te,s,De),Be())},i(p){if(!i){for(let m=0;m<u.length;m+=1)F(e[m]);i=!0}},o(p){for(let m=0;m<e.length;m+=1)z(e[m]);i=!1},d(p){p&&(_(s),_(r));for(let m=0;m<e.length;m+=1)e[m].d(p);o=!1,l()}}}function gt(n,e,t){let s,r=H,a=()=>(r(),r=Se(o,h=>t(2,s=h)),o);n.$$.on_destroy.push(()=>r());let{problemId:i}=e,o;function l(){Y.files.update(i,h=>{re("?attempt="+h.attempts.push(Je.newBlankAttempt()))})}const u=h=>re(Ve({attempt:String(h+1)}));return n.$$set=h=>{"problemId"in h&&t(0,i=h.problemId)},n.$$.update=()=>{n.$$.dirty&1&&a(t(1,o=Oe(()=>Y.files.get(i).then(h=>h.attempts))))},[i,o,s,l,u]}class _t extends te{constructor(e){super(),ne(this,e,gt,pt,ee,{problemId:0})}}function bt(n){let e,t,s;return{c(){e=N("canvas"),this.h()},l(r){e=q(r,"CANVAS",{class:!0}),Q(e).forEach(_),this.h()},h(){w(e,"class","fixed left-0 top-[2em]")},m(r,a){D(r,e,a),n[3](e),t||(s=B(e,"mousedown",n[1]),t=!0)},p:H,i:H,o:H,d(r){r&&_(e),n[3](null),t=!1,s()}}}function wt(n,e,t){let{problemId:s}=e,r,a;function i(l){setTimeout(()=>{a.dragStart(l)})}function o(l){ie[l?"unshift":"push"](()=>{r=l,t(0,r),t(2,s)})}return n.$$set=l=>{"problemId"in l&&t(2,s=l.problemId)},n.$$.update=()=>{n.$$.dirty&5&&Y.files.get(s).then(l=>{l!=null&&l.question&&(t(0,r.width=l.question.width,r),t(0,r.height=l.question.height,r),r.getContext("2d").putImageData(l.question,0,0))})},[r,i,s,o]}class vt extends te{constructor(e){super(),ne(this,e,wt,bt,ee,{problemId:2})}}function ye(n,e,t){const s=n.slice();return s[9]=e[t],s}function Me(n){let e,t=n[9]+"",s;return{c(){e=x("/"),s=x(t)},l(r){e=$(r,"/"),s=$(r,t)},m(r,a){D(r,e,a),D(r,s,a)},p(r,a){a&4&&t!==(t=r[9]+"")&&fe(s,t)},d(r){r&&(_(e),_(s))}}}function kt(n){let e,t,s,r,a,i,o,l,u,h,p,m,v,y,T,A,E,j,g,C,P;t=new vt({props:{problemId:n[0]}}),r=new at({props:{selectedTool:n[4],problemId:n[0],attemptId:n[3]}});let I=le(n[2].params.path.split("/")),b=[];for(let d=0;d<I.length;d+=1)b[d]=Me(ye(n,I,d));return y=new ct({props:{problemId:n[0],problemRoute:n[1]}}),E=new rt({props:{selected:n[4]}}),C=new _t({props:{problemId:n[0]}}),{c(){e=V(),G(t.$$.fragment),s=V(),G(r.$$.fragment),a=V(),i=N("div"),o=N("div"),l=N("a"),u=x("🏠"),p=V();for(let d=0;d<b.length;d+=1)b[d].c();m=V(),v=N("div"),G(y.$$.fragment),T=V(),A=N("div"),G(E.$$.fragment),j=V(),g=N("div"),G(C.$$.fragment),this.h()},l(d){Fe("svelte-pyemm1",document.head).forEach(_),e=O(d),X(t.$$.fragment,d),s=O(d),X(r.$$.fragment,d),a=O(d),i=q(d,"DIV",{id:!0,class:!0});var c=Q(i);o=q(c,"DIV",{id:!0,class:!0});var k=Q(o);l=q(k,"A",{href:!0});var U=Q(l);u=$(U,"🏠"),U.forEach(_),p=O(k);for(let ce=0;ce<b.length;ce+=1)b[ce].l(k);k.forEach(_),m=O(c),v=q(c,"DIV",{id:!0,class:!0});var W=Q(v);X(y.$$.fragment,W),W.forEach(_),T=O(c),A=q(c,"DIV",{id:!0,class:!0});var M=Q(A);X(E.$$.fragment,M),M.forEach(_),j=O(c),g=q(c,"DIV",{id:!0,class:!0});var se=Q(g);X(C.$$.fragment,se),se.forEach(_),c.forEach(_),this.h()},h(){document.title="MathMan Draw",w(l,"href",h=pe(n[2])),w(o,"id","breadcrumbs"),w(o,"class","svelte-1je8nl3"),w(v,"id","question-management"),w(v,"class","text-right svelte-1je8nl3"),w(A,"id","tools-container"),w(A,"class","svelte-1je8nl3"),w(g,"id","attempts-container"),w(g,"class","flex flex-col p-3 gap-3 svelte-1je8nl3"),w(i,"id","grid"),w(i,"class","svelte-1je8nl3")},m(d,f){D(d,e,f),J(t,d,f),D(d,s,f),J(r,d,f),D(d,a,f),D(d,i,f),S(i,o),S(o,l),S(l,u),S(o,p);for(let c=0;c<b.length;c+=1)b[c]&&b[c].m(o,null);S(i,m),S(i,v),J(y,v,null),S(i,T),S(i,A),J(E,A,null),S(i,j),S(i,g),J(C,g,null),P=!0},p(d,[f]){const c={};f&1&&(c.problemId=d[0]),t.$set(c);const k={};if(f&1&&(k.problemId=d[0]),f&8&&(k.attemptId=d[3]),r.$set(k),(!P||f&4&&h!==(h=pe(d[2])))&&w(l,"href",h),f&4){I=le(d[2].params.path.split("/"));let M;for(M=0;M<I.length;M+=1){const se=ye(d,I,M);b[M]?b[M].p(se,f):(b[M]=Me(se),b[M].c(),b[M].m(o,null))}for(;M<b.length;M+=1)b[M].d(1);b.length=I.length}const U={};f&1&&(U.problemId=d[0]),f&2&&(U.problemRoute=d[1]),y.$set(U);const W={};f&1&&(W.problemId=d[0]),C.$set(W)},i(d){P||(F(t.$$.fragment,d),F(r.$$.fragment,d),F(y.$$.fragment,d),F(E.$$.fragment,d),F(C.$$.fragment,d),P=!0)},o(d){z(t.$$.fragment,d),z(r.$$.fragment,d),z(y.$$.fragment,d),z(E.$$.fragment,d),z(C.$$.fragment,d),P=!1},d(d){d&&(_(e),_(s),_(a),_(i)),K(t,d),K(r,d),Qe(b,d),K(y),K(E),K(C)}}}function It(n,e,t){let s,r,a;Z(n,ae,m=>t(2,r=m));const i=_e(L.None),o=_e(!1);Ne("eraserEnabled",o);const l=be(ae,m=>m.data.problemId);Z(n,l,m=>t(0,s=m));const u=be(ae,m=>m.data.attemptIdx);Z(n,u,m=>t(3,a=m));let h;function p(m){s!==0&&(m?(t(1,h=m.route),h.startsWith(r.params.path)||re(de(h,r.params.problemId))):re(pe(r)))}return n.$$.update=()=>{n.$$.dirty&1&&Y.files.get(s).then(p)},[s,h,r,a,i,l,u]}class Nt extends te{constructor(e){super(),ne(this,e,It,kt,ee,{})}}export{Nt as component};
