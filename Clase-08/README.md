# Clase 08 - Consumo de API, Fetch del tipo GET

🎯 Temas de la clase
- JavaScript asincróno
- Promesas
- Solicitudes HTTP¨
- Fetch del tipo GET
- Asyn Await
- API. Consumo
- Renderizado de un JSON


💻 Códigos

``` js
    const endPoint = 'https://dummyjson.com/products';
    fetch(endPoint).then(  resp => resp.json())
    .then ( respJSON => {
        const products = respJSON.products;
        console.log(products)
    }).catch ( error => {
        console.error(error);
    })
```