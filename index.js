function laCajaDePandora(numero) {
    if(numero % 2 === 0){
        return numero.toString(2)
    }else{
        return numero.toString(16)
    }
}

function miFuncion() {
    return {
      nombre: "LauPerez",
      edad: 18,
      nacionalidad: "Colombia"
    };
  }