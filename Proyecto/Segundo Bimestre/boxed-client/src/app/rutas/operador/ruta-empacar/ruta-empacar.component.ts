import { Component, OnInit } from '@angular/core';
import {paqueteInterface} from "../../../servicios/http/interfaces/paquete.interface";
import {BoxedService} from "../../../servicios/http/boxed.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Estado} from "../../../servicios/http/interfaces/estado";

@Component({
  selector: 'app-ruta-empacar',
  templateUrl: './ruta-empacar.component.html',
  styleUrls: ['./ruta-empacar.component.scss']
})
export class RutaEmpacarComponent implements OnInit {
  arregloPaquetes:paqueteInterface[]=[];
  arregloFiltrado:paqueteInterface[]=[];
  almacenId!:string;
  arregloEstados:Estado[]=[];

  constructor(private readonly boxedService:BoxedService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute,
              private dialog: MatDialog) { }

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

            this.arregloPaquetes=datos.map((documentos,index)=>{
              documentos.paquete.ultimoEstado=documentos.ultimoEstado.nombre;
              return documentos.paquete;
            });





            this.arregloFiltrado=this.arregloPaquetes.filter((paquete)=>{
              if(paquete.ultimoEstado==='bodega' && paquete.recibo?.estado==='pagado'){
                return true;

              } else {
                return false;
              }

            });



          },
          error: (error) => { // catch
            console.error({error});

          },
        }
      )

  }
  empacarPaquete(id:number){

  }

}
