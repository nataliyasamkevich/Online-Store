if(!self.define){let s,e={};const i=(i,a)=>(i=new URL(i+".js",a).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(a,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let d={};const c=s=>i(s,n),f={module:{uri:n},exports:d,require:c};e[n]=Promise.all(a.map((s=>f[s]||c(s)))).then((s=>(r(...s),d)))}}define(["./workbox-d249b2c8"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"043e0ceb5f47ecbf8e9e.svg",revision:null},{url:"2c020668dc1fcf665bd3.svg",revision:null},{url:"assets/fonts/PPFragment-SansRegular.otf",revision:"4e20d434b4439a795d0db30b428d2dd8"},{url:"assets/fonts/PPFragment-TextRegular.otf",revision:"54ffbc7ee2c56ef8573ff51e6b65bad5"},{url:"assets/fonts/PPRadioGrotesk-Regular.otf",revision:"648b2cff80ddec8d9b7cd8022d9c1388"},{url:"assets/fonts/PPRadioGrotesk-Ultralight.otf",revision:"398ef62939b284bd41936136df91ff90"},{url:"assets/img/404-image.png",revision:"8ca4303086ba0a0737d7853a20c3e0f5"},{url:"assets/img/empty-bag-image.png",revision:"47c86341fe28ba85196ceb3627045169"},{url:"assets/img/payment-sys-ae.png",revision:"fc386c6cfeee5558af52b542379de326"},{url:"assets/img/payment-sys-belcard.png",revision:"b8637b7feed8e0a149868cc06ed002c2"},{url:"assets/img/payment-sys-mastercard.png",revision:"52f885841ed86d22d1e795643db17aa3"},{url:"assets/img/payment-sys-mir.png",revision:"b553847bf62573bdaf8b2775e39492a5"},{url:"assets/img/payment-sys-nologo.png",revision:"51cf156a35e8ec562d86fecb1761bc49"},{url:"assets/img/payment-sys-visa.png",revision:"5a1f15e9d608cfc13d052b2c7e30a943"},{url:"assets/svg/bag-empty.svg",revision:"4d22990e9cd84803f82cde3407f7af32"},{url:"assets/svg/bag-full.svg",revision:"71984f25a01234b64d69218545cf0817"},{url:"assets/svg/bottle-icon.svg",revision:"6b6b33d5f2bb9da35501b33744f70cf9"},{url:"assets/svg/checkmark.svg",revision:"a4e566d8ee009dd8ce702f73a6232b7d"},{url:"assets/svg/cross-big.svg",revision:"6c967e2b9335c87dd77f4efcec4292d7"},{url:"assets/svg/cross-small.svg",revision:"f3999e1031c9ab2b3fa4d303fcaa5529"},{url:"assets/svg/logo.svg",revision:"1d4228183527d33ab381a10b8988cbe8"},{url:"assets/svg/search-active.svg",revision:"b075df7572241ebad066fd00cd580da5"},{url:"assets/svg/search-default.svg",revision:"09b6199630226cc81e364403bc1d150c"},{url:"assets/svg/view-grid.svg",revision:"41f094afeb0a37054fe0cbdb67c4da39"},{url:"assets/svg/view-list.svg",revision:"e838287341edd6ca6fd231f91ac5b2e6"},{url:"c05275828a3abec16b49.svg",revision:null},{url:"fb047bfceae2ee1d818f.svg",revision:null},{url:"fd8db3b1f91a502713e2.svg",revision:null},{url:"index.html",revision:"a9ed622fb29d2061f78a901a970c0ddb"},{url:"main.1a31bc2b0a1f62931104.js",revision:null}],{})}));
