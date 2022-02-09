import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WebsocketsService} from "../../servicios/websockets/websockets.service";
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-ruta-sala',
  templateUrl: './ruta-sala.component.html',
  styleUrls: ['./ruta-sala.component.scss']
})
export class RutaSalaComponent implements OnInit, OnDestroy {
  nombre='';
  salaId='';
  arregloSubscripciones: Subscription[]=[];
  mensaje='';
  arregloMensajes:{
    salaId:number;
    nombre:string;
    mensaje:string;
    posicion: 'izq'|'der';

  }[]=[];

  constructor(
    public readonly  activatedRoute:ActivatedRoute,
    public readonly  websocketsService:WebsocketsService
  ) { }
  enviarMensaje(){
    this.websocketsService.ejecutarEventoEnviarMensaje(
      +this.salaId,this.nombre,this.mensaje
    );
    this.mensaje='';
  }


  ngOnInit(): void {
    console.log('init');
    this.activatedRoute
      .params
      .subscribe({
        next:(parametrosDeRuta)=>{
          const salaId= parametrosDeRuta['salaId'];
          const nombre= parametrosDeRuta['nombre'];
          this.nombre=nombre;
          this.salaId=salaId
          this.logicaSalas(salaId,this.nombre);

        }

      });
  }
  logicaSalas(salaId:string,nombre:string){
    this.desSuscribirse();
    const respEscucharEventoMensajeSala=this.websocketsService.escucharEventoMensajeSala()
      .subscribe(
        {
          next:(data:any)=>{
            console.log('Enviaron Mensaje',data);
            this.arregloMensajes.push({
              mensaje:data.mensaje,
              salaId: data.salaId,
              nombre: data.nombre,
              posicion: data.nombre === this.nombre ? 'izq' : 'der'
            })

          },
          error:(error)=>{
            console.error({error});
          }
        }
      );
    const respEscucharEventoUnirseSala=this.websocketsService.escucharEventoUnirseSala()
      .subscribe(
        {
          next:(data)=>{
            console.log('Alguien entro',data);
          },
          error:(error)=>{
            console.error({error});
          }
        }
      );
    this.arregloSubscripciones.push(respEscucharEventoMensajeSala);
    this.arregloSubscripciones.push(respEscucharEventoUnirseSala);
    this.websocketsService.ejecutarEventoUnirseSala(+this.salaId,this.nombre);


  }
  desSuscribirse(){
    this.arregloSubscripciones.forEach(
      (suscripcion)=>{
        suscripcion.unsubscribe()
      }

    );
    this.arregloSubscripciones=[];

  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

}
