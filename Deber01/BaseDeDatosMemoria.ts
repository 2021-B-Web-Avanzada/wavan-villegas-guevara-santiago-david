import { Empresa } from "./Empresa"


export class  BaseDeDatosMemoria {
    static ruta:string="./empresaJuego.json"
    static empresas:Empresa[]=[];
    static fs=require('fs');


    static  init(): Promise<unknown> {
        const promesaLectura=  new Promise(
            (resolve,reject) => {
                this.fs.readFile(
                    this.ruta,
                    'utf-8',
                    (error, contenido) => {
                        if (error) {
                            reject('Error lectura');
                        } else {
                            resolve (contenido);

                        }
                    }
                );
            }
        );
        return promesaLectura;


    }
    static actualizarJson():Promise<unknown>{
       const promesaEscritura=new Promise(
            (resolve,reject) => {
                this.fs.writeFile(
                    this.ruta,
                    JSON.stringify(this.empresas),
                    'utf-8',
                    (errorEscritura)=>{
                        if(errorEscritura) {
                            reject('Error escritura');
                        }else {

                            resolve("Todo bien");
                        }
                    }
                );
            }
        );
        return promesaEscritura

    }
    static eliminarEmpresa(indice:number):void{
        this.empresas.splice(indice,1);
        this.actualizarJson();

    }
    static agregarEmpresa(empresa:Empresa):void{
        this.empresas.push(empresa);
        this.actualizarJson();

    }
}