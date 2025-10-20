/* 
*************************************************************************************
    MODO USO GET PARA LISTAR TODOS LOS ARTICULOS: NPM RUN START GET PRODUCTOS
    MODO USO GET PARA LISTAR 1 ARTICULO: NPM RUN START GET PRODUCTOS {NUMERO ID}

    MODO USO POST: NPM RUN START POST PRODUCTO {TITULO} {PRECIO} {CATEGORIA}

    MODO USO DELETE: NPM RUN START DELETE PRODUCTO {NUMERO ID}
*************************************************************************************
*/


const [, , metodo, datos] = process.argv
let metodo1 = metodo.toUpperCase()
console.log(process.argv)

if (metodo1 == 'GET'){
    const [, , , , id=null] = process.argv

    if (id!=null){
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => console.log(data));
        console.log('estoy dentro del id')

    }else{
        console.log('Listado completo de productos')
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data));   
    }
}

if (metodo1 == 'POST'){
        const [, , , ,titulo=null, precio=null, categoria=null] = process.argv
        const product = { title: titulo, price: precio, category: categoria };
        fetch(`https://fakestoreapi.com/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => console.log(`Informacion agregada de ${data.title} `, data));
}


if (metodo1 == 'DELETE'){
     const [, , ,id=null] = process.argv

    fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(`Se borró el articulo: ${data.title}`, data));
}

