import validator from "./validator.js";
import maskify from "./maskify.js";

console.log(validator);

const buttonStart = document.getElementById("buttonStart");
const vistaInicioDiv = document.getElementById("vistaInicio");
const vistaValidadorDiv = document.getElementById("vistaValidador");

//Boton de incio-Start para pasar a vista validador
buttonStart.addEventListener("click", () => {
  vistaInicioDiv.style.display = "none";
  vistaValidadorDiv.style.display = "block";
});


const inputTarjeta = document.getElementById("numeroTarjeta");
//variable del input
let numTarjeta = "";
//Transformar el numero ingresado al input en un string

inputTarjeta.addEventListener("keydown", (event) => {

  if (!isNaN(event.key) || event.key == "Backspace") {
    //se puede presiona un número o la tecla borrar
    //!inNan no es un no numero, es decir es un numero

    console.log("numero de tarjeta:" + numTarjeta);
    console.log("inputTarjeta" + inputTarjeta.value);
    console.log("accion ejecutada" + event.key);
  }

  if (!isNaN(event.key)) {
    //al presionar una tecla que es un numero
    numTarjeta = numTarjeta + event.key;
    //la tecla presionada se almacena el numero en la variable numTarjeta
    inputTarjeta.value = numTarjeta;
    //Se tiene que ver el valor almacenado en el input
    //VER SI SE PUEDE CREAR EL ESPACIO CADA 4 NUMEROS
  }

  if (event.key == "Backspace") {
    //Si se quiere borrar un numero se tiene que borrar el valor visible y el valor almacenado
    inputTarjeta.value = inputTarjeta.value.slice(0, -1);
    //Se borra la x visible
    numTarjeta = numTarjeta.slice(0, -1);
    // Se borra el valor almacenado
    console.log("accion borrar" + event.key);
  }
});

//Vistas pantalla tarjeta Valida y tarjeta Invalida
const vistaTarjetaValidaDiv = document.getElementById("vistaTarjetaValida");
const vistaTarjetaInvalidaiv = document.getElementById("vistaTarjetaInvalida");

const botonValidar = document.getElementById("buttonVerify");

//Se conecta el evento click y se desencadena con el validador
botonValidar.addEventListener("click", () => {
  const tarjetaValida = validator.isValid(numTarjeta);
  const numeroEnmascarado = maskify.enmascarar(numTarjeta);

  const enmascaradoNumeroVal = document.getElementById("enmascaradoNumeroVal");
  const enmascaradoNumeroInv = document.getElementById("enmascaradoNumeroInv");

  // SE DEBE VER LA PANTALLA DE TARJETA VALIDA O INVALIDA DEPENDIENDOD EL RESULTADO DEL VALIDADOR
  if (numTarjeta == "") {
    alert("Ingresa un número de tarjeta");
  } else if (numeroEnmascarado.length < 14) {
    alert("Ingresa un número de tarjeta");
  } else if (tarjetaValida === true) {
    vistaInicioDiv.style.display = "none";
    vistaValidadorDiv.style.display = "none";
    vistaTarjetaValidaDiv.style.display = "block";
    vistaTarjetaInvalidaiv.style.display = "none";
    enmascaradoNumeroVal.innerText = `${numeroEnmascarado}`;
  } else {
    vistaInicioDiv.style.display = "none";
    vistaValidadorDiv.style.display = "none";
    vistaTarjetaValidaDiv.style.display = "none";
    vistaTarjetaInvalidaiv.style.display = "block";
    enmascaradoNumeroInv.innerText = `${numeroEnmascarado}`;
  }
});

//Boton de retorno para tarjeta valida;
const botonRetornoValid = document.getElementById("retornoInicioValid");

botonRetornoValid.addEventListener("click", () => {
  numTarjeta = "";
  inputTarjeta.value = "";
  vistaInicioDiv.style.display = "block";
  vistaValidadorDiv.style.display = "none";
  vistaTarjetaValidaDiv.style.display = "none";
  vistaTarjetaInvalidaiv.style.display = "none";
});

//Boton de retorno para tarjeta invalida;
const botonRetornoInv = document.getElementById("retornoInicioInv");

botonRetornoInv.addEventListener("click", () => {
  numTarjeta = "";
  inputTarjeta.value = "";
  vistaInicioDiv.style.display = "block";
  vistaValidadorDiv.style.display = "none";
  vistaTarjetaValidaDiv.style.display = "none";
  vistaTarjetaInvalidaiv.style.display = "none";
});
