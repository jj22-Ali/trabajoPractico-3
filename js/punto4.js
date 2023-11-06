/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

function parOimpar(num){

    if(num % 2 == 0){
         document.write(`El ${num} es par`);
    }else{
         document.write(`El ${num} es impar`);

    }

}

let numero =parseInt(prompt('Ingrese cualquier numero par saber su paridad: '));

parOimpar(numero);