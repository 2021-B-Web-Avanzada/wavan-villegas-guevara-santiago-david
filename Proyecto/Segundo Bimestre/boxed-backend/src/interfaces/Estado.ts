export interface Estado {
  id?: string;
  nombre: 'bodega' | 'despachado' | 'empacado' | 'en-aduana' | 'reparto';
  comentario?: string;
  fecha: Date;
}
