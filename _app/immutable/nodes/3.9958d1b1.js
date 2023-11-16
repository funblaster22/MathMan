import{s as U,n as z,r as ge,o as ve,f as we,b as le,e as ee}from"../chunks/scheduler.03df403d.js";import{S as R,i as Y,g as b,s as N,h as I,j as E,y as S,c as V,f as g,l as L,k as p,a as q,x as k,z as M,A as ie,m as te,n as ne,B as oe,o as re,d as Q,p as be,b as Ie,t as x,r as J,u as K,v as Z,w as $}from"../chunks/index.e45e0f6f.js";import{h as Ce,w as De,j as ce}from"../chunks/singletons.20a7e2a5.js";import{d as O,u as _e,n as ke}from"../chunks/newBlankAttempt.2114c9fd.js";import{p as ae}from"../chunks/stores.3eb6e1d9.js";function j(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var D=(n=>(n[n.Draw=0]="Draw",n[n.Correct=1]="Correct",n[n.Question=2]="Question",n[n.None=3]="None",n[n.Erase=4]="Erase",n))(D||{});function qe(n){let e,s,l='<img src="/marker.png" title="Your work" draggable="false"/>',r,a,d='<img src="/marker.png" title="Correct" draggable="false"/>',c,t,h='<img src="/marker.png" title="Question" draggable="false"/>',u,o,i='<img src="/eraser.png" title="Eraser" draggable="false"/>',_,v;return{c(){e=b("div"),s=b("div"),s.innerHTML=l,r=N(),a=b("div"),a.innerHTML=d,c=N(),t=b("div"),t.innerHTML=h,u=N(),o=b("div"),o.innerHTML=i,this.h()},l(y){e=I(y,"DIV",{id:!0});var C=E(e);s=I(C,"DIV",{style:!0,"data-tool":!0,"data-svelte-h":!0}),S(s)!=="svelte-s7g5ry"&&(s.innerHTML=l),r=V(C),a=I(C,"DIV",{style:!0,"data-tool":!0,"data-svelte-h":!0}),S(a)!=="svelte-ycay66"&&(a.innerHTML=d),c=V(C),t=I(C,"DIV",{style:!0,"data-tool":!0,"data-svelte-h":!0}),S(t)!=="svelte-1pok5wx"&&(t.innerHTML=h),u=V(C),o=I(C,"DIV",{style:!0,"data-tool":!0,"data-svelte-h":!0}),S(o)!=="svelte-1sq5307"&&(o.innerHTML=i),C.forEach(g),this.h()},h(){L(s,"width","30px"),L(s,"filter","grayscale(1)"),p(s,"data-tool",D.Draw),L(a,"width","30px"),L(a,"filter","hue-rotate(136deg)"),p(a,"data-tool",D.Correct),L(t,"width","30px"),p(t,"data-tool",D.Question),L(o,"width","30px"),p(o,"data-tool",D.Erase),p(e,"id","tools")},m(y,C){q(y,e,C),k(e,s),k(e,r),k(e,a),k(e,c),k(e,t),k(e,u),k(e,o),_||(v=[M(s,"click",n[0]),M(a,"click",n[0]),M(t,"click",n[0]),M(o,"click",n[0])],_=!0)},p:z,i:z,o:z,d(y){y&&g(e),_=!1,ge(v)}}}function Te(n,e,s){let{selected:l}=e;function r(a){a.stopPropagation();const d=a.currentTarget,c=d.style.height=="100%";for(const t of document.querySelectorAll("#tools > div"))t.style.height="30px";for(const t of document.querySelectorAll(".tool"))t.id="";if(c){l.set(D.None);return}l.set(Number.parseInt(d.dataset.tool)),d.style.height="100%"}return n.$$set=a=>{"selected"in a&&s(1,l=a.selected)},[r,l]}class ye extends R{constructor(e){super(),Y(this,e,Te,qe,U,{selected:1})}}function Ae(n){let e,s,l,r,a,d,c;return{c(){e=b("canvas"),s=N(),l=b("canvas"),r=N(),a=b("canvas"),this.h()},l(t){e=I(t,"CANVAS",{width:!0,height:!0,class:!0}),E(e).forEach(g),s=V(t),l=I(t,"CANVAS",{width:!0,height:!0,class:!0}),E(l).forEach(g),r=V(t),a=I(t,"CANVAS",{width:!0,height:!0,class:!0}),E(a).forEach(g),this.h()},h(){p(e,"width",n[2]),p(e,"height",n[3]),p(e,"class","svelte-1rofrvo"),p(l,"width",n[2]),p(l,"height",n[3]),p(l,"class","svelte-1rofrvo"),p(a,"width",n[2]),p(a,"height",n[3]),p(a,"class","svelte-1rofrvo")},m(t,h){q(t,e,h),n[9](e),q(t,s,h),q(t,l,h),n[10](l),q(t,r,h),q(t,a,h),n[11](a),d||(c=[M(a,"pointerdown",n[4]),M(a,"pointerup",n[5]),M(a,"pointermove",n[6])],d=!0)},p(t,[h]){h&4&&p(e,"width",t[2]),h&8&&p(e,"height",t[3]),h&4&&p(l,"width",t[2]),h&8&&p(l,"height",t[3]),h&4&&p(a,"width",t[2]),h&8&&p(a,"height",t[3])},i:z,o:z,d(t){t&&(g(e),g(s),g(l),g(r),g(a)),n[9](null),n[10](null),n[11](null),d=!1,ge(c)}}}function Ee(n,e,s){let l,r=z,a=()=>(r(),r=we(d,f=>s(13,l=f)),d);n.$$.on_destroy.push(()=>r());let{selectedTool:d}=e;a();let{problemId:c}=e,{attemptId:t}=e,h=0,u=0,o=!1,i=[];function _(){typeof window>"u"||(s(2,h=window.innerWidth),s(3,u=window.innerHeight),requestAnimationFrame(async()=>{const f=(await O.files.get(c)).attempts[t];i[D.Draw].putImageData(f.work,0,0),i[D.Correct].putImageData(f.error,0,0),i[D.Question].putImageData(f.questions,0,0)}))}function v(){const f=[0,0,h,u];O.files.update(c,w=>{w.attempts[t]={date:new Date,work:i[D.Draw].getImageData(...f),error:i[D.Correct].getImageData(...f),questions:i[D.Question].getImageData(...f),rois:w.attempts[t].rois}})}const y=typeof window>"u"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches,C={[D.Draw]:y?"white":"black",[D.Correct]:"red",[D.Question]:"blue"},F=f=>{if(l==D.None)return;const w=i[l];o=!0,w.strokeStyle=C[l],w.beginPath(),w.moveTo(f.clientX,f.clientY)},W=()=>{o=!1,v()},se=f=>{if(o){const w=i[l];w.lineTo(f.clientX,f.clientY),w.stroke()}};ve(()=>{window.onresize=_,s(1,i=i.map(f=>f.getContext("2d",{willReadFrequently:!0})))});function H(f){le[f?"unshift":"push"](()=>{i[D.Draw]=f,s(1,i)})}function T(f){le[f?"unshift":"push"](()=>{i[D.Correct]=f,s(1,i)})}function m(f){le[f?"unshift":"push"](()=>{i[D.Question]=f,s(1,i)})}return n.$$set=f=>{"selectedTool"in f&&a(s(0,d=f.selectedTool)),"problemId"in f&&s(7,c=f.problemId),"attemptId"in f&&s(8,t=f.attemptId)},n.$$.update=()=>{if(n.$$.dirty&386){_();for(const f of i){const w=f.canvas;f.clearRect(0,0,w.width,w.height)}}},[d,i,h,u,F,W,se,c,t,H,T,m]}class Ne extends R{constructor(e){super(),Y(this,e,Ee,Ae,U,{selectedTool:0,problemId:7,attemptId:8})}}const P=Ce("goto");function ue(n,e,s){const l=n.slice();return l[4]=e[s],l}function de(n){let e,s=n[4].name+"",l,r;return{c(){e=b("option"),l=te(s),this.h()},l(a){e=I(a,"OPTION",{});var d=E(e);l=ne(d,s),d.forEach(g),this.h()},h(){e.__value=r=n[4].id,oe(e,e.__value)},m(a,d){q(a,e,d),k(e,l)},p(a,d){d&1&&s!==(s=a[4].name+"")&&re(l,s),d&1&&r!==(r=a[4].id)&&(e.__value=r,oe(e,e.__value))},d(a){a&&g(e)}}}function Ve(n){let e,s="🚩",l,r,a,d,c="➡️",t,h,u=j(n[0]??[]),o=[];for(let i=0;i<u.length;i+=1)o[i]=de(ue(n,u,i));return{c(){e=b("button"),e.textContent=s,l=N(),r=b("select");for(let i=0;i<o.length;i+=1)o[i].c();a=N(),d=b("button"),d.textContent=c},l(i){e=I(i,"BUTTON",{"data-svelte-h":!0}),S(e)!=="svelte-yzpet0"&&(e.textContent=s),l=V(i),r=I(i,"SELECT",{});var _=E(r);for(let v=0;v<o.length;v+=1)o[v].l(_);_.forEach(g),a=V(i),d=I(i,"BUTTON",{"data-svelte-h":!0}),S(d)!=="svelte-q61pzu"&&(d.textContent=c)},m(i,_){q(i,e,_),q(i,l,_),q(i,r,_);for(let v=0;v<o.length;v+=1)o[v]&&o[v].m(r,null);q(i,a,_),q(i,d,_),t||(h=M(r,"change",n[1]),t=!0)},p(i,[_]){if(_&1){u=j(i[0]??[]);let v;for(v=0;v<u.length;v+=1){const y=ue(i,u,v);o[v]?o[v].p(y,_):(o[v]=de(y),o[v].c(),o[v].m(r,null))}for(;v<o.length;v+=1)o[v].d(1);o.length=u.length}},i:z,o:z,d(i){i&&(g(e),g(l),g(r),g(a),g(d)),ie(o,i),t=!1,h()}}}function Me(n,e,s){let l,{parentFolder:r}=e;function a(c){const t=c.target.value;P(t)}const d=_e(()=>O.files.where({parent:r}).toArray());return ee(n,d,c=>s(0,l=c)),n.$$set=c=>{"parentFolder"in c&&s(3,r=c.parentFolder)},[l,a,d,r]}class ze extends R{constructor(e){super(),Y(this,e,Me,Ve,U,{parentFolder:3})}}function He(n){let e,s,l,r,a=n[0]+1+"",d;return{c(){e=b("div"),s=b("canvas"),r=te(`
    Attempt `),d=te(a),this.h()},l(c){e=I(c,"DIV",{class:!0});var t=E(e);s=I(t,"CANVAS",{width:!0,height:!0}),E(s).forEach(g),r=ne(t,`
    Attempt `),d=ne(t,a),t.forEach(g),this.h()},h(){p(s,"width",n[1]),p(s,"height",l=n[1]-24),p(e,"class","text-center bg-gray-50 rounded-md"),L(e,"width",n[1]+"px")},m(c,t){q(c,e,t),k(e,s),n[4](s),k(e,r),k(e,d)},p(c,[t]){t&2&&p(s,"width",c[1]),t&2&&l!==(l=c[1]-24)&&p(s,"height",l),t&1&&a!==(a=c[0]+1+"")&&re(d,a),t&2&&L(e,"width",c[1]+"px")},i:z,o:z,d(c){c&&g(e),n[4](null)}}}function Le(n,e,s){let{attempt:l}=e,{idx:r}=e,{size:a=100}=e,d;function c(h,u){const o=document.createElement("canvas");o.width=u[0].width,o.height=u[0].height,h.scale(a/o.width,(a-24)/o.height);for(const i of u)o.getContext("2d").putImageData(i,0,0),h.drawImage(o,0,0)}ve(async()=>{const h=d.getContext("2d");c(h,[l.work,l.error,l.questions])});function t(h){le[h?"unshift":"push"](()=>{d=h,s(2,d)})}return n.$$set=h=>{"attempt"in h&&s(3,l=h.attempt),"idx"in h&&s(0,r=h.idx),"size"in h&&s(1,a=h.size)},[r,a,d,l,t]}class Se extends R{constructor(e){super(),Y(this,e,Le,He,U,{attempt:3,idx:0,size:1})}}function fe(n,e,s){const l=n.slice();return l[5]=e[s],l[7]=s,l}function he(n){let e,s,l,r,a;s=new Se({props:{attempt:n[5],idx:n[7]}});function d(){return n[4](n[7])}return{c(){e=b("div"),J(s.$$.fragment)},l(c){e=I(c,"DIV",{});var t=E(e);K(s.$$.fragment,t),t.forEach(g)},m(c,t){q(c,e,t),Z(s,e,null),l=!0,r||(a=M(e,"click",d),r=!0)},p(c,t){n=c;const h={};t&1&&(h.attempt=n[5]),s.$set(h)},i(c){l||(Q(s.$$.fragment,c),l=!0)},o(c){x(s.$$.fragment,c),l=!1},d(c){c&&g(e),$(s),r=!1,a()}}}function Qe(n){let e,s,l=`<div class="w-[100px] h-[76px] align-middle text-5xl leading-[1.65]">➕</div>
    New Attempt`,r,a,d,c=j(n[0]??[]),t=[];for(let u=0;u<c.length;u+=1)t[u]=he(fe(n,c,u));const h=u=>x(t[u],1,1,()=>{t[u]=null});return{c(){for(let u=0;u<t.length;u+=1)t[u].c();e=N(),s=b("div"),s.innerHTML=l,this.h()},l(u){for(let o=0;o<t.length;o+=1)t[o].l(u);e=V(u),s=I(u,"DIV",{class:!0,"data-svelte-h":!0}),S(s)!=="svelte-59ttd9"&&(s.innerHTML=l),this.h()},h(){p(s,"class","text-center bg-gray-50 rounded-md w-[100px]")},m(u,o){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(u,o);q(u,e,o),q(u,s,o),r=!0,a||(d=M(s,"click",n[2]),a=!0)},p(u,[o]){if(o&1){c=j(u[0]??[]);let i;for(i=0;i<c.length;i+=1){const _=fe(u,c,i);t[i]?(t[i].p(_,o),Q(t[i],1)):(t[i]=he(_),t[i].c(),Q(t[i],1),t[i].m(e.parentNode,e))}for(be(),i=c.length;i<t.length;i+=1)h(i);Ie()}},i(u){if(!r){for(let o=0;o<c.length;o+=1)Q(t[o]);r=!0}},o(u){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)x(t[o]);r=!1},d(u){u&&(g(e),g(s)),ie(t,u),a=!1,d()}}}function xe(n,e,s){let l,{problemId:r}=e;const a=_e(()=>O.files.get(r).then(t=>t.attempts));ee(n,a,t=>s(0,l=t));function d(){O.files.update(r,t=>{P("?attempt="+t.attempts.push(ke()))})}const c=t=>P("?attempt="+(t+1));return n.$$set=t=>{"problemId"in t&&s(3,r=t.problemId)},[l,a,d,r,c]}class Fe extends R{constructor(e){super(),Y(this,e,xe,Qe,U,{problemId:3})}}function me(n,e,s){const l=n.slice();return l[8]=e[s],l}function pe(n){let e,s=n[8]+"",l;return{c(){e=te("/"),l=te(s)},l(r){e=ne(r,"/"),l=ne(r,s)},m(r,a){q(r,e,a),q(r,l,a)},p(r,a){a&2&&s!==(s=r[8]+"")&&re(l,s)},d(r){r&&(g(e),g(l))}}}function Be(n){let e,s,l,r,a,d="🏠",c,t,h,u,o,i,_,v,y,C,F,W,se;e=new Ne({props:{selectedTool:n[3],problemId:n[0],attemptId:n[2]}});let H=j(n[1].params.path.split("/")),T=[];for(let m=0;m<H.length;m+=1)T[m]=pe(me(n,H,m));return u=new ze({props:{parentFolder:n[1].params.path.split("/").at(-1)}}),_=new ye({props:{selected:n[3]}}),C=new Fe({props:{problemId:n[0]}}),{c(){J(e.$$.fragment),s=N(),l=b("div"),r=b("div"),a=b("button"),a.textContent=d,c=N();for(let m=0;m<T.length;m+=1)T[m].c();t=N(),h=b("div"),J(u.$$.fragment),o=N(),i=b("div"),J(_.$$.fragment),v=N(),y=b("div"),J(C.$$.fragment),this.h()},l(m){K(e.$$.fragment,m),s=V(m),l=I(m,"DIV",{id:!0,class:!0});var f=E(l);r=I(f,"DIV",{class:!0});var w=E(r);a=I(w,"BUTTON",{"data-svelte-h":!0}),S(a)!=="svelte-1xjub06"&&(a.textContent=d),c=V(w);for(let B=0;B<T.length;B+=1)T[B].l(w);w.forEach(g),t=V(f),h=I(f,"DIV",{class:!0});var X=E(h);K(u.$$.fragment,X),X.forEach(g),o=V(f),i=I(f,"DIV",{id:!0,class:!0});var G=E(i);K(_.$$.fragment,G),G.forEach(g),v=V(f),y=I(f,"DIV",{id:!0,class:!0});var A=E(y);K(C.$$.fragment,A),A.forEach(g),f.forEach(g),this.h()},h(){p(r,"class","svelte-1quvpqz"),p(h,"class","text-right svelte-1quvpqz"),p(i,"id","tools-container"),p(i,"class","svelte-1quvpqz"),p(y,"id","attempts-container"),p(y,"class","flex flex-col p-3 gap-3 svelte-1quvpqz"),p(l,"id","grid"),p(l,"class","svelte-1quvpqz")},m(m,f){Z(e,m,f),q(m,s,f),q(m,l,f),k(l,r),k(r,a),k(r,c);for(let w=0;w<T.length;w+=1)T[w]&&T[w].m(r,null);k(l,t),k(l,h),Z(u,h,null),k(l,o),k(l,i),Z(_,i,null),k(l,v),k(l,y),Z(C,y,null),F=!0,W||(se=M(a,"click",n[6]),W=!0)},p(m,[f]){const w={};if(f&1&&(w.problemId=m[0]),f&4&&(w.attemptId=m[2]),e.$set(w),f&2){H=j(m[1].params.path.split("/"));let A;for(A=0;A<H.length;A+=1){const B=me(m,H,A);T[A]?T[A].p(B,f):(T[A]=pe(B),T[A].c(),T[A].m(r,null))}for(;A<T.length;A+=1)T[A].d(1);T.length=H.length}const X={};f&2&&(X.parentFolder=m[1].params.path.split("/").at(-1)),u.$set(X);const G={};f&1&&(G.problemId=m[0]),C.$set(G)},i(m){F||(Q(e.$$.fragment,m),Q(u.$$.fragment,m),Q(_.$$.fragment,m),Q(C.$$.fragment,m),F=!0)},o(m){x(e.$$.fragment,m),x(u.$$.fragment,m),x(_.$$.fragment,m),x(C.$$.fragment,m),F=!1},d(m){m&&(g(s),g(l)),$(e,m),ie(T,m),$(u),$(_),$(C),W=!1,se()}}}function Pe(n,e,s){let l,r,a;ee(n,ae,o=>s(1,r=o));const d=De(D.None),c=ce(ae,o=>Number.parseInt(o.params.problemId));ee(n,c,o=>s(0,l=o));const t=ce(ae,o=>Number.parseInt(o.url.searchParams.get("attempt")??"1")-1);ee(n,t,o=>s(2,a=o));function h(o){if(o){const i=o.route.slice(0,-1).join("/");"/"+r.params.path!==i&&P(i+r.params.problemId)}else P("/"+r.params.path)}const u=()=>P("..");return n.$$.update=()=>{n.$$.dirty&1&&typeof window<"u"&&O.files.get(l).then(h)},[l,r,a,d,c,t,u]}class We extends R{constructor(e){super(),Y(this,e,Pe,Be,U,{})}}export{We as component};