/*const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioDescuento = 100 - descuento;
const precioFinal = (precioOriginal * porcentajePrecioDescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioFinal,
}); */

function calcularPrecioDescuento (precio,descuento){
    const porcentajePrecioDescuento = 100 - descuento
    const precioFinal = (precio * porcentajePrecioDescuento) / 100;
    return precioFinal;
}

function calculoDePrecio(){
    const precio = document.getElementById("InputPrecio");
    const precioValue = parseInt(precio.value);

    const descuento = document.getElementById("EligeCupon"); 
    let porcentajeDescuento = 1;
    let mensaje = "";
    switch(descuento.value){
        case 'cuponNavidad': 
        porcentajeDescuento = 15;
        mensaje = "Cupon de Navidad"; 
        break;
        case 'cuponPrimeraVez':
        porcentajeDescuento = 20;
        mensaje = "Cupon de Primera Vez";
        break
        case 'cuponFidelidad':
        porcentajeDescuento = 25;
        mensaje = "Cupon de Fidelidad";
        break
    }

    const precioConDescuento = calcularPrecioDescuento(precioValue, porcentajeDescuento);
    const precioFinal = document.getElementById("PrecioResultado");
    precioFinal.innerText = "El precio con descuento del cupon " + mensaje + " es $ " + precioConDescuento;
}

