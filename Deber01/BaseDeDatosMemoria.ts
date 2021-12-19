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
    static async eliminarEmpresa(indice:number):Promise<void>{
        this.empresas.splice(indice,1);
        await this.actualizarJson();

    }
    static async agregarEmpresa(empresa:Empresa):Promise<void>{
        this.empresas.push(empresa);
        await this.actualizarJson();

    }


}