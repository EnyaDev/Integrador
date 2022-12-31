const designArray = []
const formUser = document.getElementById('form')
const lista = document.querySelector('#lista')


class NewDesign {
    constructor(name, price, stock) {
        this.name = name
        this.price = price
        this.stock = stock
    }
}
const cromado = new NewDesign('Cromado', 40.0, 10)
designArray.push(cromado)
const glitter = new NewDesign('Glitter', 35.0, 10)
designArray.push(glitter)
const encapsulado = new NewDesign('Encapsulado', 100.0, 10)
designArray.push(encapsulado)
const diseño3d = new NewDesign('Diseño 3D', 150.0, 10)
designArray.push(diseño3d)

// funciones
function searchProd() {
    fetch('/design.json')
        .then(res => res.json())
        .then((data) => {
            searchAll(data)
        });
}

searchProd();

const searchAll = async () => {
    const disenosFetch = await fetch('/design.json')
    console.log(disenosFetch);

// Si l respuesta es correcta
if(disenosFetch.status === 200) {
    const datos = await disenosFetch.json();

// let nailDesign = '';
// designArray.forEach(design => {
//        cards.innerHTML += `
//      <div id="${design.id}" class="cards">
//       <div class="card-body">
//      <h5 class="card-title">${design.nombre}</h5>
//     <p class="card-text">$${design.precio}</p>
//     <button id="${design.id}" class="btn btn-primary">AGREGAR</button>
//   </div>
//      </div>
//       `
//       })
    } else if (disenosFetch.status === 404);
}

//DOM
const selectDesign = document.getElementById('lista')
designArray.forEach((elemento) => {
    const optionDesign = document.createElement('option')
    optionDesign.innerText = `${elemento.name}: $${elemento.price}`
    optionDesign.setAttribute('id', `${elemento.id}`)
    selectDesign.append(optionDesign)
})

//carrito
const carrito = []

const botonAgregar = document.getElementById('botonAdd')
const finalizarCompra = document.getElementById('finalizarCompra')

botonAdd.onclick = () => {
    const indexDesign = selectDesign.selectedIndex
    const diseñoSeleccionado = designArray[indexDesign]
    carrito.push(diseñoSeleccionado)
}

finalizarCompra.onclick = () => {
    let total = 0
    carrito.forEach((design) => {
        total = total + design.price
    })
    Swal.fire(`El total es de ${total} dolares. Ingresa tus datos para completar tu cita`)
}

//elemento
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

formUser.onsubmit = (e) => {
    e.preventDefault()
    infoUser.nombre = inputNombre.value
    infoUser.apellido = inputApellido.value
    localStorage.setItem('infoUser',JSON.stringify(infoUser))
}

const infoUserStorage = JSON.parse(localStorage.getItem('infoUser'))

if(infoUserStorage.nombre !== "" || infoUserStorage.apellido !== ""){
    welcome.innerText = `Bienvenida de vuelta ${infoUserStorage.nombre} ${infoUserStorage.apellido}!`
}

agendar.onclick = () => {
    Swal.fire({
    text: `Gracias por agendar con nosotras ${usuario.nombre} ${usuario.apellido} te esperamos`,
    icon: 'success',
})
}

