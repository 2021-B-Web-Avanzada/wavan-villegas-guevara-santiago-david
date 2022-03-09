import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {usuarioInterface} from "./interfaces/usuario-interface";
import {EmpresaJphInterface} from "../../../../../../../Deber03/AppCRUD/src/app/servicios/http/interfaces/empresa-jph.interface";
import {paqueteInterface} from "./interfaces/paquete.interface";


@Injectable({
  providedIn: 'root'
})
export class BoxedService {

  constructor(private readonly httpCliente: HttpClient) {
  }

  crearUsuario(datosACrear: usuarioInterface): Observable<any> {
    const url = environment.urlBoxed + '/usuario/nuevo';
    return this.httpCliente
      .post(url, datosACrear);

  }

  buscarUsuarioPorEmail(mail: string): Observable<usuarioInterface> {
    const url = environment.urlBoxed + '/usuario/' + mail;
    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as usuarioInterface
        )
      );
  }

  listarPaquetesUsuario(mail: string): Observable<paqueteInterface[]> {
    const url = environment.urlBoxed + '/usuario/' + mail + '/paquetes';

    return this.httpCliente
      .get(
        url,
      )
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as paqueteInterface[]
        )
      );
  }
}

