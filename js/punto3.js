/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

const apariciones=[];

for(let x = 0; x <= 12 ; x++){
    apariciones.push(0);
}

for(let z = 0; z < 50;z++){

    let num1aleatorio = Math.floor(Math.random()*6) + 1;
    let num2aleatorio = Math.floor(Math.random()*6) + 1;;

    let sumNumeroRandom = num1aleatorio + num2aleatorio;

    apariciones[sumNumeroRandom]++;
}

document.write(`<table><thead>`);
document.write(`<tr><th>Numero</th><th>Apariciones</th></tr>`);
document.write(`</thead><tbody>`);
for(let i = 2; i <= 12 ; i++){
    document.write(`<tr><td>${i}</td><td>${apariciones[i]}</td></tr>`)
}
document.write(`</tbody></table>`)

