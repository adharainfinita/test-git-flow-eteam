function laCajaDePandora(numero) {
    if (numero % 2 === 0) {
      // El número es par, convertir a binario
      return numero.toString(2);
    } else {
      // El número es impar, convertir a hexadecimal
      return numero.toString(16);
    }
  }

  function miFuncion() {
    return {
      nombre: "Hector",
      edad: 22,
      nacionalidad: "Argentino"
    };
  }
  