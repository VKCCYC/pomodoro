if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const o=e=>i(e,a),c={module:{uri:a},exports:l,require:o};s[a]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"83eac2b84f629f9a2bbec6b0c326a2fe"},{url:"android-chrome-512x512.png",revision:"7cc1b42b10e65fcf3f2e680ae1a5d842"},{url:"apple-touch-icon.png",revision:"a5a40e9955b02f3a9c9c1574e4213d54"},{url:"assets/HomeView-e6ecef75.js",revision:null},{url:"assets/index-9389998b.css",revision:null},{url:"assets/index-cf86be7f.js",revision:null},{url:"assets/list-ba6f235e.js",revision:null},{url:"assets/ListView-1cfd68d9.css",revision:null},{url:"assets/ListView-ef2eb5d5.js",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/settings-48c6380e.js",revision:null},{url:"assets/SettingsView-65418666.js",revision:null},{url:"assets/SettingsView-cd3258b9.css",revision:null},{url:"assets/tomato-fe6b03eb.png",revision:null},{url:"assets/VInput-25c53fca.js",revision:null},{url:"assets/VInput-fe8650e4.css",revision:null},{url:"assets/VRow-ed4f40c3.js",revision:null},{url:"favicon-16x16.png",revision:"5261c938e6f0523032c0b7f37b15bde7"},{url:"favicon-32x32.png",revision:"7eafe315537793e6ac98fbd7dd21b0d2"},{url:"favicon.ico",revision:"a0db394a7a6abf19629dfff2fc3cfb30"},{url:"index.html",revision:"658be0886941742db4e8c02a37e242f7"},{url:"mstile-150x150.png",revision:"f6ca54e581d91d00d734107ee5caa5f6"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"c0cfdfbccd25234f7e09b7dec1042b65"},{url:"splashscreens/ipad_splash.png",revision:"1a5fd4a0d9063af66a978f46edb885e8"},{url:"splashscreens/ipadpro1_splash.png",revision:"b05c527e11fed153163e204e419904a8"},{url:"splashscreens/ipadpro2_splash.png",revision:"63611e8bb7120a01f472547179e8e6dd"},{url:"splashscreens/ipadpro3_splash.png",revision:"5a99f37ae157d0ae73651dd76df34752"},{url:"splashscreens/iphone5_splash.png",revision:"2f3fea0b0e4d4788e6a1178699ca8e94"},{url:"splashscreens/iphone6_splash.png",revision:"106c3a3237e946f583e967a6758dfe4d"},{url:"splashscreens/iphoneplus_splash.png",revision:"9ca93e7cb99d47a6b3284bd2e8607ff9"},{url:"splashscreens/iphonex_splash.png",revision:"b96ebe2ae46f6df9dd7d8c6c5b47e521"},{url:"splashscreens/iphonexr_splash.png",revision:"863053c7370dd853330a78c9438a380e"},{url:"splashscreens/iphonexsmax_splash.png",revision:"a9042aff4c2ba3d2b704c8632c0d454f"},{url:"./android-chrome-192x192.png",revision:"83eac2b84f629f9a2bbec6b0c326a2fe"},{url:"./android-chrome-512x512.png",revision:"7cc1b42b10e65fcf3f2e680ae1a5d842"},{url:"manifest.webmanifest",revision:"e1dccf27a1aebf9e28aeba43c837d713"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
