const btnGET = document.querySelector('#btnGet');
const productos = document.querySelector('#productos');


const getProducts = () => {
    console.log('Inicio');
    const endPoint = 'https://dummyjson.com/products';
    //const endPoint = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    fetch(endPoint).then(  resp => resp.json())
    .then ( respJSON => {
        console.log(respJSON);

        const products = respJSON.products;
        console.log(products)
        renderProducts( products);
    }).catch ( error => {
        console.error(error)
        productos.innerHTML = `<div class="alert alert-danger" role="alert">
                Ocurrio un error en el servidor
            </div>`
    })
    console.log('Fin');

}

const renderProducts = (products) => {
    productos.innerHTML = '';
    products.forEach(product => {
        productos.innerHTML += // html
                        `<div class="card " style="width: 18rem;">
                                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                                <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.description}</p>
                                <a href="#" class="btn btn-primary">Ver detalles</a>
                                </div>
                        </div>`
    });
}

btnGET.addEventListener('click', getProducts);