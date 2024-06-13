const db = new PouchDB('agendaDB');

// CRUD CON localStorage
const nombreDB = 'agenda';
// Recibe un objeto contacto y lo guardar
const guardarContacto = async (contacto) => {
    const res = await db.put( contacto );
    console.log(res);
}
// Retorna un array de contactos
const leerContactos = async () => {
    const docs = await db.allDocs( {include_docs: true, descending: true} )
    const rows = docs.rows.map( item => item.doc );
    return rows
}
// Recibe el ID y los datos para actualizar
const actualizarContacto = async (id, contacto) => {
    const doc = await db.get( id );
    
    doc.nombre = contacto.nombre;
    doc.tel = contacto.tel;
    doc.email = contacto.email;

    await db.put( doc);

}
// Recibe el ID y elimina el contactos
const elimiarContacto = async (id) =>{
    // Obtengo el objeto
    const doc = await db.get( id );
    console.log(doc);
    await db.remove(doc);
}

