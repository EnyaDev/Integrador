const divCards = document.querySelector('.cards')
const lista = document.querySelector('#lista')
const formUser = document.getElementById('form')
const botonFilter = document.querySelector('#filtrar')


const showCat = async () => {
    const categoriesFetch = await fetch('categories.json')
    const categoriesJson = await categoriesFetch.json()
    categoriesJson.forEach((cat) => {
        const option = document.createElement('option')
        option.innerText = `${cat}`
        lista.append(option)
    })
}

const searchAll = async () => {
    const disenosFetch = await fetch('diseno.json')
    const disenosJson = await disenosFetch.json()
    disenosJson.forEach((prod) => {
        const { id, name, price, category, image } =
            divCards.innerHTML += `
    <div class="card">
    <img src:"${image} class:"card-img-top">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">$${price}</p>
        <button id="${id}" class="btn btn-primary">AGREGAR</button>
    </div>
    `
    })
}

const searchForCat = async () => {
    divCards.innerHTML = ''
    const categorySelected = lista.value
    const disenosFetch = await fetch('diseno.json')
    const disenosJson = await disenosFetch.json()

    const disenosFiltrados = disenosJson.filter(prod=>prod.category===categorySelected)
    disenosFiltrados.forEach((prod) => {
        const { id, name, price, category, image } =
            divCards.innerHTML += `
    <div class="card">
    <img src:"${image} class:"card-img-top">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">$${price}</p>
        <button id="${id}" class="btn btn-primary">AGREGAR</button>
    </div>
    `
    })
}

searchAll()
showCat()
botonFiltrar.onclick = searchForCat

    // const diseñosArray = []
    // class NewDesign {

    //     constructor(id, name, price, image) {
    //         this.id = id
    //         this.name = name
    //         this.price = price
    //         this.stock = stock
    //         this.image = image
    //     }
    // } 

    // const cromado = new NewDesign(1, 'Cromado', 40.0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeNRLFV4TPbGTHttoqZRdZu6PHACze6-87RwvHDBT1XqTV-hrBOZp3ZvfoEa9wyBRfl4&usqp=CAU')
    // diseñosArray.push(cromado)
    // const glitter = new NewDesign(2, 'Glitter', 35.0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax8E5wcLwIdqVhPOqG69WykMfWBMwED8OQPIhg85x6uRBLwUC5NYkuuCDweSm2r1Pd8Q&usqp=CAU')
    // diseñosArray.push(glitter)
    // const encapsulado = new NewDesign(3, 'Encapsulado', 100.0, 'https://i.blogs.es/42d526/274857342_3035266973379831_8363064571846029922_n/450_1000.jpeg')
    // diseñosArray.push(encapsulado)
    // const diseño3d = new NewDesign(4, 'Diseño 3D', 150.0, 'https://heraldodemexico.com.mx/u/fotografias/m/2022/6/8/f768x1-525121_525248_5050.jpeg')
    // diseñosArray.push(diseño3d)

    //DOM
    diseñosArray.forEach((elemento) => {
        selectDesign.append(optionDesign)
    })

    //funciones

    const buscarDesign = async () => {
        const designFetch = await fetch()
        const designJson = await designFetch.json(disenos.json)
        designJson.forEach(prod => {
            const { id, name, price, image } = prod
        })
    }

    // buscar elementos al DOM

    const divProductos = document.querySelector('#divProductos')

    diseñosArray.forEach((producto) => {
        divCards.innerHTML += `
    <div id="${producto.id}" class="card cardDesign">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <button id="${producto.id}" class="btn btn-primary">AGREGAR</button>
    </div>
    </div>
    
    `
    })


    //carrito
    const carrito = []