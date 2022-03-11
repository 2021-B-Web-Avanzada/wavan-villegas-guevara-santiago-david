import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface Estado {
  id?: string;
  nombre: 'bodega' | 'despachado' | 'empacado' | 'en-aduana' | 'reparto';
  comentario?: string;
  fecha?: string;
}
