if( 'serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js');
} else {
    renderError('Tu navegador no soporta esta Aplicación Web')
}

// Selecciono los elementos
const inputNombre = document.querySelector('#nombre');
const inputTel = document.querySelector('#tel');
const inputEmail = document.querySelector('#email');
const form = document.querySelector('form');
const listContactos = document.querySelector('#contactos');

let contactos = [];
// Funcion 1 - Leer los inputs y los pushea en array contactos
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = inputNombre.value;
    const tel = inputTel.value;
    const email = inputEmail.value;
    const id = crypto.randomUUID();
    const fecha = new Date().toLocaleDateString();

    const contacto = {
        _id: id,
        nombre,
        tel,
        email,
        fecha
    }
    contactos.push( contacto );

    inputNombre.value = '';
    inputTel.value = '';
    inputEmail.value = '';
    guardarContacto(contacto);
    renderizarContactos(contactos)
})

// Funcion 2 - Recibe un array y los renderiza los contactos
const renderizarContactos = (lista) => {
    // Limpio el contenedor
    listContactos.innerHTML = '';
    lista.forEach( (contacto, index) => {
        listContactos.innerHTML += `
        <li class="list-group-item">
            <span class="d-flex justify-content-between">
                <span>
                    <span>
                        <i class="fa-solid fa-user text-primary"></i>
                        <strong> ${ contacto.nombre }</strong>
                    </span>
                    <br>
                    <span>
                        <i class="fa-solid fa-mobile-screen text-success"></i> ${ contacto.tel}
                    </span>
                </span>

                <button id="${index}" class="btn btn-danger btn-delete" type="button">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </span>
        </li>`;
    });

    const btns = document.querySelectorAll('.btn-delete');
    btns.forEach( btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.id;
            deleteContacto(id);
        })
    });
}

// Funcion 3 - GET al JSON local y luego llama a redendericarContactos(lista)
const getContactos = async () => {
    contactos = await leerContactos();
    console.log(contactos)
    renderizarContactos(contactos);
}

 // Funcion 4 - Elimina un contacto
const deleteContacto = async ( index) =>{
    const { _id } = contactos[index]
    console.log( _id);
    elimiarContacto( _id );
    
    contactos = await leerContactos();
    renderizarContactos(contactos);
} 

const renderError = (msg) =>{
    listContactos.innerHTML = 
    `<div class="alert alert-warning" role="alert">
                ${msg}
    </div>`
}
getContactos();


