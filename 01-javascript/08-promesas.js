//08-promesas,js
const fs= require('fs');
function  promesaEsPar(numero){
    const miPrimerPromesa=new Promise(//Definicion de la promesa
        (resolve,//return
         reject//reject
        ) =>{
            if(numero%2===0){
                resolve(numero);
            } else {

                reject("No es par =(");
            }
        }

    );
    return miPrimerPromesa
}

function  promesaElevarAlCuadrado(numero){
    const miPrimerPromesa=new Promise(//Definicion de la promesa
        (resolve,reject) =>{
            const numeroElevadoAlCuadrado = Math.pow(numero,2);
            resolve(numeroElevadoAlCuadrado)

        }

    );
    return miPrimerPromesa

}
promesaEsPar(6)
.then(
    (datosPromesa)=>{
        console.log(datosPromesa);
        return promesaElevarAlCuadrado(datosPromesa)
    }
) //try
.catch(
    (error)=>{
        console.log(error);
    }
) //catch
.finally() //finally