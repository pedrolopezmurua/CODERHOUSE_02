let producto = prompt("consulta un producto") // ingreso: aro


const IVA = 19 // calculo iva en chile 19%
class product { // clase
    constructor(name, price, quantity, description) { //funcion contructora producto
        this.name = name //atributos
        this.price = price //atributos
        this.quantity = quantity //atributos
        this.description = description //atributos
    }
    calculatePriceIVA() { //funciones o metodos
        return (this.price) + ((this.price * IVA) / 100)
    }
    getName() { //funciones o metodos
        return this.name
    }
    getPrice() { //funciones o metodos
        return this.price
    }
    getQuantity() { //funciones o metodos
        return this.quantity
    }
    getDescription() { //funciones o metodos
        return this.description
    }
}

const anilloPlata = new product(" anillo de plata",5,500, "aro plata 924 ")
const anilloOro = new product(" anillo de Oro",10, 500, "aro oro 24 kilates ")
const collar = new product("collar",15, 500, "descripcion de los fideos ")
const aro = new product(" aro",20, 500, "descripcion de los fideos ")
const gorro = new product("gorro ",25, 500, "descripcion de los fideos ")

//alert("TIPO: "+ aro.name + "  $" + aro.price + " Descripcion: " + aro.description )

if (producto == 'anilloPlata') {
    alert('el producto: ' + anilloPlata.name + ' existe' + " y la cantidad es " + anilloPlata.price)
} else if (producto == "anilloOro") {
    alert('el producto: ' + anilloOro.name + ' existe' + " y la cantidad es " + anilloOro.price)
}
else if (producto == "collar") {
    alert('el producto: ' + collar.name + ' existe' + " y la cantidad es " + collar.price)
}
else if (producto == "aro") {
    alert('el producto: ' + aro.name + ' existe' + " y la cantidad es " + aro.price)
}
else if (producto == "gorro") {
    alert('el producto: ' + gorro.name + ' existe' + " y la cantidad es " + gorro.price)
} else {
    alert('el producto no esta en bodega')
}



const div = document.getElementById('listadoProductos');

// cambiar (reemplazar) el texto de un elemento
div.textContent = 'reemplazar texto';
