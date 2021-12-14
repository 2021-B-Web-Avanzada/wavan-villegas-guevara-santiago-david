// 03-operadores.js
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
]
//Funciones con parametros
//FIND
//ENVIAMOS UNA FUNCION-> TRUTY/ FALSY
//DEVUELVE EL PRIMERO QUE CUMPLA LA CONDICION
const  respuestaFind= arreglo
.find(
    function (valorActual,indiceActual,arregloCompleto){
        console.log("valorActual",valorActual);
        console.log("indiceActual",indiceActual);
        console.log("arregloCompleto",arregloCompleto);
        return valorActual.nombre ==="Cristian"; //Expresion ===
    }
);
console.log("respuestaFind",respuestaFind)

//FINDINDEX
const  respuestaIndex= arreglo
    .find(
        function (valorActual,indiceActual,arregloCompleto){


            return valorActual.nombre ==="Cristian"; //Expresion ===
        }
    );
console.log("respuestaIndex",respuestaIndex) ;//si no encuentra devuelve -1 .

//FOREACH
//ITERA EL ARREGLO
const respuestaForEach = arreglo
.forEach(
    function (empresaActual,indiceActual,arregloCompleto){
        console.log("valorActual",empresaActual.toString())
    }

);
console.log("respuestaForEach",respuestaForEach); // undefined
//MAP (Moficia o muta el arreglo y devuelve un nuevo arreglo)
// enviamos los datos del nuevo arreglo
//devuelve el numebo arreglo
const respuestaMap = arreglo
.map(
    (valorActual,indiceActual,arregloCompleto)=>{
        const nuevoElemento={
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota+1,
        };
        return nuevoElemento

    }

);
console.log(respuestaMap)

//FILTER (filtra el arreglo)
//enviamos EXPRESION TRUTY FALSY
//devulve los elementos que cumplen esa condicion

const respuestaFilter = arreglo
    .filter(
        (valorActual,indiceActual,arregloCompleto)=>{
            return valorActual.nota >=14;
        }

    );
console.log("respuestaFilter",respuestaFilter)

//SOME -> expresion
//devuelve BOOLEANO
//Hay alguna nota menor o nuevo? SI NO
// OR
const respuestaSome=arreglo
    .some(
        function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nota <9;
        }

    );
console.log("respuestaSome",respuestaSome)
//EVERY -> expresion
//DEVUELVE BOOLEANO
//TODAS las notas son menores a 14? SI NP
//AND
const respuestaEvery=arreglo
    .every(
        function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nota <9;
        }

    );
console.log("respuestaEvery",respuestaEvery)

//[1,2,3,5,6,5,4,3,1]
//REDUCE izq->der
//REDUCE RIGHT der->izq
//100 <3
//100 -1 -2 -3 -5 -6 -5 -4 -3 -2 -1

const respuestaReduce = arreglo
    .reduce(
       function ( valorAcumulado, valorActual, indice,arreglo){
           return valorAcumulado-valorActual.nota;
       },
        100 //Acumulador o de donde inicia.

    );
console.log("respuestaReduce",respuestaReduce);

