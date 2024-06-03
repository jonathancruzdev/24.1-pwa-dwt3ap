console.log('Hola v3 desde el SW 👋');
const cacheNombre = 'cache-v2';
const archivosCache = [
    '/',
    'index.html',
    'app.js',
    'https://cdn.jsdelivr.net/npm/sweetalert2@11',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://fonts.googleapis.com/css2?family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap',
    'https://fonts.gstatic.com/s/ubuntusans/v2/co3VmWd6mSRtB7_9UaLWwJnCq5ALePfPu1tPcW2d6TaG.woff2',
    'style.css',
    'images/css.png',
    'images/html.png',
    'images/js.png',
    'README.md'
]


// Se ejecuta una sola vez
self.addEventListener('install', (e)=>{
    console.log('SW: Install');
    // Abrimos el cache o lo creamos
    const cache = caches.open( cacheNombre ).then( cache => {
        // Guardamos los archivos necesarios para que la app funcione sin conexion a internet
        cache.addAll( archivosCache);
    })

    // Hacemos que se espere hasta que la promesa termine
    e.waitUntil( cache );
})

// Cuando se instala se activa
self.addEventListener('activate', ()=>{
    console.log('SW: Activado');
})

// SOLO CACHÉ
// Evento Fetch -> Respondemos con lo que está en el cache
/*
self.addEventListener('fetch', (evento) => {
    const respCache = caches.match( evento.request )
    console.log(respCache);
    evento.respondWith( respCache );
})
*/
// PRIMERO CACHÉ Y SI FALLA BUSCAR EN LA RED
self.addEventListener('fetch', (evento) => {
    const request = evento.request;
    const respCache = caches.match( request ).then( res => {
        if( res ) { // Si el archivo del cache existe
            return res
        } else { // Buscamos en la Red
            fetch( request ).then( resp => {
                return resp
            })
        }
    })
    

    evento.respondWith( respCache );
})