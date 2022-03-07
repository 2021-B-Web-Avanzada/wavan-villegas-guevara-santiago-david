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

  ) { }

  ngOnInit(): void {
    this.buscarEmpresas()

  }
  editarEmpresa(id:string){
    const ruta = ['/empresa' , 'editar',id ];
    this.router.navigate(ruta);

  }
  eliminarEmpresa(posicion:number,id:string, empresa:string){
    var confirmacion=confirm("¿Está seguro de que desea eliminar la empresa: "+empresa+'?')
    if (confirmacion==true){
      this.arregloEmpresas.splice(posicion, 1);
      const eliminar$ = this.empresaVieojuegoService
        .eliminarEmpresaPorId(id);
      eliminar$
        .subscribe({
          next: (datos) => {
            console.log({datos});

          },
          error: (error) => {
            console.error({error});
          }
        });
    }



  }
  verJuegos(id:string){
    const ruta = ['/empresa' ,id,'videojuegos'];
    this.router.navigate(ruta);



  }
  agregarEmpresa(){
    const ruta = ['/empresa' , 'crear' ];
    this.router.navigate(ruta);

  }

  buscarEmpresas() {
    this.empresaVieojuegoService
      .buscarEmpresas()
      .subscribe({
          next: (datos) => { // try then
            this.arregloEmpresas = datos;
            this.arregloEmpresas.forEach(
              empresa=>{
                empresa.fechaDeFundacion=empresa.fechaDeFundacion.substring(0,10);
              }

            );


          },
          error: (error) => { // catch
            console.error({error});

          },
        }
      )

  }



}
