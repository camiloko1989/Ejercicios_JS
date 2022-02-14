var salario;   
var montoArriendo;
var montoServicios;
var montoTransporte; 


/*function calcularDeducciones(){
    const salarioNeto = document.getElementById("SalarioConDeduccionFinal");
    salarioNeto.innerText = "Tu salario neto es: $ " + salarioConDeduccion;
}*/

function almacenarValores(){
    const valueSalario = document.getElementById("SalarioIngresado");
    salario = parseInt(valueSalario.value);
    const salarioIngresado = document.getElementById("ResultadoSalario");
    salarioIngresado.innerText = "Tu salario bruto es: $ " + salario;

    const valueDeduccion = document.getElementById("DeduccionesSalario");
    const deduccion = parseInt(valueDeduccion.value);
    const salarioConDeduccion = (salario * (100-deduccion)/100);
    console.log(salarioConDeduccion);
    const salarioNeto = document.getElementById("SalarioConDeduccionFinal");
    salarioNeto.innerText = "Tu salario neto es: " + salarioConDeduccion;
  
    const valueArriendo = document.getElementById("ArriendoIngresado");
    montoArriendo = parseInt(valueArriendo.value);
    console.log(montoArriendo);
    const resultadoArriendo = document.getElementById("ResultadoArriendo");
    resultadoArriendo.innerText = "Lo que gastas en arriendo es: $ " + montoArriendo;

    const valueServicios = document.getElementById("ServiciosIngresado");
    montoServicios = parseInt(valueServicios.value);
    console.log(montoServicios);
    const resultadoServicios = document.getElementById("ResultadoServicios");
    resultadoServicios.innerText = "Lo que gastas en servicios es: $ " + montoServicios;

    const valueTransporte = document.getElementById("TransporteIngresado");
    montoTransporte = parseInt(valueTransporte.value);
    console.log(montoTransporte);
    const resultadoTransporte = document.getElementById("ResultadoTransporte");
    resultadoTransporte.innerText = "Lo que gastas en transporte es: $ " + montoTransporte;

    const gastos = montoArriendo+montoServicios+montoTransporte;

    const salarioRestante = calcularSalarioRestante(salarioConDeduccion, gastos);

    const ahorroRecomendado = calcularAhorro(salarioRestante);
   
}

function calcularSalarioRestante(salario, gastos){
    const salarioRestante = salario - gastos;
    const restante = document.getElementById("SalarioRestante");
    restante.innerText = "El dinero que te sobra es: $ " + salarioRestante;
}

function calcularAhorro(salario){
    const ahorroRecomendado = salario * 0.7;
    const ahorro = document.getElementById("AhorroRecomendado");
    ahorro.innerText = "Te recomendamos que ahorres el 70% del dinero restante, es decir: $" + ahorroRecomendado;
}