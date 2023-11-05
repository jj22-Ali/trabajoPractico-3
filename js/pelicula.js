const peliculas = ['dr.strange','rambo','la saga de transformer','five night at freedy',true,2023];

document.write(`<h2>Lista de Peliculas</h2>`);
document.write(`<ul>`)
for(let i = 0; i <peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//agregar elemento en el array

//unshift: agrega un elemento al pincipio del array

peliculas.unshift('Iron man 1', 'Iron man 2 ');

document.write(`<h2>Lista de Peliculas + iron man </h2>`);
document.write(`<ul>`)
for(let i = 0; i <peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//splices: sirve para borra o agregar elemento en la posicion que queremos
//splice(en que posicion querio poner mi elemento, cuanto quiero borrar(poner 0 para no borrar),lo que quiero poner)

peliculas.splice(2,0,'Thor');

document.write(`<h2>Lista de Peliculas + thor </h2>`);
document.write(`<ul>`)
for(let i = 0; i <peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//push: agregar un elemento nuevo al final del array

peliculas.push('batman');
document.write(`<h2>Lista de Peliculas + batman </h2>`);
document.write(`<ul>`)
for(let i = 0; i <peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

// modificar elementos en el array

peliculas[3]='Doctor Strange: Multivers of Madness'
document.write(`<h2>Lista de Peliculas + batman (${peliculas.length}) </h2>`);
document.write(`<ul>`)
for(let i = 0; i <peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

// borrar elementos en el array

peliculas.shift();  //asi borra el primer elemento

document.write(`<h2>Lista de Peliculas - el primer elemento (${peliculas.length})</h2>`);
document.write(`<ul>`)
for(let i = 0; i <peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);

//splice elegir que elemento de la fila borrar

peliculas.splice(6,1);  
document.write(`<h2>Lista de Peliculas - el primer elemento (${peliculas.length})</h2>`);
document.write(`<ul>`)
for(let i = 0; i <peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write(`</ul>`);