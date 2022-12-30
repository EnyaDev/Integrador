const divCards = document.querySelector('.cards')
const lista = document.querySelector('#lista')
// const formUser = document.getElementById('form')
// const botonFilter = document.querySelector('#filtrar')


// const showCat = async () => {
//     const categoriesFetch = await fetch('categories.json')
//     const categoriesJson = await categoriesFetch.json()
//     categoriesJson.forEach((cat) => {
//         const option = document.createElement('option')
//         option.innerText = `${cat}`
//         lista.append(option)
//     })
// }

// const searchAll = async () => {
//     const disenosFetch = await fetch('diseno.json')
//     const disenosJson = await disenosFetch.json()
//     disenosJson.forEach((prod) => {
//         const { id, name, price, category, image } =
//             divCards.innerHTML += `
//     <div class="card">
//     <img src:"${image} class:"card-img-top">
//     <div class="card-body">
//         <h5 class="card-title">${name}</h5>
//         <p class="card-text">$${price}</p>
//         <button id="${id}" class="btn btn-primary">AGREGAR</button>
//     </div>
//     `
//     })
// }

// const searchForCat = async () => {
//     divCards.innerHTML = ''
//     const categorySelected = lista.value
//     const disenosFetch = await fetch('diseno.json')
//     const disenosJson = await disenosFetch.json()

//     const disenosFiltrados = disenosJson.filter(prod=>prod.category===categorySelected)
//     disenosFiltrados.forEach((prod) => {
//         const { id, name, price, category, image } =
//             divCards.innerHTML += `
//     <div class="card">
//     <img src:"${image} class:"card-img-top">
//     <div class="card-body">
//         <h5 class="card-title">${name}</h5>
//         <p class="card-text">$${price}</p>
//         <button id="${id}" class="btn btn-primary">AGREGAR</button>
//     </div>
//     `
//     })
// }

// searchAll()
// showCat()
// botonFiltrar.onclick = searchForCat

//     // const diseñosArray = []
//     // class NewDesign {

//     //     constructor(id, name, price, image) {
//     //         this.id = id
//     //         this.name = name
//     //         this.price = price
//     //         this.stock = stock
//     //         this.image = image
//     //     }
//     // } 

//     //DOM
//     diseñosArray.forEach((elemento) => {
//         selectDesign.append(optionDesign)
//     })

//     //funciones

//     const buscarDesign = async () => {
//         const designFetch = await fetch()
//         const designJson = await designFetch.json(disenos.json)
//         designJson.forEach(prod => {
//             const { id, name, price, image } = prod
//         })
//     }

//     // buscar elementos al DOM

//     const divProductos = document.querySelector('#divProductos')

//     diseñosArray.forEach((producto) => {
//         divCards.innerHTML += `
//     <div id="${producto.id}" class="card cardDesign">
//     <div class="card-body">
//     <h5 class="card-title">${producto.nombre}</h5>
//     <p class="card-text">$${producto.precio}</p>
//     <button id="${producto.id}" class="btn btn-primary">AGREGAR</button>
//     </div>
//     </div>

//     `
//     })


//     //carrito
//     const carrito = []

const input = document.querySelector('input');
const button = document.querySelector('button');
const prodContainer = document.querySelector('.prod-container');


//funciones
function searchProd() {
    fetch('diseno.json')
        .then(res => res.json())
        .then((data) => {
            searchAll(data)
        });
}

searchProd();

const searchAll = async () => {
    const disenosFetch = await fetch('diseno.json')
    console.log(disenosFetch);

// Si l respuesta es correcta
if(disenosFetch.status === 200) {
    const datos = await disenosFetch.json();

datos.forEach(prod => {
    console.log(prod);
});

} else if (disenosFetch.status === 404);
}

searchAll();

// function openDesign(prod) {
//     const designJson = document.createElement('diseno.json');
//     designJson.forEach(prod => {
//         const { id, name, price, image } = prod
//     })
// }

//     const buscarDesign = async () => {
//         const designFetch = await fetch()
//         const designJson = await designFetch.json(disenos.json)
//         designJson.forEach(prod => {
//             const { id, name, price, image } = prod
//         })
//
//
//{
// const card = async () => {
//     const designFetch = await fetch()
//     const designJson = await designFetch.json(disenos.json)
//     designJson.forEach(prod => {
//         const { id, name, price, image } = prod
//     })
// } //



// const disenosJson = await disenosFetch.json()
//             disenosJson.forEach((prod) => {
//                const { id, name, price, image } =
//                      divCards.innerHTML += `
//             <div class="card">
//              <img src:"${image}">
//              <div class="card-body">
//                  <h5 class="card-title">${name}</h5>
//                 <p class="card-text">$${price}</p>
//                  <button id="${id}" class="btn btn-primary">AGREGAR</button>
//              </div>
//              `
//              })