// CRUD CON localStorage
const nombreDB = 'agenda';
// Recibe un objeto contacto y lo guarda
const guardarContacto = (contacto) => {
    const lista = leerContactos(); // Primero leo lo que hay
    lista.push( contacto );
    localStorage.setItem( nombreDB, JSON.stringify( lista ) );
}
// Retorna un array de contactos
const leerContactos = () => {
    const lista = JSON.parse( localStorage.getItem(nombreDB) );
    return lista ? lista : [];
}
// Recibe el ID y los datos para actualizar
const actualizarContacto = (id, contacto) => {

}
// Recibe el ID y elimina el contactos
const elimiarContacto = (id) =>{

}
