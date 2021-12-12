import { BaseDeDatosMemoria } from "./BaseDeDatosMemoria"
export class  Videojuego{
    public  nombre:string;
    public  recaudacion:number;
    public  fechaDeSalida:string;
    public  generoPrincipal:string;
    public  multijugador:boolean;

    constructor(
        nombreParametro:string,
        recaudacionParametro:number,
        fechaDeSalidaParametro:string,
        generoPrincipalParametro:string,
        multijugadorParametro:boolean,
    ) {
        this.nombre=nombreParametro;
        this.recaudacion=recaudacionParametro;
        this.fechaDeSalida=fechaDeSalidaParametro;
        this.generoPrincipal=generoPrincipalParametro;
        this.multijugador=multijugadorParametro;

    }
    public  actualizar(
        nombreParametro:string,
        recaudacionParametro:number,
        fechaDeSalidaParametro:string,
        generoPrincipalParametro:string,
        multijugadorParametro:boolean,
    ):void{
        this.nombre=nombreParametro;
        this.recaudacion=recaudacionParametro;
        this.fechaDeSalida=fechaDeSalidaParametro;
        this.generoPrincipal=generoPrincipalParametro;
        this.multijugador=multijugadorParametro;
        BaseDeDatosMemoria.actualizarJson();
    }
}