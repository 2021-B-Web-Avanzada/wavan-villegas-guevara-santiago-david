// 02-interfaces.ts
interface  Usuario{
    nombre: string;
    apellido: string;
    edad?:number;
    sueldo?:number; //opcional
    casado: boolean |0|1;
    estado: 'AC'|'IN'|'BN';
    imprimirUsuario: (mensaje:string)=> string|'BN';
    calcularImpuesto: (impuesto:number)=>number;
    estadpActual: ()=>'AP'|'AF'|'AT'
    //CalcularImpuesto parametro numero impuesto, sueldo+sueldo+impuesto
    // estadoActual no recibe parametros 'AP' 'AF' 'AT'

}
let user:Usuario={
    nombre:"Santiago",
    apellido:'Villegas',
    casado: 0,
    sueldo: 11.2,
    estado:"BN",
    imprimirUsuario:(mensaje) => {
        return 'El mensaje es '+mensaje;
    },
    calcularImpuesto:impuesto => {
        return this.sueldo+this.sueldo*impuesto;
    },
    estadpActual:() => {
        switch (this.estado){
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}