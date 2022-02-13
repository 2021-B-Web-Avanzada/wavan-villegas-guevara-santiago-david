import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {EmpresaJphInterface} from "./interfaces/empresa-jph.interface";



@Injectable({
  providedIn: 'root'

})
export class EmpresaVieojuegoService {


  constructor(
    private readonly httpCliente:HttpClient
  ) { }

  buscarEmpresas(parametrosConsulta?:any): Observable<EmpresaJphInterface[]>{
    const url = environment.urlEmpresaVideojuego+'/empresas';

    return this.httpCliente
      .get(
        url,

      )
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as EmpresaJphInterface[]
        )
      );
  }






}
