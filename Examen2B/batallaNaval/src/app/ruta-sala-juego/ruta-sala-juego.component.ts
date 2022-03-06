import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WebsocketsService} from "../servicios/websockets/websockets.service";
import {ActivatedRoute} from "@angular/router";
import {recuadroInterface} from "./recuadro.interface";
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-ruta-sala-juego',
  templateUrl: './ruta-sala-juego.component.html',
  styleUrls: ['./ruta-sala-juego.component.scss']
})
export class RutaSalaJuegoComponent implements OnInit, OnDestroy, AfterViewInit  {

  arregloSubscripciones: Subscription[]=[];
  salaId='';
  numeroJugador=0;
  mensaje="Ubica tus (5) barcos restantes dando clic en un cuadro de la izquierda";
  mensajeListoEnemegio="No listo";
  mensajeListo="No listo";
  mensajeEstadoEnemigo="No conectado";


  gridJugador:recuadroInterface[]=[];
  grindEnemigo:recuadroInterface[]=[];
  atacadosJugador:number[]=[];
  atacadosOponente:number[]=[];
  posicionBarcosEnemigos:number[]=[];
  posicionBarcosPropios:number[]=[];
  barco1:number[]=[];
  barco2:number[]=[];
  barco3:number[]=[];
  barco4:number[]=[];
  barco5:number[]=[];
  perdedor=false;
  barcosPorColocar=5;
  visible1=false;
  visible2=true;
  visible3=true;
  visible4=true;
  visible5=true;
  listo=false;
  enemigoListo=false;
  enemigoConectado=false;






  constructor(
    public readonly  activatedRoute:ActivatedRoute,
    public readonly  websocketsService:WebsocketsService,
    private render2: Renderer2
  ) {



  }

  ngAfterViewInit(): void {
    this.logicaSalas(this.salaId);

    }

  ngOnDestroy(): void {
    this.desSuscribirse();
    }



  ngOnInit(): void {
    for (let i=0;i<100;i++){
      let cuadro: recuadroInterface;
      cuadro={id:i.toString(),atacado:false,clases:"",habilitado:true};
      this.gridJugador.push(cuadro);

      let cuadro2: recuadroInterface;
      cuadro={id:(i+100).toString(),atacado:false,clases:"",habilitado:false};
      this.grindEnemigo.push(cuadro);
    }

    this.activatedRoute
      .params
      .subscribe({
        next:(parametrosDeRuta)=>{
          const salaId= parametrosDeRuta['idSala'];
          this.salaId=salaId;

        }
      });

  }


