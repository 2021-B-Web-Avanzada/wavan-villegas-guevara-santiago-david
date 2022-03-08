import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';
import { Usuario } from './interfaces/Usuario';

@Injectable()
export class AppService {
  db = getFirestore();
  async registrarUsuario(usuario: Usuario) {
    //Genera un numeor de casillero y registra al usuario en la base
    usuario.numCasillero = [...Array(5)]
      .map((elemento) => {
        return `${Math.ceil(Math.random() * 9) + 1}`;
      })
      .join('');
    return await this.db
      .collection('usuario')
      .doc(usuario.correoElectronico)
      .set(usuario);
  }

  async leerUsuario(identificador: string) {
    return await this.db.collection('usuario').doc(identificador).get();
  }

  async leerOperador(identificador: string) {
    return await this.db.collection('operador').doc(identificador).get();
  }

  async leerAlmacen(identificador: string) {
    return await this.db.collection('almacen').doc(identificador).get();
  }
}
