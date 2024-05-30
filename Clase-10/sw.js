console.log('Hola v3 desde el SW 👋');

// Se ejecuta una sola vez
self.addEventListener('install', ()=>{
    console.log('SW: Install');
})

// Cuando se instala se activa
self.addEventListener('activate', ()=>{
    console.log('SW: Activado');
})

// Evento Fetch -> cada request al Servidor
self.addEventListener('fetch', (evento) => {
    const url = evento.request.url;
    console.log(url);
    // Responde con: 
    evento.respondWith(
        // Modificamos la respuesta si es que no existe la imagen
        fetch( url).then( resp => {
            if( resp.status == 404 ) {
                return fetch('images/js.png');
            } else {
                return resp;
            }
        })
    )
})