import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import  {Socket} from "ngx-socket-io";

@Injectable(
  {
    providedIn:'root'
  }
)
export class WebsocketsService {
  constructor(private socket: Socket) {
  }

  ejecutarEventoHola(): Observable<any> {
    return this.socket.emit('hola', {
      nombre: 'Adrian'
    });
  }
}
