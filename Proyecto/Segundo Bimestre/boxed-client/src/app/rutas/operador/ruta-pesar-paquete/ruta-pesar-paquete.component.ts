import { Component, OnInit } from '@angular/core';
import {paqueteInterface} from "../../../servicios/http/interfaces/paquete.interface";
import {BoxedService} from "../../../servicios/http/boxed.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-pesar-paquete',
  templateUrl: './ruta-pesar-paquete.component.html',
  styleUrls: ['./ruta-pesar-paquete.component.scss']
})
export class RutaPesarPaqueteComponent implements OnInit {
  arregloPaquetes:paqueteInterface[]=[];
  arregloFiltrado:paqueteInterface[]=[];
  almacenId!:string;

  constructor(private readonly boxedService:BoxedService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.parent?.params;
    if(parametroRuta$){
      parametroRuta$
        .subscribe({
          next: (parametrosRuta) => {
            this.almacenId=parametrosRuta['idAlmacen'];
            this.buscarPaquetes(this.almacenId);

          }
        })
    }
  }
  buscarPaquetes(almacen:string) {
    this.boxedService
      .listarPaquetesPorAlmacen(almacen)
      .subscribe({
          next: (datos) => { // try then
            this.arregloPaquetes=datos.map((documentos)=>{
                return documentos.paquete;
            });
            console.log(this.arregloPaquetes[0].recibo)

            this.arregloFiltrado=this.arregloPaquetes.filter((paquete)=>{
              return !paquete.recibo;

            });






          },
          error: (error) => { // catch
            console.error({error});

          },
        }
      )

  }
  pesarPquete(id:number){

  }

}
