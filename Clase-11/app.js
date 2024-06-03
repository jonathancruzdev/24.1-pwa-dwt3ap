if( 'serviceWorker' in navigator ){
    // Registro el SW
    navigator.serviceWorker.register('sw.js');
    
} else {
    alert('Tu navegador no soporta esta Web APP');
}

const btnDelete = document.querySelector('#btnDelete');
const btnSave = document.querySelector('#btnSave');
const btnRead = document.querySelector('#btnRead');
const btnGet = document.querySelector('#btnGet');
const imgJs = document.querySelector('#img-js');
btnGet.addEventListener('click', async ()=>{
    const resp = await fetch('images/css.png');
    const data = await resp.blob(); // Obtiene los datos como un objeto
    imgJs.src = URL.createObjectURL(data);

    console.log(resp)
})

const persona = {
    nombre: 'Juan',
    apellido: 'Ruiz'
}

localStorage.setItem('Datos', JSON.stringify( persona ));

const version = 'cache-v1';


// Creo o Abro un cache
caches.open(version).then( cache => {
    cache.add('README.md');
})



caches.has('mi-cache').then( resp => {
    console.log( resp)
})
// ELIMINAMOS EL CACHE
btnDelete.addEventListener( 'click', async () => {
    const resp = await caches.delete(version);
    if( resp) {
        Swal.fire({
            title: "PWA",
            text: "Se elimino el Caché",
            icon: "success"
        });
    }
})

// OBTENEMOS LA LISTA DE CACHES
caches.keys().then( keys => {
    console.log(keys);
})

// GUARDAMOS UN ARCHIVO DEL CACHE
btnSave.addEventListener( 'click', async () => {
    const cache = await caches.open( version);
    await cache.add('images/js.png');
})


// LEEMOS LOS ARCHIVOS DEL CACHE
caches.open(version).then( cache => {
    cache.match('README.md').then( archivo => {
        console.log(archivo);
    })
})

btnRead.addEventListener('click', async () => {
    const cache = await caches.open(version);
    const response = await cache.match('images/js.png');
    if ( !response){
        Swal.fire({
            title: "PWA",
            text: "No existe el archivo en el Caché",
            icon: "info"
        });
    }
    console.log(response);
})