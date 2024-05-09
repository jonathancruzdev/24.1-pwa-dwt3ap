const btnGET = document.querySelector('#btnGet');
const productos = document.querySelector('#productos');

// Agrego el prefijo async
const getProducts = async () => {
    console.log('Inicio');
    try {
        const endPoint = 'https://dummyjson.com/products';
        const resp = await fetch(endPoint);
        const respJSON = await resp.json();
        const products = respJSON.products;
        console.log(products)
        renderProducts( products);
    } catch (error) {
        console.error(error)
        productos.innerHTML = `<div class="alert alert-danger" role="alert">
                Ocurrio un error en el servidor
            </div>`
    }
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