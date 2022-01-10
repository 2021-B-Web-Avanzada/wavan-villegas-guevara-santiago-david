//Mutables e Inmutables
//Mutables
var numeroUno = 1;
let numeroDos =2 ;
numeroUno=false;
numeroDos=true;
//Inmutables
const configuracionArchivos="PDF";
//configuracionArchivos="EESE"
//vamos a preferir CONST> LET > NUNCA VAR



//Tipos de variables
const  numero=1; //number
const sueldo=1.2; //number
const texto="Santiago"; //string
const apellido='Villegas';//String
const booleano=false;//boolean
const hijos=null; //object
const zapatos=undefined;//undefined
console.log(typeof  numero);
console.log(typeof  sueldo);
console.log(typeof  texto);
console.log(typeof  apellido);
console.log(typeof  booleano);
console.log(typeof  hijos);
console.log(typeof  zapatos);
console.log(typeof  Number("sss"));//number
console.log(Number("sss"));//Nan

//Truty y false
if(""){
    console.log("String vacio Es verdadero");

}else {
    console.log("String vacio Es Falsy");
}
if("Santiago"){
    console.log("String con datos Es truty");

}else {
    console.log("String con  datos es Falso");
}

if(-1){
    console.log("Negativos es truty");
} else {
    console.log("Negativos es falso");
}
if(0){
    console.log("Ceros es truty");
} else {
    console.log("Ceros es falso");
}
if(1){
    console.log("Positivos es truty");
} else {
    console.log("Positivos es falso");
}


if(null){
    console.log("Null es truty");
} else {
    console.log("Null es falso");
}
if(undefined){
    console.log("undefined es truty");
} else {
    console.log("undefined es falso");
}

//Objetos javaScript

const santiago={
    nombre:"Santiago", //llave:valor,
    apellido:"Villegas",
    edad: 22,
    hijos: null,
    zapatos: undefined,
    casado:false,
    ropa:{
        color: 'plomo',
        talla: 38,
    },
    mascotas:['Kiara','Loky'],
};
//Acceder a las propiedades del objeto
santiago.nombre;
santiago.apellido;
santiago["nombre"];
console.log(santiago);
santiago.nombre="David";
console.log(santiago);
santiago["nombre"]="Santiago";
santiago.sueldo;
console.log(santiago.sueldo);

//agregar propiedades a un objeto
santiago.sueldo=1.2;
console.log(santiago.sueldo);
santiago["gastos"]=0.8;
console.log(santiago.gastos);
santiago.nombre=undefined;
console.log(santiago);
console.log(Object.keys(santiago));
console.log(Object.values(santiago));

delete  santiago.nombre;//elimina la llave
console.log(santiago)

//Las variables por valor son las primitivas.
let edadSantiago=32;
let edadDadvid=edadSantiago;// Guardamos una primitiva en otra variable
console.log(edadSantiago);
console.log(edadDadvid);
//Se guarda el valo no la referencia
edadSantiago=edadDadvid+1;
console.log(edadSantiago);
console.log(edadDadvid);

//Variables por referencia: object({}[])
// let rafael={
//     nombre:"Rafael"
// };
// let lenin=rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre="Lenin";
// console.log(rafael);
// console.log(lenin);
// delete  rafael.nombre;
// console.log(rafael);
// console.log(lenin);



//Clonacion de objetos

let rafael={
nombre:"Rafael"
};
let lenin=Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre="Lenin";
console.log(rafael);
console.log(lenin);
delete  rafael.nombre;
console.log(rafael);
console.log(lenin);
//Clonacion de un arreglo
let arregloNumeros=[1,2,3,4,5];
let arregloClonado= Object.assign([],arregloNumeros);
console.log(arregloNumeros)
console.log(arregloClonado)
arregloNumeros[0]=200;
arregloClonado[0]=100;
console.log(arregloNumeros)
console.log(arregloClonado)





