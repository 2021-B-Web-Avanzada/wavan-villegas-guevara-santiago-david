import { BaseDeDatosMemoria } from "./BaseDeDatosMemoria"
import { Videojuego } from "./Videojuego"
export class  Empresa{
    public id:string;
    public  nombre:string;
    public  numeroTrabajadores:number;
    public  fechaDeFundacion:string;
    public  pais:string;
    public  independiente:boolean;
    public  arregloVideojuegos: Videojuego[];

    constructor(
        idParametro:string,
        nombreParametro:string,
        numeroTrabajadoresParametro:number,
        fechaDeFundacionParametro:string,
        paisParametro:string,
        independienteParametro:boolean,
        arregloVideojuegosParametro:Videojuego[],

    ) {
        this.id=idParametro;
        this.nombre=nombreParametro;
        this.numeroTrabajadores=numeroTrabajadoresParametro;
        this.fechaDeFundacion=fechaDeFundacionParametro;
        this.pais=paisParametro;
        this.independiente=independienteParametro;
        this.arregloVideojuegos=arregloVideojuegosParametro;

    }
    public  async actualizar(
        nombreParametro:string,
        numeroTrabajadoresParametro:number,
        fechaDeFundacionParametro:string,
        paisParametro:string,
        independienteParametro:boolean,
    ):Promise<void>{
        this.nombre=nombreParametro;
        this.numeroTrabajadores=numeroTrabajadoresParametro;
        this.fechaDeFundacion=fechaDeFundacionParametro;
        this.pais=paisParametro;
        this.independiente=independienteParametro;
        await BaseDeDatosMemoria.actualizarJson();
    }
    public async agregarVideojuego(videojuego:Videojuego):Promise<void>{
        this.arregloVideojuegos.push(videojuego);
        await BaseDeDatosMemoria.actualizarJson();

    }

    public async eliminarVideojuego(indice:number):Promise<void>{
        this.arregloVideojuegos.splice(indice,1);
       await BaseDeDatosMemoria.actualizarJson();

    }
}