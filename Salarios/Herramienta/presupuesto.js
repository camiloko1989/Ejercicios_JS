

var salario;   
var montoArriendo;
var montoServicios;
var montoTransporte; 

function almacenarValores(){
    const valueSalario = document.getElementById("SalarioIngresado");
    salario = parseInt(valueSalario.value);
    //const salarioIngresado = document.getElementById("ResultadoSalario");
    //salarioIngresado.innerText = "Tu salario bruto es: $ " + salario;

    const valueDeduccion = document.getElementById("DeduccionesSalario");
    const deduccion = parseInt(valueDeduccion.value);
    const salarioConDeduccion = (salario * (100-deduccion)/100);
    console.log(salarioConDeduccion);
    const salarioNeto = document.getElementById("SalarioConDeduccionFinal");
    salarioNeto.innerText = "Tu salario neto es: " + salarioConDeduccion;
  
    const valueArriendo = document.getElementById("ArriendoIngresado");
    montoArriendo = parseInt(valueArriendo.value);
    console.log(montoArriendo);
    //const resultadoArriendo = document.getElementById("ResultadoArriendo");
    //resultadoArriendo.innerText = "Lo que gastas en arriendo es: $ " + montoArriendo;

    const valueServicios = document.getElementById("ServiciosIngresado");
    montoServicios = parseInt(valueServicios.value);
    console.log(montoServicios);
    //const resultadoServicios = document.getElementById("ResultadoServicios");
    //console.log("Servicios: " + resultadoServicios)
    //resultadoServicios.innerText = "Lo que gastas en servicios es: $ " + montoServicios;

    const valueTransporte = document.getElementById("TransporteIngresado");
    montoTransporte = parseInt(valueTransporte.value);
    console.log(montoTransporte);
    //const resultadoTransporte = document.getElementById("ResultadoTransporte");
    //resultadoTransporte.innerText = "Lo que gastas en transporte es: $ " + montoTransporte;
 

    const gastos = sumarGastos(montoArriendo,montoServicios,montoTransporte);

    const salarioRestante = calcularSalarioRestante(salarioConDeduccion, gastos);
    
    const ahorroRecomendado = calcularAhorro(salarioRestante);
    const gastosTotales = document.getElementById("GastosTotales");
    gastosTotales.innerText = "Tus gastos totales son: $ " + gastos;

}

function calcularSalarioRestante(salario, gastos){
    const salarioRestante = salario - gastos;
    const restante = document.getElementById("SalarioRestante");
    restante.innerText = "Te queda: $" + salarioRestante;
    return salarioRestante;
}

function calcularAhorro(salarioSobrante){
    const ahorroRecomendado = salarioSobrante * 0.7;
    const ahorro = document.getElementById("AhorroRecomendado");
    ahorro.innerText = "Ahorra $" + ahorroRecomendado;
}

function sumarGastos (gasto1, gasto2, gasto3){
    return gasto1 + gasto2 + gasto3;

}