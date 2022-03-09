import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {crearUsuarioInterface} from "./interfaces/crear-usuario-interface";


@Injectable({
  providedIn: 'root'
})
export class BoxedService {

  constructor(private readonly httpCliente:HttpClient) { }
  crearUsuario(datosACrear:crearUsuarioInterface): Observable<any> {
    const url = environment.urlBoxed + '/usuario/nuevo';
    return this.httpCliente
      .post(url, datosACrear);

  }
  buscarUsuarioPorEmail(mail:string):Observable<crearUsuarioInterface>{
    const url = environment.urlBoxed + '/usuario/' + mail;
    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as crearUsuarioInterface
        )
      );
  }
}
