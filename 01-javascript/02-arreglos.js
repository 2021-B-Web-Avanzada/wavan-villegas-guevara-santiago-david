// 02-arreglos.js
let arreglo=[6,7,8,9,10];
arreglo=1;
arreglo=true;
arreglo=undefined;
arreglo=null;
arreglo={};
arreglo=[true,1,1.1,"Santiago",undefined,null,{},[1,2]];
arreglo=[6,7,8,9,10]

//for of
for (let numero of arreglo){//VALORES
    console.log("numero",numero);
}

//for in
for (let  indice in arreglo){//indices
    arreglo[indice];
    console.log("indice", indice);
}
let objetoPrueba={a:"1",b:"2",c:"2"};
for (let llave in objetoPrueba){
    console.log("llave",llave)
}


arreglo.push(11);//Agrega al final un elemento
//[6,7,8,9,10,11]
arreglo.pop(); //Elimina al final un elemento
//[6,7,8,9,10]
arreglo.unshift(5); //Agrega al inicio del arreglo
//[5,6,7,8,9,10]
console.log(arreglo);

//Agregar en el indice 0
arreglo.splice(0,0,4);
//splice(indice, numero de elementos eliminados, items a agregar)


//indecOf elemento de la primera ocurrencia
const indiceNueve=arreglo.indexOf(9)
arreglo.splice(indiceNueve,2);
//[4,5,6,7,8]
console.log(arreglo)