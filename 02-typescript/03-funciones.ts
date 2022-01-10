//03-funciones.ts
function sumarNumeros(
    numeroInicial: number,
    ...numerosInfinitos: number[]
): number{
    return  numeroInicial;
}
//sumarNumeros('aa',1,2,3,4,5) // otros tipos de datos no estan permitidos
sumarNumeros(1,1,2,3,4,5)
function  imprimir(mensaje:string):void{
    console.log('Hola'+mensaje)
}
const  arregloNumeros: number[] = [1,2];
const  arregloNumerosDos: Array<number> = [1,2];
const  arregloNumerosTres: (number|string|boolean)[]=[1,'dos',true];
const  arregloNumerosCuatro: number[]|string[]=[1,2];
let arregloNumerosCinco: number[]|string[]=[1,2]
arregloNumerosCinco=['unos','dos'];
