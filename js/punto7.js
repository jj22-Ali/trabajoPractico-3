/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/


function tablaMultiplicar(x){

    document.write(`La tabla es de ${x}`)
    document.write(`<br>`)
    for(let i = 1 ; i<= 10; i++){
        document.write(`${x} X ${i} : ${x * i}`)
        document.write(`<br>`)
    }

}


let numero = parseInt(prompt("Ingrese un numero para mostrar su tabla de multiplicar(1 a 10): "))

tablaMultiplicar(numero);