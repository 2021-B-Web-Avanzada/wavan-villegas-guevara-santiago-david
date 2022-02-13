import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmpresaJphInterface} from "../../servicios/http/interfaces/empresa-jph.interface";

import {ActivatedRoute, Router} from "@angular/router";
import {EmpresaVieojuegoService} from "../../servicios/http/empresa-vieojuego.service";


@Component({
  selector: 'app-ruta-empresas',
  templateUrl: './ruta-empresas.component.html',
  styleUrls: ['./ruta-empresas.component.scss']
})
export class RutaEmpresasComponent implements OnInit {
  arregloEmpresas: EmpresaJphInterface[]=[];


  constructor(
    private readonly empresaVieojuegoService: EmpresaVieojuegoService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buscarEmpresas()
  }
  editarEmpresa(id:string){
    console.log(id);

  }
  eliminarEmpresa(id:string){
    console.log(id);


  }
  verJuegos(id:string){
    console.log(id);


  }

  buscarEmpresas() {
    this.empresaVieojuegoService
      .buscarEmpresas()
      .subscribe({
          next: (datos) => { // try then
            this.arregloEmpresas = datos;
            console.log({datos});


          },
          error: (error) => { // catch
            console.error({error});

          },
        }
      )
  }



}
