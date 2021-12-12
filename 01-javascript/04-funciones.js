// 04-funciones.js
function  soloNumeros(a,b,c){
    return a-b+c; //valor a devolver
}

//JS permite el uso de funciones sin validaciones
//soloNumeros("v",true,[1,2,3]);
//AsoloNumeros(1,2,3,4,5,6,7);;

function  soloLetras(a,b,c){//undefined

}
//Funciones nombradas - named functions
function  funcionNombadas(){

}
//Funciones anonmas
const  funcionSinNombre1= function () {};
var  funcionSinNombre2= function () {};
let  funcionSinNombre3= function (){}; // ponerle nombre no tiene sentido
funcionSinNombre3();
[].forEach(function(){});


//Fat aqrrow functions
const  funcionFatArrow1= ()=>{};
var  funcionFatArrow2= ()=>{};
let  funcionFatArrow3= ()=>{};
[].forEach(()=>{});
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();


const  funcionFatArrow4= ()=>{};
const  funcionFatArrow5= (x)=>{
    return x+1
};
const  funcionFatArrow6= (x)=>x+1 //FAT ARROW FUNCTIONS
                                    //Una sola linea
                                    //Omito las llaves
                                    //Omito return


const  funcionFatArrow7=x=> x+1; //Si solo tenemons un parametro
                                    //Omito los parentesis
const  funcionFatArrow8=(x,y,z)=>x+y+z;

// ... => Parametros infinitos que llegan en un arreglo
// Solo se puede tener una de estas funciones
function  sumarNumeros(...otrosNumeros){ //Parametros infinitos [2,3,4,5,5,...]
    let total=0;
    otrosNumeros.forEach(
        (valorActual)=>{
            total=total+valorActual;
        }
    );
    return total
    //retrun otroNumeros.reduce((a,v)=>a+v,0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9);

