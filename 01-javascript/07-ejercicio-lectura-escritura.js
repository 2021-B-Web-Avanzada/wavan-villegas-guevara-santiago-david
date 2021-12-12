/*Hacer una funcion que me acxepte como parametro una varuable
 con el path del archivo y el contenido a agreagar al contenido
del archivo, la funcion debe tomar estos 2 parametro y leer
el archivo y anadir al texto al final del archivo
 */
const fs=require('fs'); //file systema

let  funcionLeerEscribir= (path, contenidoNuevo)=> {
    fs.readFile(
        path,
        'utf-8',
        (error,contenido)=>{
            if(error) {
                console.log('Error lectura')
            }else{
                console.log(contenido);
                let combinado=contenido+contenidoNuevo
                fs.writeFile(
                    path,
                    combinado,
                    'utf-8',
                    (errorEscritura)=>{
                        if(errorEscritura) {
                            console.log('Error escritura')
                        }else {

                            console.log("ya esta")
                        }
                    }
                );
            }
        }
    );

}
const pathArchivo='./01-javascript/06-ejemplo.txt'
const contenidoArchivo='Hola mundo 2.0'
funcionLeerEscribir(pathArchivo,contenidoArchivo);
