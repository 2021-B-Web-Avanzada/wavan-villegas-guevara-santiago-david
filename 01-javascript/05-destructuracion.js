//05-destructuracion.js

//Destructuracion de objetos
const  adrian={
    nombre: "Adrian"
}
const carolina={
    nombre:"Carolina",
    apellido:"EGUEZ"
}
const adrianCarolina={ //Creando una nueva referencia
    ...carolina, //1 //1 El orden es importante para propiedades que se repiten
    ...adrian//2 el ultimo remplaza a los anteriores

};
console.log(adrianCarolina)

// Destructuracion de arreglos
const  arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const  superArreglo = [
    ...arregloUno, //El orden importa
    ...arregloDos
];
console.log("superArreglo",superArreglo);

console.log(...superArreglo); //El arreglo se parte de uno en uno