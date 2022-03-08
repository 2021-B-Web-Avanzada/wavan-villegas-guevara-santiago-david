export interface Paquete {
  id?: string;
  peso?: number;
  precio: number;
  idAlmacen?: string;
  nombre: string;
  recibo?: {
    idRecibo: string;
    costoTotal: number;
    estado: 'pagado' | 'no-pagado';
  };
}
