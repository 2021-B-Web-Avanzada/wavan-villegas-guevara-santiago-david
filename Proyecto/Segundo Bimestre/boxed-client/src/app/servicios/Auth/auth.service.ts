import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado = false;
  usuario=false;
  operador=false;
  constructor(estaLogeado:boolean,usuario:boolean,operador:boolean) {
    this.estaLogeado=estaLogeado;
    this.usuario=usuario;
    this.operador=operador;
  }



}
