
let URLactual = self.location.href;
if(URLactual.toString().includes('localhost:8080')){
    self.addEventListener('install', (event)=>{
        console.log('SW: Install'); 
        const promiseCache = caches.open('Cache-v1').then((cache)=>{
             return cache.addAll(
                 [
                     '/',
                     '/index.html',
                     '/css/style.css',
                     '/js/app.js',
                     '/images/operaciones.jpg',
                     '/pages/suma.html',
                     '/pages/division.html',
                     '/pages/multiplicacion.html',
                     '/pages/resta.html',
                     'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
                     'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                 ]
             );
        });
     
        event.waitUntil(promiseCache);
     
    });
    
    
     // Only Cache
    self.addEventListener('fetch', event =>{
        const respCache = caches.match(event.request)
        event.respondWith(respCache);
    });
    
}else{
    self.addEventListener('install', (event)=>{
        console.log('SW: Install'); 
        const promiseCache = caches.open('Cache-v1').then((cache)=>{
             return cache.addAll(
                 [
                     '/AxelP4.github.io/',
                     '/AxelP4.github.io/index.html',
                     '/AxelP4.github.io/css/style.css',
                     '/AxelP4.github.io/js/app.js',
                     '/AxelP4.github.io/images/operaciones.jpg',
                     '/AxelP4.github.io/pages/suma.html',
                     '/AxelP4.github.io/pages/division.html',
                     '/AxelP4.github.io/pages/multiplicacion.html',
                     '/AxelP4.github.io/pages/resta.html',
                     'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
                     'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                 ]
             );
        });
     
        event.waitUntil(promiseCache);
     
    });
    
    
     // Only Cache
    self.addEventListener('fetch', event =>{
        const respCache = caches.match(event.request)
        event.respondWith(respCache);
    });
    
}
