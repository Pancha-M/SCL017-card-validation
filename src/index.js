import validator from './validator.js';

console.log(validator);

const buttonStart = document.getElementById("buttonStart");
const vistaInicioDiv = document.getElementById("vistaInicio");
const vistaValidadorDiv = document.getElementById("vistaValidador");

// //Boton de incio para pasar a vista validador
buttonStart.addEventListener("click", function () {
  vistaInicioDiv.style.display = "none";
  vistaValidadorDiv.style.display = "block";
});


// // //Tomar valores que van ingresando al input y visualizarlos en la consola
// // //Teclas presionadas:
// // //Numeros
// // //Backspace
// // //variable del input
// // //numeroTarjeta es igual a un string

const inputTarjeta = document.getElementById("numeroTarjeta");
//variable del input
let numTarjeta = "";
//numeroTarjeta es igual a un string

inputTarjeta.addEventListener("keydown", (event) => {
  event.preventDefault();
  // //   //evento asociado a cuando se presiona una tecla dentro del input
  // //   //cancelar las acciones que por defecto tiene el input, para determinarlas

  if (!isNaN(event.key) || event.key == "enter" || event.key == "Backspace") {
    // //     //se puede presiona un número o la tecla borrar
    // //     //!inNan no es un no numero, es decir es un numero

    console.log("numero de tarjeta:" + numTarjeta);
    console.log("inputTarjeta" + inputTarjeta.value);
    console.log("accion ejecutada" + event.key);
  }

  if (!isNaN(event.key)) {
    numTarjeta = numTarjeta + event.key;
    inputTarjeta.value = numTarjeta;
  }


  if (event.key == "Backspace") {
    //Si se quiere borrar un numero se tiene que borrar la x y el valor
    inputTarjeta.value = inputTarjeta.value.slice(0, -1);
    //Se borra el numero visible en el input
    numTarjeta = numTarjeta.slice(0, -1);
    //Se borra el numero almacenado en el input
    console.log("accion borrar" + event.key);
  }
});
