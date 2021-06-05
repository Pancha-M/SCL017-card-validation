import validator from "./validator.js";

console.log(validator);

const buttonStart = document.getElementById("buttonStart");
const vistaInicioDiv = document.getElementById("vistaInicio");
const vistaValidadorDiv = document.getElementById("vistaValidador");

//Boton de incio para pasar a vista validador
buttonStart.addEventListener("click", ( )=> {
  vistaInicioDiv.style.display = "none";
  vistaValidadorDiv.style.display = "block";
});

//Tomar valores que van ingresando al input y visualizarlos en la consola
//Teclas presionadas:
//Numeros
//variable del input
//numeroTarjeta es igual a un string

const inputTarjeta = document.getElementById("numeroTarjeta");
//variable del input
let numTarjeta = "";
//Transformar el numero ingresado al input en un string

inputTarjeta.addEventListener("keydown", (event) => {
  event.preventDefault();
  //evento asociado a cuando se presiona una tecla dentro del input
  //cancelar las acciones que por defecto tiene el input, para determinarlas

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

const vistaTarjetaValidaDiv = document.getElementById("vistaTarjetaValida");
const vistaTarjetaInvalidaiv = document.getElementById("vistaTarjetaInvalida");

const botonValidar = document.getElementById("buttonVerify");

botonValidar.addEventListener("click", () => {
  const tarjetaValida = validator.isValid(numTarjeta);
  //AQUI HAY QUE AGREGAR EL MASKIFY

// SE DEBE VER LA PANTALLA DE TARJETA VALIDA O INVALIDA DEPENDIENDOD EL RESULTADO DEL VALIDADOR
  if (tarjetaValida === true) {
    vistaInicioDiv.style.display = "none";
    vistaValidadorDiv.style.display = "none";
    vistaTarjetaValidaDiv.style.display = "block";
    vistaTarjetaInvalidaiv.style.display = "none";
  } else {
    vistaInicioDiv.style.display = "none";
    vistaValidadorDiv.style.display = "none";
    vistaTarjetaValidaDiv.style.display = "none";
    vistaTarjetaInvalidaiv.style.display = "block";
  }
});

const botonRetorno = document.getElementById("retornoInicioInv");

botonRetorno.addEventListener("click", () => {
    numTarjeta = "";
    inputTarjeta.value = "";
    vistaInicioDiv.style.display = "block";
    vistaValidadorDiv.style.display = "none";
    vistaTarjetaValidaDiv.style.display = "none";
    vistaTarjetaInvalidaiv.style.display = "none";
 
});