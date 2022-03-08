import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';
import { Usuario } from './interfaces/Usuario';
import { Paquete } from './interfaces/Paquete';
import { Estado } from './interfaces/Estado';

@Injectable()
export class AppService {
  private db = getFirestore();
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

  async registrarPaquete(paquete: Paquete, identificadorUsuario: string) {
    //solicita un identificador autogenerado y luego guarda el documento paquete
    const identificadorGenerado = this.db
      .collection('usuario')
      .doc(identificadorUsuario)
      .collection('paquete')
      .doc();
    paquete.id = identificadorGenerado.id;
    const resultadoEscritura = await identificadorGenerado.set(paquete);
    const estadoBase: Estado = {
      nombre: 'bodega',
      fecha: new Date(),
    };
    await this.registrarEstado(paquete.id, identificadorUsuario, estadoBase);
    return resultadoEscritura;
  }

  async leerPaquetesDeUsuario(identificadorUsuario: string) {
    return await this.db
      .collection('usuario')
      .doc(identificadorUsuario)
      .collection('paquete')
      .get();
  }

  async registrarEstado(
    idPaquete: string,
    idusuairo: string,
    infoEstado: Estado,
  ) {
    const identificadorGenerado = this.db
      .collection('usuario')
      .doc(idusuairo)
      .collection('paquete')
      .doc(idPaquete)
      .collection('estado')
      .doc();
    infoEstado.id = identificadorGenerado.id;
    return await identificadorGenerado.set(infoEstado);
  }

  async consultarEstadosPaquete(idPaquete: string, idUsuario: string) {
    return await this.db
      .collection('usuario')
      .doc(idUsuario)
      .collection('paquete')
      .doc(idPaquete)
      .collection('estado')
      .get();
  }
}
