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
        BaseDeDatosMemoria.actualizarJson();
    }
    public agregarVideojuego(videojuego:Videojuego):void{
        this.arregloVideojuegos.push(videojuego);
        BaseDeDatosMemoria.actualizarJson();

    }

    public eliminarVideojuego(indice:number):void{
        this.arregloVideojuegos.splice(indice,1);
        BaseDeDatosMemoria.actualizarJson();

    }
    public toString():string{
        let valor:string="Nombre de la empresa:"+this.nombre+
        "\n Número de trabajadores:"+ this.numeroTrabajadores+
        "\n Fecha de fundación:"+ this.fechaDeFundacion+
        "\n País:"+ this.pais+
        "\n Es idenpendiente?:"+ this.independiente+
        "\n Número de videojuegos?:"+ this.arregloVideojuegos.length;
        console.log(valor);
        return valor;

    }
}