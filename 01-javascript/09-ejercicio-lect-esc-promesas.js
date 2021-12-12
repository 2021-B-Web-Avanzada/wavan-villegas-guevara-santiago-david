//09-ejercicio-lect-esc-promesas.js
const fs=require('fs');
/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivp y el contenido a agregar al contenido
del achivo. La funcion debe tomar estos dos parametros y leer
e; archivo y anadir el texto al final del archivo. Al final
vamos a leer nuevamente e imprimirlo en consola */

function  promesaLeerArchivo(path){
    const promesaLectura=new Promise(
        (resolve,reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject('Error lectura');
                    } else {
                        resolve(contenido);

                    }
                }
            );
        }
    );
    return promesaLectura
}

function  promesaEscribirArchivo(path, contenidoActual, nuevoContenido){
    let combinado=contenidoActual+" "+nuevoContenido
    const promesaEscritura=new Promise(
        (resolve,reject) => {
            fs.writeFile(
                path,
                combinado,
                'utf-8',
                (errorEscritura)=>{
                    if(errorEscritura) {
                        reject('Error escritura');
                    }else {

                        resolve("ya esta");
                    }
                }
            );
        }
    );
    return promesaEscritura

}

function  ejercicio(path, nuevoContenido){
    promesaLeerArchivo(path)
        .then(
            (datosPromesa)=>{
                console.log("\n"+datosPromesa);
                promesaEscribirArchivo(path,datosPromesa, nuevoContenido)
                    .then(
                        (datosPromesa2)=>{
                            return promesaLeerArchivo(path)
                                .then(
                                    (datosPromesa3)=>{
                                    console.log("\n"+datosPromesa3);
                                    }
                                )
                                .catch(
                                    (error3)=>{
                                        console.log(error3);
                                    }
                                ) //catch
                        }
                    )
                    .catch(
                        (error2)=>{
                            console.log(error2);
                        }
                    ) //catch//try
            }
        ) //try
        .catch(
            (error)=>{
                console.log(error);
            }
        ) //catch
}

ejercicio('./01-javascript/06-ejemplo.txt', 'Buenas mañanas')