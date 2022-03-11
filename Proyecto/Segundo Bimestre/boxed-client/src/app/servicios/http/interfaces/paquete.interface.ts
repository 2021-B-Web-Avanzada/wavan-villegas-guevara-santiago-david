export interface paqueteInterface {
  id?: string;
  peso?: number;
  precio: number;
  idAlmacen: string;
  nombre: string;
  ultimoEstado?:string;
  recibo?: {
    idRecibo: string;
    costoTotal: number;
    estado: 'pagado' | 'no-pagado';
  };
}
