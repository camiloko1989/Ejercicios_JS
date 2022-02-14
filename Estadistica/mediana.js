function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero){
    if(numero % 2 === 0) {
        return true;
    } else{
        return false;
    }
}

function calcularMediana(lista){
    lista.sort(function (a,b){
        return a-b;
    })
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    if (esPar(lista.length)){  
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista-1];
        const mediana12 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = mediana12;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}

const lista2 = [
    800,
    200,
    600,
    700
];

console.log(calcularMediana(lista2));



