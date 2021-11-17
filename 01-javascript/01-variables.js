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
    false:"Villegas",
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










