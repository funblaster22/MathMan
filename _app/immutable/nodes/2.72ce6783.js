import{s as c,n as r,o as m}from"../chunks/scheduler.03df403d.js";import{S as d,i as p,g as u,h,y as g,a as v,f as w}from"../chunks/index.e45e0f6f.js";import"../chunks/paths.29e493d3.js";import{d as f,n as x}from"../chunks/newBlankAttempt.2114c9fd.js";function _(l){let e,n="You've reached dir!";return{c(){e=u("div"),e.textContent=n},l(t){e=h(t,"DIV",{"data-svelte-h":!0}),g(e)!=="svelte-10po6xl"&&(e.textContent=n)},m(t,o){v(t,e,o)},p:r,i:r,o:r,d(t){t&&w(e)}}}function y(l){async function e(){const t={},o=await f.files.orderBy("[route]").uniqueKeys().then(s=>s.flat(1));for(const s of o){let a=t;for(const i of s)i in a||(a[i]={}),a=a[i]}return t}function n(...t){if(t.length<1){console.error("Need at least filename");return}f.files.add({attempts:[x()],parent:t.at(-2)??"",route:["",...t.slice(0,t.length-1)],name:t.at(-1)})}return m(()=>{window.newFile=n,e().then(t=>t)}),[]}class q extends d{constructor(e){super(),p(this,e,y,_,c,{})}}export{q as component};
