const CACHE='visual-slash-v0.6.1';
const ASSETS=['./','./index.html','./style.css?v=0.6.1','./app.js?v=0.6.1','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png','./icons/favicon-32.png','./icons/icon-192.svg','./icons/icon-512.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin)return;
  e.respondWith((async()=>{
    try{
      const fresh=await fetch(e.request,{cache:'no-store'});
      if(fresh&&fresh.ok){
        const c=await caches.open(CACHE);
        c.put(e.request,fresh.clone());
      }
      return fresh;
    }catch(err){
      return (await caches.match(e.request)) || (e.request.mode==='navigate' ? await caches.match('./index.html') : Response.error());
    }
  })());
});
