import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {
  constructor(private socket: Socket) {
  }




  ejecutarEventoUnirseSala() {
    // Emitimos un evento
    const resp = this.socket.
    emit(
      'unirseSala', {


      });
  }
  escucharEventoUnirseSala(){
    return this.socket.fromEvent('escucharEventoUnirseSala');

  }

  ejecutarEventoEnviarListo(salaId:string,posicionBarcosEnemigos:number[]) {
    // Emitimos un evento
    const resp = this.socket.
    emit(
      'enviarListo', {

        posicionBarcosEnemigos:posicionBarcosEnemigos,
        idSala:salaId

      });
  }
  escucharEnviarListo(){
    return this.socket.fromEvent('escucharEnviarListo');

  }

  ejecutarEventoEnviarAtaque(salaId:string,posicion:number) {
    // Emitimos un evento
    const resp = this.socket.
    emit(
      'enviarAtaque', {
        posicion:posicion,
        idSala:salaId

      });
  }
  recibirAtaque(){
    return this.socket.fromEvent('recibirAtaque');

  }

  ejecutarEventoEnviarDerrota(salaId:string) {
    // Emitimos un evento
    const resp = this.socket.
    emit(
      'enviarDerrota', {

        idSala:salaId

      });
  }
  escucharRecibirDerrota(){
    return this.socket.fromEvent('recibirDerrota');

  }



}
