


let cantidadDeProductos = Number(prompt('Ingrese la cantidad de productos que quiere sumar'))
let costoTotal = 0;

function sumaDeProductos() {
    let precioActual = Number(prompt('Ingrese el precio del producto'));
    costoTotal = costoTotal + precioActual;
}

let i = 1;

while (i <= cantidadDeProductos) {
    sumaDeProductos();
    i++
}

alert(`El costo total de los 5 productos es $ ${costoTotal}`);