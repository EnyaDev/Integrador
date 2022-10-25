function bye(){
    console.log ("Gracias, te esperamos!")
}

let producto = parseInt(prompt('Escoge que te gustaria llevar en tus uñas hoy: 1. De Colores - 2.Efecto - 3.Glitter - 4.Encapsulado - 5.Accesorio 3D'))
let seguirComprando = true
let totalCompra = 0.00
let decision
while (seguirComprando === true) {
    if (producto === 1) {
        totalCompra = totalCompra + 10.00
    } else if (producto === 2) {
        totalCompra = totalCompra + 40.00
    } else if (producto === 3) {
        totalCompra = totalCompra + 35.00
    } else if (producto === 4) {
        totalCompra = totalCompra + 100.00
    } else if (producto === 5) {
        totalCompra = totalCompra + 150.00
    }

    decision = parseInt(prompt('Quieres seguir escogiendo? 1.Sii = 2.Nop'))
    if(decision===1) {
        producto = parseInt(prompt('Escoge que te gustaria llevar en tus uñas hoy: 1. De Colores - 2.Efecto - 3.Glitter - 4.Encapsulado - 5.Accesorio 3D'))
    } else {
        seguirComprando = false
    }
}
alert(`El total de  tus uñas es de ${totalCompra}`)
bye();