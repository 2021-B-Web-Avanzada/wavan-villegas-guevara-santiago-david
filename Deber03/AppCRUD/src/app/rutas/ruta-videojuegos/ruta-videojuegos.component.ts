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
  empresaActual?: EmpresaJphInterface;
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
          this.buscarEmpresa(this.idEmpresa);

        }
      })
  }

  buscarEmpresa(id: string) {
    const buscarUsuarioPorId$ = this.empresaVieojuegoService.buscarEmpresaPorId(id);
    buscarUsuarioPorId$
      .subscribe(
        {
          next: (data) => {
            this.empresaActual = data;
            this.buscarVideojuegos();


          },
          error: (error) => {
            console.error(error);
            const ruta = ['/empresas'];
            this.router.navigate(ruta);
          }
        }
      )
  }

  regresar(){
    const ruta = ['/empresas'];
    this.router.navigate(ruta);

  }
  agregarJuego(){
    const ruta = ['/empresa',this.idEmpresa,'videojuego','crear'];
    this.router.navigate(ruta);

  }
  editarJuego(id:string){
    const ruta = ['/empresa' , this.idEmpresa,'videojuego','editar',id];
    this.router.navigate(ruta);

  }
  eliminarJuego(indice:number,id:string,nombre:string){
    var confirmacion=confirm("¿Está seguro de que desea eliminar el videojuego: "+nombre+'?')
    if (confirmacion==true){
      this.arregloVideojuegos.splice(indice, 1);
      const eliminar$ = this.empresaVieojuegoService
        .eliminarJuegoPorId(this.idEmpresa,id);
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
  buscarVideojuegos() {
    this.empresaVieojuegoService
      .buscarVideojuegos(this.idEmpresa)
      .subscribe({
          next: (datos) => { // try then
            this.arregloVideojuegos = datos;
            this.arregloVideojuegos.forEach(
              juego=>{
                juego.fechaDeSalida=juego.fechaDeSalida.substring(0,10);
              }

            );


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
