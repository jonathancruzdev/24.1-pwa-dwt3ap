const btnGet = document.querySelector('#btnGet');
const postsList = document.querySelector('#posts');
const form = document.querySelector('#form');
const titulo = document.querySelector('#titulo');
const detalle = document.querySelector('#detalle');

btnGet.addEventListener('click', async () => {
    try {
        const endPoint = 'https://jsonplaceholder.typicode.com/posts';
        const resp = await fetch(endPoint);
        const data = await resp.json();
        renderPosts(data);
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: "Upss",
            text: "Ocurrio un error en el servidor!",
            icon: "error"
        });
    }

})


form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = titulo.value;
    const body = detalle.value;
    const data = {
        title: title,
        body: body
    }
    const endPoint = 'https://jsonplaceholder.typicode.com/posts';
    const config = {
        method: 'POST', // método http
        headers: {
            'Content-Type': 'application/json' // Tipo de contenido que enviamos
        },        
        body: JSON.stringify(data), 
    }
    const resp = await fetch(endPoint, config);
    const dataJSON = await resp.json();
    console.log(resp);
    console.log(dataJSON)


})

// Recibe el array, lo recorre y los renderiza posteos
const renderPosts = (posts) => {
    postsList.innerHTML = '';
    posts.forEach(post => {
        postsList.innerHTML += 
        `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${ post.title}</div>
                ${post.body}
            </div>
        </li>`;
    });
}