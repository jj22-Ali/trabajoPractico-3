function calcularArea (a,b){

    let p = 2 * (a + b);

    return p;

}

alert("Ingrese el valor de los lados del rectangulo")
let ladoA = parseInt(prompt("Ingrese el valor del lado A: "));
let ladoB = parseInt(prompt("Ingrese el valor del lado B: "));

let area = calcularArea(ladoA, ladoB);

document.write(`El area del rectangulo es: ${area} m^2`)