
function laCajaDePandora(numero){
    if(numero / 2){
        let binary = "";
        while(numero > 0){
            let digit = numero % 2;
            numero = Math.floor(numero / 2);
            binary = digit + binary;
        }
        return binary;
    }
    return numero.toString(16)
    }

function myName ({name, age, nationality}){
    return {
        name,
        age,
        nationality
    }
}

myName("Adhara", 25, "argentinian");
=======

  

