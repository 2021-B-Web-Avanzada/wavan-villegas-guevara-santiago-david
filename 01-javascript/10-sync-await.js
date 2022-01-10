//10-sync-await.js
const promesaLeerArchivo=() =>{
    return new Promise(
        (res,rej) =>{
            res("CONTENIDO LEER ARCHIVO")
            //rej("ERRO=(")
        }

    );
}


const promesaEscribirArchivo=() =>{
    return new Promise(
        (res,rej) =>{
            res("CONTENIDO ESCRIBIR ARCHIVO")
            //rej("ERRO=(")
        }

    );
}

//ASYN AWAIT
//1) Metodos de clases
// 2) Funcion
//Esto no es posbile, debido a que esta dentro de una funcion
// const respuesta= await promesas;
//Al momento de usar la palabra ASYNC, esa funcion se convierne
//en una promesa

const  ejemplo1= async  function(){}
//const  ejemplo1= async ()=>{}
async  function  ejercicio(){
    console.log('1');
    let nuevoContenodo='';
    try{
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');

    }catch (error){
        console.log(error);

    }
    console.log('6');
    console.log('7');
    return nuevoContenodo;

}
ejercicio().then().catch().finally()

