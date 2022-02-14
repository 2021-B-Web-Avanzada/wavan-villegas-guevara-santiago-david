import { Component, OnInit } from '@angular/core';
import {EmpresaVieojuegoService} from "../../servicios/http/empresa-vieojuego.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmpresaJphInterface} from "../../servicios/http/interfaces/empresa-jph.interface";
import {videojuegoJphInterface} from "../../servicios/http/interfaces/videojuego-jph.interface";

@Component({
  selector: 'app-ruta-videojuegos',
  templateUrl: './ruta-videojuegos.component.html',
  styleUrls: ['./ruta-videojuegos.component.scss']
})
export class RutaVideojuegosComponent implements OnInit {
  idEmpresa = "0";
  arregloVideojuegos: videojuegoJphInterface[]=[];

  constructor(private readonly empresaVieojuegoService: EmpresaVieojuegoService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe({
        next: (parametrosRuta) => {
          console.log(parametrosRuta);
          this.idEmpresa = parametrosRuta['id'];
          this.buscarVideojuegos();
        }
      })
  }
  regresar(){
    const ruta = ['/empresas'];
    this.router.navigate(ruta);

  }
  agregarJuego(){

  }
  editarJuego(id:string){

  }
  eliminarJuego(indice:number,id:string,nombre:string){

  }
  buscarVideojuegos() {
    this.empresaVieojuegoService
      .buscarVideojuegos(this.idEmpresa)
      .subscribe({
          next: (datos) => { // try then
            this.arregloVideojuegos = datos;


          },
          error: (error) => { // catch
            console.error({error});
            const ruta = ['/empresas'];
            this.router.navigate(ruta);


          },
        }
      )

  }

}
