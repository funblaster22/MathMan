if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,u)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const r=e=>l(e,n),t={module:{uri:n},exports:a,require:r};s[n]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(u(...e),a)))}}define(["./workbox-cd63daf5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.792809af.css",revision:null},{url:"_app/immutable/assets/_page.89743e8f.css",revision:null},{url:"_app/immutable/assets/_page.f0d1a3ec.css",revision:null},{url:"_app/immutable/assets/_page.fba57e51.css",revision:null},{url:"_app/immutable/assets/0.b6c6b9d1.css",revision:null},{url:"_app/immutable/assets/4.fba57e51.css",revision:null},{url:"_app/immutable/assets/5.f0d1a3ec.css",revision:null},{url:"_app/immutable/assets/6.89743e8f.css",revision:null},{url:"_app/immutable/assets/eraser.0e084288.png",revision:null},{url:"_app/immutable/assets/marker.c9b3b178.png",revision:null},{url:"_app/immutable/chunks/db.8237596a.js",revision:null},{url:"_app/immutable/chunks/each.8e1ff643.js",revision:null},{url:"_app/immutable/chunks/index.8c8d301a.js",revision:null},{url:"_app/immutable/chunks/isInt.dabd68aa.js",revision:null},{url:"_app/immutable/chunks/layout.b3802d9a.js",revision:null},{url:"_app/immutable/chunks/preload-helper.a4192956.js",revision:null},{url:"_app/immutable/chunks/scheduler.d208cd37.js",revision:null},{url:"_app/immutable/chunks/singletons.6d0299e8.js",revision:null},{url:"_app/immutable/chunks/stores.105f22f8.js",revision:null},{url:"_app/immutable/chunks/virtual_pwa-register.6ae80bf7.js",revision:null},{url:"_app/immutable/chunks/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"_app/immutable/entry/app.3136b9db.js",revision:null},{url:"_app/immutable/entry/start.9eda7567.js",revision:null},{url:"_app/immutable/nodes/0.8d9cad4a.js",revision:null},{url:"_app/immutable/nodes/1.8d99b0e9.js",revision:null},{url:"_app/immutable/nodes/2.a3d316e8.js",revision:null},{url:"_app/immutable/nodes/3.a4ad5c26.js",revision:null},{url:"_app/immutable/nodes/4.719a7034.js",revision:null},{url:"_app/immutable/nodes/5.5a3f1d4a.js",revision:null},{url:"_app/immutable/nodes/6.415947b6.js",revision:null},{url:"favicon.png",revision:"4b15f55e9e780e88f2630834db07f22c"},{url:"favicon2.png",revision:"ffc25d53de3c04fdafee28e953611740"},{url:"manifest.webmanifest",revision:"848c3804f798c96f90c297fec67b8b7b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/MathMan/")))}));
