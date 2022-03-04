import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketsService {
  constructor(private socket: Socket) {
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



}
