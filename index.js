
const [, , metodo, datos, id=null, titulo=null, precio=null, categoria=null] = process.argv
let metodo1 = metodo.toUpperCase()
console.log(process.argv)

if (metodo1 == 'GET'){
    
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

        const product = { title: titulo, price: precio, category: categoria };
        fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => console.log(`Informacion agregada de ${data.title} `, data));
}


if (metodo1 == 'DELETE'){
    fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(`Se borró el articulo: ${data.title}`, data));
}

