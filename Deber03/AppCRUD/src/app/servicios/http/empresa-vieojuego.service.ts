import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {EmpresaJphInterface} from "./interfaces/empresa-jph.interface";

import {EmpresaCrearJphInterface} from "./interfaces/EmpresaCrearJphInterface";
import {videojuegoJphInterface} from "./interfaces/videojuego-jph.interface";
import {videojuegoCrearJphInterface} from "./interfaces/videojuegoCrearJphInterface";



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

  crearEmpresa(datosACrear:EmpresaCrearJphInterface): Observable<any> {
    const url = environment.urlEmpresaVideojuego + '/empresa';
    return this.httpCliente
      .post(url, datosACrear);

  }

  editarEmpresaPorId(datosAActualizar:EmpresaCrearJphInterface,id:string): Observable<any> {
    const url = environment.urlEmpresaVideojuego + '/empresa/'+id;
    return this.httpCliente
      .put(url, datosAActualizar);

  }

  eliminarEmpresaPorId(id:String): Observable<any> {
    const url = environment.urlEmpresaVideojuego + '/empresa/'+id;
    return this.httpCliente
      .delete(url);

  }

  buscarEmpresaPorId(id:string):Observable<EmpresaJphInterface>{
    const url = environment.urlEmpresaVideojuego + '/empresa/' + id;
    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as EmpresaJphInterface
        )
      );
  }

  buscarVideojuegos(id:string): Observable<videojuegoJphInterface[]>{
    const url = environment.urlEmpresaVideojuego+'/empresa/'+id+'/juegos';

    return this.httpCliente
      .get(
        url,

      )
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as videojuegoJphInterface[]
        )
      );
  }

  crearVideojuegos(datosACrear:videojuegoCrearJphInterface,idEmpresa:string): Observable<any> {
    const url = environment.urlEmpresaVideojuego+'/empresa/'+idEmpresa+'/juego';
    return this.httpCliente
      .post(url, datosACrear);

  }

  editarJuegoPorId(datosAActualizar:videojuegoCrearJphInterface,idEmpresa:string,idJuego:string): Observable<any> {
    const url = environment.urlEmpresaVideojuego + '/empresa/'+idEmpresa+'/juego/'+idJuego;
    return this.httpCliente
      .put(url, datosAActualizar);

  }

  eliminarJuegoPorId(idEmpresa:string,idJuego:string): Observable<any> {
    const url = environment.urlEmpresaVideojuego + '/empresa/'+idEmpresa+'/juego/'+idJuego;
    return this.httpCliente
      .delete(url);

  }

  buscarJuegoPorId(idEmpresa:string,idJuego:string):Observable<videojuegoJphInterface>{
    const url = environment.urlEmpresaVideojuego + '/empresa/' +idEmpresa+'/juego/'+idJuego;
    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as videojuegoJphInterface
        )
      );
  }






}
