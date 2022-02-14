var listaEjemplo = [];

function agregarValorLista(){
    const value = document.getElementById("valorAgregado");
    const value1 = parseInt(value.value);
    listaEjemplo.push(value1);
    const listaFinal = document.getElementById("ListaAcumulada");
    listaFinal.innerText = "La lista de números es " + listaEjemplo;
    console.log(listaEjemplo);
}

function multiplicarLista(lista){
    lista = listaEjemplo;
    let total = 1;
    for (let i = 0; i < lista.length; i ++){
        total = (lista[i] * total);
    }
    //console.log(total);
    return total;
}

function calcularMediaGeometrica (lista1){
    lista1 = listaEjemplo;
    const multiplicacion = multiplicarLista(lista1);
    const N = lista1.length;
    const resultado = Math.pow(multiplicacion, (1/N));
    return resultado;
}


function calcularGeometrica(){
    const resultado = calcularMediaGeometrica(listaEjemplo);
    const resutaldoFinal = document.getElementById("ResultadoFinal");
    resutaldoFinal.innerText = "La media geométrica es " + resultado;
}



//console.log(multiplicarLista(listaEjemplo));
//console.log(calcularMediaGeometrica(listaEjemplo));