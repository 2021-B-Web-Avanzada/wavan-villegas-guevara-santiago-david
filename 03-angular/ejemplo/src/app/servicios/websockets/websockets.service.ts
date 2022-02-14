import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {
  constructor(private socket: Socket) {
  }

  ejecutarEventoHola() {
    // Emitimos un evento
    const resp = this.socket.
    emit(
      'hola', {
      nombre: 'Adrian'
    });
    console.log(resp);
  }

  escucharEventoHola(){
    return this.socket
      .fromEvent('escucharEventoHola');
  }

  ejecutarEventoUnirseSala(salaID:number,nombre:string) {
    // Emitimos un evento
    const resp = this.socket.
    emit(
      'unirseSala', {
        nombre,
        salaID
      });
  }
  escucharEventoUnirseSala(){
    return this.socket.fromEvent('escucharEventoUnirseSala')

  }

  ejecutarEventoEnviarMensaje(salaID:number,nombre:string, mensaje:string) {
    // Emitimos un evento
    const resp = this.socket.
    emit(
      'enviarMensaja', {
        nombre,
        salaID,
        mensaje
      });
  }
  escucharEventoMensajeSala(){
    return this.socket.fromEvent('escucharEventoMensajeSala')

  }

}
