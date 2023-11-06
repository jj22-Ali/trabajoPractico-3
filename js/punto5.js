
function analizarTxt(textoingresado){

    if (textoingresado === textoingresado.toUpperCase()){
        console.log("La cadena esta formada solo por mayúsculas.");
    } else if(textoingresado === textoingresado.toLowerCase()){
        console.log("La cadena esta formada solo por minúsculas");
    } else {
        console.log("la cadena es una mezcla de mayúsculas y minúsculas.")
    }

}

let cadenaTexto = prompt("Ingrese cualquier texto: ");

analizarTxt(cadenaTexto);