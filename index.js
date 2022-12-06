
const diseñosArray = []
const formUser = document.getElementById('form')

class NewDesign {
    constructor(id, name, price, stock) {
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
}
const cromado = new NewDesign(1, 'Cromado', 40.0, 10)
diseñosArray.push(cromado)
const glitter = new NewDesign(2, 'Glitter', 35.0, 10)
diseñosArray.push(glitter)
const encapsulado = new NewDesign(3, 'Encapsulado', 100.0, 10)
diseñosArray.push(encapsulado)
const diseño3d = new NewDesign(4, 'Diseño 3D', 150.0, 10)
diseñosArray.push(diseño3d)

//DOM
const selectDesign = document.getElementById('lista')
diseñosArray.forEach((elemento) => {
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
    console.log(selectDesign.selectedIndex)
    const indexDesign = selectDesign.selectedIndex
    const diseñoSeleccionado = diseñosArray[indexDesign]
    console.log(diseñoSeleccionado)
    carrito.push(diseñoSeleccionado)
}

finalizarCompra.onclick = () => {
    console.log(carrito)
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
