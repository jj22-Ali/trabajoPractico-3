alert("Ejercicio 2");

const ciudades = ['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón','Londres, Reino Unido', 'Roma, Italia', 'Pekín, China', 'Río de Janeiro, Brasil', 'Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto'];
let ciudad;
/*
do {
    ciudad=prompt(`Ingrese el nombre de la ciudad: `);
    ciudades.push(ciudad);

} while (confirm(`¿Quiere ingresar otra ciudad?(Poner cancelar para no ingresar más ciudades)`));
*/ 



document.write(`<h2>El arreglo de ciudades tiene ${ciudades.length} elementos</h2>`);
document.write(`<ul>`);
ciudades.push('Paris')
for(let i = 0; i < ciudades.length ; i++){
    
    if(i == 0){
        document.write(`<li>Elemento de 1er posición ${ciudades[i]}</li>`)
    }
    if(i == 3){
        document.write(`<li>Elemento de 3era posición ${ciudades[i]}</li>`)
    }
    if(i == 9){
        document.write(`<li>Elemento de ultima posición ${ciudades[i]}</li>`)
    }
    
    if(i == 10){
        document.write(`<br><li>Elemento de ultima posición ${ciudades[i]}</li>`)
    }

}
document.write(`</ul>`);

ciudades.splice(1,0,'Barcelona');
document.write(`<h2>Lista de Ciudades</h2>`);
document.write(`<ul>`);
for(let i = 0; i < ciudades.length ; i++){
    document.write(`<li>${i}: ${ciudades[i]}</li>`)
}
document.write(`</ul>`);
