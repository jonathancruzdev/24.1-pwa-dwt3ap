if( 'serviceWorker' in navigator ){
    // Registro el SW
    navigator.serviceWorker.register('sw.js');
    
} else {
    alert('Tu navegador no soporta esta Web APP');
}


const btnGet = document.querySelector('#btnGet');
const imgJs = document.querySelector('#img-js');
btnGet.addEventListener('click', async ()=>{
    const resp = await fetch('images/css.png');
    const data = await resp.blob(); // Obtiene los datos como un objeto
    imgJs.src = URL.createObjectURL(data);

    console.log(resp)
})