  logicaSalas(salaId:string){
    this.desSuscribirse();
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
    this.websocketsService.ejecutarEventoUnirseSala(+this.salaId);

  }
  ubicarBarco(id:number){
    if(!this.listo && !this.enemigoListo && this.barcosPorColocar!=0){
      switch(this.barcosPorColocar) {
        case 5: {

          const ubicacion=[id,id+1];
          const valorMaximo=((Math.trunc(id/10)+1)*10)-1;
          let verificador=true;
          ubicacion.forEach((valorActual)=>{
            if(valorActual>valorMaximo || valorActual>99){
              verificador=false;
            }
          });
          if(verificador){
            this.gridJugador[ubicacion[0]].clases+=" taken horizontal start submarine";
            this.gridJugador[ubicacion[1]].clases+=" taken horizontal end submarine";
            ubicacion.forEach((valorActual)=>{
              this.barco1.push(valorActual);
              this.posicionBarcosPropios.push(valorActual);
            });

            this.barcosPorColocar-=1;
            this.visible1=!this.visible1;
            this.visible2=!this.visible2;
            this.mensaje="Ubica tus (4) barcos restantes dando clic en un cuadro de la izquierda";


          }else{
            this.mensaje="Ubicación no válida";
          }


          break;
        }
        case 4: {
          const ubicacion=[id,id+10,id+20];
          let verificador=true;
          ubicacion.forEach((valorActual)=>{
            if(valorActual>99){
              verificador=false;
            }
            this.posicionBarcosPropios.forEach((casillaOcupada)=>{
              if(casillaOcupada===valorActual){
                verificador=false;
              }

            });
          });
          if(verificador){
            this.gridJugador[ubicacion[0]].clases+=" taken vertical start submarine";
            this.gridJugador[ubicacion[1]].clases+=" taken vertical undefined submarine";
            this.gridJugador[ubicacion[2]].clases+=" taken vertical end submarine";
            ubicacion.forEach((valorActual)=>{
              this.barco2.push(valorActual);
              this.posicionBarcosPropios.push(valorActual);
            });

            this.barcosPorColocar-=1;
            this.visible2=!this.visible2;
            this.visible3=!this.visible3;
            this.mensaje="Ubica tus (3) barcos restantes dando clic en un cuadro de la izquierda";


          }else{
            this.mensaje="Ubicación no válida";
          }


          break;


        }
        case 3: {
          const ubicacion=[id,id+1,id+2];
          const valorMaximo=((Math.trunc(id/10)+1)*10)-1;
          let verificador=true;
          ubicacion.forEach((valorActual)=>{
            if(valorActual>valorMaximo ||valorActual>99){
              verificador=false;
            }
            this.posicionBarcosPropios.forEach((casillaOcupada)=>{
              if(casillaOcupada===valorActual){
                verificador=false;
              }

            });
          });
          if(verificador){
            this.gridJugador[ubicacion[0]].clases+=" taken horizontal start submarine";
            this.gridJugador[ubicacion[1]].clases+=" taken horizontal undefined submarine";
            this.gridJugador[ubicacion[2]].clases+=" taken horizontal end submarine";
            ubicacion.forEach((valorActual)=>{
              this.barco3.push(valorActual);
              this.posicionBarcosPropios.push(valorActual);
            });

            this.barcosPorColocar-=1;
            this.visible3=!this.visible3;
            this.visible4=!this.visible4;
            this.mensaje="Ubica tus (2) barcos restantes dando clic en un cuadro de la izquierda";


          }else{
            this.mensaje="Ubicación no válida";
          }

          break;
        }
        case 2: {
          const ubicacion=[id,id+10,id+20,id+30];
          let verificador=true;
          ubicacion.forEach((valorActual)=>{
            if(valorActual>99){
              verificador=false;
            }
            this.posicionBarcosPropios.forEach((casillaOcupada)=>{
              if(casillaOcupada===valorActual){
                verificador=false;
              }

            });
          });
          if(verificador){
            this.gridJugador[ubicacion[0]].clases+=" taken vertical start submarine";
            this.gridJugador[ubicacion[1]].clases+=" taken vertical undefined submarine";
            this.gridJugador[ubicacion[2]].clases+=" taken vertical undefined submarine"
            this.gridJugador[ubicacion[3]].clases+=" taken vertical end submarine";
            ubicacion.forEach((valorActual)=>{
              this.barco4.push(valorActual);
              this.posicionBarcosPropios.push(valorActual);
            });

            this.barcosPorColocar-=1;
            this.visible4=!this.visible4;
            this.visible5=!this.visible5;
            this.mensaje="Ubica tus (1) barcos restantes dando clic en un cuadro de la izquierda";


          }else{
            this.mensaje="Ubicación no válida";
          }


          break;
        }
        case 1: {
          const ubicacion=[id,id+1,id+2,id+3,id+4];
          const valorMaximo=((Math.trunc(id/10)+1)*10)-1;
          let verificador=true;
          ubicacion.forEach((valorActual)=>{
            if(valorActual>valorMaximo ||valorActual>99){
              verificador=false;
            }
            this.posicionBarcosPropios.forEach((casillaOcupada)=>{
              if(casillaOcupada===valorActual){
                verificador=false;
              }

            });
          });
          if(verificador){
            this.gridJugador[ubicacion[0]].clases+=" taken horizontal start submarine";
            this.gridJugador[ubicacion[1]].clases+=" taken horizontal undefined submarine";
            this.gridJugador[ubicacion[2]].clases+=" taken horizontal undefined submarine";
            this.gridJugador[ubicacion[3]].clases+=" taken horizontal undefined submarine";
            this.gridJugador[ubicacion[4]].clases+=" taken horizontal end submarine";
            ubicacion.forEach((valorActual)=>{
              this.barco5.push(valorActual);
              this.posicionBarcosPropios.push(valorActual);
            });

            this.barcosPorColocar-=1;

            this.visible5=!this.visible5;
            this.mensaje="Haga clic en emepezar juego";



          }else{
            this.mensaje="Ubicación no válida";
          }

          break;
        }

      }

    }


  }
  atacar(id:number){

  }
  desSuscribirse(){
    this.arregloSubscripciones.forEach(
      (suscripcion)=>{
        suscripcion.unsubscribe()
      }

    );
    this.arregloSubscripciones=[];

  }



}
