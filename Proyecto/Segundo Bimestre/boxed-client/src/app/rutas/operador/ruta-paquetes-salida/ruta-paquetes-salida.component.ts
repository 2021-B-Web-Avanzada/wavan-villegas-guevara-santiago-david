import { Component, OnInit } from '@angular/core';
import {BoxedService} from "../../../servicios/http/boxed.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {paqueteInterface} from "../../../servicios/http/interfaces/paquete.interface";
import {DialogoCambiarEstadoComponent} from "../../../componentes/dialogos/dialogo-cambiar-estado/dialogo-cambiar-estado.component";

@Component({
  selector: 'app-ruta-paquetes-salida',
  templateUrl: './ruta-paquetes-salida.component.html',
  styleUrls: ['./ruta-paquetes-salida.component.scss']
})
export class RutaPaquetesSalidaComponent implements OnInit {
  arregloPaquetes:paqueteInterface[]=[];
  arregloFiltrado:paqueteInterface[]=[];
  almacenId!:string;


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
              if(paquete.ultimoEstado==='despachado' ||paquete.ultimoEstado==='empacado'||paquete.ultimoEstado==='en-aduana'){
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
  cambiarEstado(id:number){
    const dialogConfig = new MatDialogConfig();
    const dialogRef=this.dialog.open(DialogoCambiarEstadoComponent, {data: { paquete: this.arregloFiltrado[id],id:id, almacen:this.almacenId }});
    dialogRef.afterClosed().subscribe((data)=>{
      if (data.estado==='reparto'){
        this.arregloFiltrado.splice(data.number,1);

      }else {
        this.arregloFiltrado[data.number].ultimoEstado=data.estado;

      }

      }
    );

  }

}
