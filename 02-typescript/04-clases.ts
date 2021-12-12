//04-clases.ts
class  Persona{
    public  nombre:string;
    public  apellido:string;
    static  nombreReferencial:string='Humano';
    protected  nombreYApellido=''; //Duck Typing->string
    constructor(
        nombreParametro:string,
        apellidoParametrp:string,
    ) {
        this.nombre=nombreParametro;
        this.apellido=apellidoParametrp;
        this.apellido=nombreParametro+' '+apellidoParametrp;
    }
    private  mostrarNombreApellido():string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string, //Modificar acceso ->Propiedad de la clase
        public estadoCivil: string //Modificar acceso ->Propiedad de la clase
    ) {
        super(nombreParametro,apellidoParametro);
    }

}
const  santiago= new Usuario(
    'Santiago',
    'Villegas',
    '1804356812',
    'soltero'

);
santiago.nombre;
santiago.apellido;
santiago.cedula;
santiago.estadoCivil;