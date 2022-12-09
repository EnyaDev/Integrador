const divCards = document.querySelector('.cards')
const diseñosArray = []
const formUser = document.getElementById('form')

class NewDesign {
    constructor(id, name, price, image) {
        this.id = id
        this.name = name
        this.price = price
        this.image = image
    }
}
const cromado = new NewDesign(1, 'Cromado', 40.0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeNRLFV4TPbGTHttoqZRdZu6PHACze6-87RwvHDBT1XqTV-hrBOZp3ZvfoEa9wyBRfl4&usqp=CAU')
diseñosArray.push(cromado)
const glitter = new NewDesign(2, 'Glitter', 35.0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax8E5wcLwIdqVhPOqG69WykMfWBMwED8OQPIhg85x6uRBLwUC5NYkuuCDweSm2r1Pd8Q&usqp=CAU')
diseñosArray.push(glitter)
const encapsulado = new NewDesign(3, 'Encapsulado', 100.0, 'https://i.blogs.es/42d526/274857342_3035266973379831_8363064571846029922_n/450_1000.jpeg')
diseñosArray.push(encapsulado)
const diseño3d = new NewDesign(4, 'Diseño 3D', 150.0, 'https://heraldodemexico.com.mx/u/fotografias/m/2022/6/8/f768x1-525121_525248_5050.jpeg')
diseñosArray.push(diseño3d)

//DOM
const selectDesign = document.getElementById('lista')
diseñosArray.forEach((elemento) => {
    const optionDesign = document.createElement('option')
    optionDesign.innerText = `${elemento.name}: $${elemento.price}`
    optionDesign.setAttribute('id', `${elemento.id}`)
    selectDesign.append(optionDesign)
})

//funciones

const buscarDesign = async() => {
const designFetch = await fetch()
const designJson = await designFetch.json(disenos.json)
designJson.forEach(prod=>{
    const{id,name,price,image} = prod
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

const botonAgregar = document.getElementById('botonAdd')
const finalizarCompra = document.getElementById('finalizarCompra')

botonAdd.onclick = () => {
    const indexDesign = selectDesign.selectedIndex
    const diseñoSeleccionado = diseñosArray[indexDesign]
    carrito.push(diseñoSeleccionado)
}

finalizarCompra.onclick = () => {
    let total = 0
    carrito.forEach((design) => {
        total = total + design.price
    })
    Swal.fire(`El total es de ${total} dolares. Ingresa tus datos para completar tu cita`)
}

//STORAGE
const welcome = document.getElementById('welcome')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')

const usuario = {}

inputNombre.onchange = (e) => {
    usuario.nombre = e.target.value
}
inputApellido.onchange = (e) => {
    usuario.apellido = e.target.value
}

const infoUser = {}

//evento submit
formUser.onsubmit = (e) => {
    e.preventDefault()
    infoUser.nombre = inputNombre.value
    infoUser.apellido = inputApellido.value
    localStorage.setItem('infoUser', JSON.stringify(infoUser))
}

const infoUserStorage = JSON.parse(localStorage.getItem('infoUser'))
if (infoUserStorage.nombre !== "" || infoUserStorage.apellido !== "") {
    welcome.innerText = `Bienvenida de vuelta ${infoUserStorage.nombre} ${infoUserStorage.apellido}!`
}

agendar.onclick = () => {
    Swal.fire({
        text: `Gracias por agendar con nosotras ${usuario.nombre} ${usuario.apellido} te esperamos`,
        icon: 'success',
    })
}
