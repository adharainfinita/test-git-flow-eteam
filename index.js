function laCajaDePandora(numero) {
  //Aqui va el código
  if (typeof numero !== "number") {
    throw new Error("El parámetro debe ser un número");
  }

  if (isNaN(numero)) {
    throw new Error("El parámetro debe ser un número válido");
  }

  if (numero % 2 === 0) {
    return numero.toString(2);
  } else {
    return numero.toString(16);
  }
}

const mariano = () => {
  return {
    nombre: "Mariano",
    apellido: "Alvarez",
    edad: 20,
    nacionalidad: "Argentina",
  };
};
