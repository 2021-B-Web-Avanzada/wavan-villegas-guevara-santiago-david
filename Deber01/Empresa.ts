import { BaseDeDatosMemoria } from "./BaseDeDatosMemoria"
import { Videojuego } from "./Videojuego"
export class  Empresa{
    public  nombre:string;
    public  numeroTrabajadores:number;
    public  fechaDeFundacion:string;
    public  pais:string;
    public  independiente:boolean;
    public  arregloVideojuegos: Videojuego[];

    constructor(
        nombreParametro:string,
        numeroTrabajadoresParametro:number,
        fechaDeFundacionParametro:string,
        paisParametro:string,
        independienteParametro:boolean,
        arregloVideojuegosParametro:Videojuego[],

    ) {
        this.nombre=nombreParametro;
        this.numeroTrabajadores=numeroTrabajadoresParametro;
        this.fechaDeFundacion=fechaDeFundacionParametro;
        this.pais=paisParametro;
        this.independiente=independienteParametro;
        this.arregloVideojuegos=arregloVideojuegosParametro;

    }
    public  actualizar(
        nombreParametro:string,
        numeroTrabajadoresParametro:number,
        fechaDeFundacionParametro:string,
        paisParametro:string,
        independienteParametro:boolean,
    ):void{
        this.nombre=nombreParametro;
        this.numeroTrabajadores=numeroTrabajadoresParametro;
        this.fechaDeFundacion=fechaDeFundacionParametro;
        this.pais=paisParametro;
        this.independiente=independienteParametro;
        BaseDeDatosMemoria.actualizarJson()
    }
    public agregarVideojuego(videojuego:Videojuego):void{
        this.arregloVideojuegos.push(videojuego);

    }

    public eliminarVideojuego(indice:number):void{
        this.arregloVideojuegos.splice(indice,1);

    }
}