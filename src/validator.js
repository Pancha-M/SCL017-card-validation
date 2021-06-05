const validator = {
  isValid: (numeroTarjeta) => {
    //Funcion isValid / validator objeto
    const tcNumero = numeroTarjeta.split("").reverse();
    //separar los numeros y hacer que la cadena se lea de atras hacia adelante, quedando las posiciones invertidas.
    for (let i = 0; i < tcNumero.length; i++) {
      //ARREGLO
      if (i % 2 == 1) {
        //SACAR POSICION IMPAR DE DERECHA A IZQUIERDA
        //Si residuo de cualquier numero divido por dos da 1, significa que estamos en presencia de un numero impar.
        //Como el arreglo se lee al reves, serian los numeros pares al derecho
        tcNumero[i] = tcNumero[i] * 2;
        //MULTIPLICAR NUMEROS POSICION PAR POR DOS
        //los numeros que estan en la posicion determinada anteriomente se multiplican pos 2
      }
    }
    let nuevoNumeroTarjeta = tcNumero.join("").split("");
    //reordenar los numeros para que se sumen todos de 1 en 1
    let contador = 0;
    //contador para almacenar valores
    for (let i = 0; i < nuevoNumeroTarjeta.length; i++) {
      contador += parseInt(nuevoNumeroTarjeta[i]);
      //Se suman los numeros al contador
    }
    if (contador % 10 == 0) {
      //resultado final
      return true;
    } else {
      return false;
    }
  }
};

export default validator;
