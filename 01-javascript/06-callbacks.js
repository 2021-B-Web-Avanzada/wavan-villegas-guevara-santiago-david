//06-callbacks.js
const fs=require('fs'); //file systema
console.log('PRIMERO');
//06-ejemplo.txt->Hola
/*fs.readFile(
    './01-javascript/06-ejemplo.txt',
    'utf-8',
    (error,contenido)=>{
        if(error) {
            console.log('SEGUNDO')
        }else{
            console.log(contenido);
        }
    }
);
console.log('TERCERO')*/

let  funcionLeerArchivos= ()=>{
    fs.readFile(
        './01-javascript/01-variables.js',
        'utf-8',
        (error,contenido)=>{
            if(error) {
                console.log('Error variables')
            }else{
                console.log(contenido);
            }
            fs.readFile(
                './01-javascript/06-ejemplo.txt',
                'utf-8',
                (errorEjemplo,contenidoEjemplo)=>{
                    if(errorEjemplo) {
                        console.log('Error ejemplo')
                    }else{
                        console.log(contenidoEjemplo);
                    }
                }
            );
        }
    );
};
funcionLeerArchivos()
