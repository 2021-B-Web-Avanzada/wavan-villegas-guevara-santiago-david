import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {UserJphInterface} from './interfaces/user-jph.interface';
import {environment} from '../../../environments/environment';
import {UserJphCreateInterface} from "./interfaces/user-jph-create-interface";

@Injectable({
  providedIn: 'any'
})
export class UserJPHService {

  constructor(
    private readonly httpClient:HttpClient
  ) { }

  buscarTodos(parametrosConsulta?:any): Observable<UserJphInterface[]>{
    const url = environment.urlJPC + '/users';
    Object
      .keys(parametrosConsulta)
      .forEach(k =>{
        if(!parametrosConsulta[k]){
          delete  parametrosConsulta[k]
        }
      })
    return this.httpClient
      .get(url,
        {
          params:parametrosConsulta,
        }

      )
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as UserJphInterface[]
        )
      );
  }
  buscarUno(idUsuario: number):Observable<UserJphInterface>{
    const url = environment.urlJPC + '/users/' + idUsuario;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as UserJphInterface
        )
      );
  }
  actualizarPorID(
    idUsuario: number,
    datosActualizar: UserJphCreateInterface
  ):Observable<UserJphInterface>{
    const url = environment.urlJPC + '/users/' + idUsuario;
    return this.httpClient
      .put(url,datosActualizar)
      .pipe(map(
          (resultadoEnData)=>resultadoEnData as UserJphInterface
        )

      )
  }
}
