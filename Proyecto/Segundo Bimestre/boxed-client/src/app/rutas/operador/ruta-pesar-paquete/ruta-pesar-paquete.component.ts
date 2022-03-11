import { Component, OnInit } from '@angular/core';
import {paqueteInterface} from "../../../servicios/http/interfaces/paquete.interface";
import {BoxedService} from "../../../servicios/http/boxed.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogoAlmacenComponent} from "../../../componentes/dialogos/dialogo-almacen/dialogo-almacen.component";
import {DialogoPesarComponent} from "../../../componentes/dialogos/dialogo-pesar/dialogo-pesar.component";

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
    const dialogConfig = new MatDialogConfig();


    const dialogRef=this.dialog.open(DialogoPesarComponent, {data: { paquete: this.arregloFiltrado[id],id:id, almacen:this.almacenId }});
    dialogRef.afterClosed().subscribe((data)=>{

      if(data){

        this.arregloFiltrado.splice(data.number,1);
      }


      }
    );

  }

}
