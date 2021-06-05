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
