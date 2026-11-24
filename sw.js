const CACHE='hasyin-b1-trainer-v2';
const ASSETS=['./','./index.html','./icon.svg','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('hasyin-b1-trainer-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
e.respondWith((async()=>{const cache=await caches.open(CACHE);try{const res=await fetch(e.request);if(res.ok)cache.put(e.request,res.clone());return res}catch{return (await cache.match(e.request))||(await cache.match('./index.html'))||Response.error()}})())});
