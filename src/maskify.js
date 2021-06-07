const maskify = {
    enmascarar: (numeroTarjeta) => {
      const tcNumero = numeroTarjeta.split("");
      for (let i = 0; i < tcNumero.length - 4; i++) {
        tcNumero[i] = "x";
      }
      return tcNumero.join("");
    },
  };

  export default maskify;