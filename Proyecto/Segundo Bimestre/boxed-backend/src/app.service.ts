import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';
import { Usuario } from './interfaces/Usuario';
import { Paquete } from './interfaces/Paquete';
import { Estado } from './interfaces/Estado';
import { FirebaseFirestoreError } from 'firebase-admin/lib/utils/error';
import { doc } from 'prettier';

@Injectable()
export class AppService {
  private db = getFirestore();
  precioPorKilo = 30;
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

  async listarAlamecenes() {
    return await this.db.collection('almacen').get();
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
      fecha: new Date().toString(),
    };
    await this.registrarEstado(paquete.id, identificadorUsuario, estadoBase);
    return resultadoEscritura;
  }

  async leerPaquetesDeUsuario(
    identificadorUsuario: string,
    listarPorPagos = false,
  ) {
    const referenciaColeccion = this.db
      .collection('usuario')
      .doc(identificadorUsuario)
      .collection('paquete');

    if (listarPorPagos) {
      return await referenciaColeccion
        .where('recibo.estado', '==', 'no-pagado')
        .get();
    } else {
      return await referenciaColeccion.get();
    }
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
    await this.actualizarRefEstadoPaquete(
      idPaquete,
      idusuairo,
      identificadorGenerado.id,
    );
    return await identificadorGenerado.set(infoEstado);
  }

  private async actualizarRefEstadoPaquete(
    idPaquete: string,
    idUsuario: string,
    idEstado: string,
  ) {
    const referenciaPaquete = this.db
      .collection('usuario')
      .doc(idUsuario)
      .collection('paquete')
      .doc(idPaquete);
    try {
      return await this.db.runTransaction(async (tran) => {
        const document = await tran.get(referenciaPaquete);
        const paquete = document.data() as Paquete;
        paquete.ultimoEstado = idEstado;
        tran.update(referenciaPaquete, paquete);
      });
    } catch (e) {
      return new Promise((resolve, reject) => {
        reject(e);
      });
    }
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

  async actualizarPesoPaquete(
    idUsuario: string,
    idPaquete: string,
    peso: number,
  ) {
    const paqueteRef = this.db
      .collection('usuario')
      .doc(idUsuario)
      .collection('paquete')
      .doc(idPaquete);
    try {
      return await this.db.runTransaction(async (tran) => {
        const document = await tran.get(paqueteRef);
        const paquete = document.data() as Paquete;
        paquete.peso = peso;
        //calculo del recibo
        paquete.recibo = this.calcularRecibo(paquete);
        tran.update(paqueteRef, paquete);
      });
    } catch (e) {
      return new Promise((resolve, reject) => {
        reject(e);
      });
    }
  }

  async actualizarPesoPaqueteEnAlmacen(
    idPaquete: string,
    idAlmacen: string,
    peso: number,
  ) {
    const listaPaquetesRef = await this.db
      .collectionGroup('paquete')
      .where('idAlmacen', '==', idAlmacen)
      .get();
    let referenciaPaquete: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData> =
      undefined;
    listaPaquetesRef.forEach((document) => {
      const paquete = document.data() as Paquete;
      if (paquete.id == idPaquete) {
        referenciaPaquete = document.ref;
      }
    });
    try {
      return await this.db.runTransaction(async (tran) => {
        const document = await tran.get(referenciaPaquete);
        const paquete = document.data() as Paquete;
        paquete.peso = peso;
        //calculo del recibo
        paquete.recibo = this.calcularRecibo(paquete);
        tran.update(referenciaPaquete, paquete);
      });
    } catch (e) {
      return new Promise((resolve, reject) => {
        reject(e);
      });
    }
  }

  private calcularRecibo(paquete: Paquete) {
    const idRecibo = paquete.id;
    const costoTotal = this.precioPorKilo * paquete.peso;
    return { idRecibo, costoTotal, estado: 'no-pagado' as const };
  }

  async actualizarPago(idUsuario: string, idPaquete: string) {
    const paqueteRef = this.db
      .collection('usuario')
      .doc(idUsuario)
      .collection('paquete')
      .doc(idPaquete);
    try {
      return this.db.runTransaction(async (tran) => {
        const document = await tran.get(paqueteRef);
        const paquete = document.data() as Paquete;
        paquete.recibo.estado = 'pagado';
        tran.update(paqueteRef, paquete);
      });
    } catch (e) {
      return new Promise((resolve, reject) => {
        reject(e);
      });
    }
  }

  async listarPaquetesPorAlmacen(idAlmacen: string) {
    return await this.db
      .collectionGroup('paquete')
      .where('idAlmacen', '==', idAlmacen)
      .get();
  }

  async listarEstadosyPaquetesEnAlmacen(
    resultadoConsulta: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>,
  ) {
    const listaPromesas: Promise<{
      paquete: Paquete;
      ultimoEstado: Estado;
    }>[] = [];
    resultadoConsulta.forEach((document) => {
      const paquete = document.data() as Paquete;
      const peticionEstado = document.ref
        .collection('estado')
        .doc(paquete.ultimoEstado)
        .get()
        .then((doc) => {
          const ultimoEstado = doc.data() as Estado;
          return { paquete, ultimoEstado };
        });
      listaPromesas.push(peticionEstado);
    });
    return Promise.all(listaPromesas);
  }

  async anadirComentarioEstado(idEstado: string, comentario: string) {
    let promesaActualizacion: Promise<unknown>;
    const referenciaEstado = await this.db
      .collectionGroup('estado')
      .where('id', '==', idEstado)
      .get();
    referenciaEstado.forEach((doc) => {
      const estado = doc.data() as Estado;
      estado.comentario = comentario;
      promesaActualizacion = this.actualizarEstado(doc.ref, estado);
    });
    return promesaActualizacion;
  }

  private async actualizarEstado(
    referenciaEstado: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>,
    nuevaInfoEstado: Estado,
  ) {
    try {
      return this.db.runTransaction(async (tran) => {
        tran.update(referenciaEstado, nuevaInfoEstado);
      });
    } catch (e) {
      return new Promise((resolve, reject) => {
        reject(e);
      });
    }
  }

  async consultarUltimoEstadoPaquetePorUsuario(
    idUsuario: string,
    idPaquete: string,
  ) {
    const paqueteRef = this.db
      .collection('usuario')
      .doc(idUsuario)
      .collection('paquete')
      .doc(idPaquete);
    const infoPaquete = await paqueteRef.get();
    const paquete = infoPaquete.data() as Paquete;
    return await paqueteRef
      .collection('estado')
      .doc(paquete.ultimoEstado)
      .get();
  }
}
