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
export class RutaSalaJuegoComponent implements OnInit {

  arregloSubscripciones: Subscription[]=[];
  salaId="";
  numeroJugador=0;
  mensaje="Ubica tus (5) barcos restantes dando clic en un cuadro de la izquierda";
  mensajeListoEnemegio="No listo";
  mensajeListo="No listo";
  mensajeEstadoEnemigo="No conectado";
  gridJugador:recuadroInterface[]=[];
  grindEnemigo:recuadroInterface[]=[];
  ataquePropio:number[]=[];
  ataqueEnemigo:number[]=[];
  posicionBarcosEnemigos:number[]=[];
  posicionBarcosPropios:number[]=[];
  barco1:number[]=[];
  barco2:number[]=[];
  barco3:number[]=[];
  barco4:number[]=[];
  barco5:number[]=[];
  perdedor=false;
  ganador=false;
  barcosPorColocar=5;
  visible1=false;
  visible2=true;
  visible3=true;
  visible4=true;
  visible5=true;
  listo=false;
  enemigoListo=false;
  enemigoConectado=false;
  tuTurno=false;





  constructor(

    public readonly  websocketsService:WebsocketsService,

  ) {



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

    this.logicaSalas();

  }


  logicaSalas(){
    this.desSuscribirse();
    const respEscucharEventoUnirseSala=this.websocketsService.escucharEventoUnirseSala()
      .subscribe(
        {
          next:(data)=>{
            const informacion=data as {jugador:number,sala:string};


            if(this.numeroJugador===0){
              this.numeroJugador=informacion.jugador;
              this.salaId=informacion.sala;
            }
            if(informacion.jugador===2){
              this.enemigoConectado=true;
              this.mensajeEstadoEnemigo="Conectado";
              if(this.numeroJugador===1){
                this.tuTurno=true;
              }
            }

          },
          error:(error)=>{
            console.error({error});
          }
        }
      );

    const respEscucharEventoEnviarListo=this.websocketsService.escucharEnviarListo()
      .subscribe(
        {
          next:(data)=>{
            const informacion=data as {posicionBarcosEnemigos:number[]};
            this.posicionBarcosEnemigos=informacion.posicionBarcosEnemigos;
            this.enemigoListo=true;
            this.mensajeListoEnemegio="Listo";


          },
          error:(error)=>{
            console.error({error});
          }
        }
      );

    const respEscucharRecibirAtaque=this.websocketsService.recibirAtaque()
      .subscribe(
        {
          next:(data)=>{

            const informacion=data as {posicion:number};
            this.ataquePropio.push(informacion.posicion);
            this.mensaje="Tu turno.";
            this.revisarCondiciones(informacion.posicion);
            this.tuTurno=true;



          },
          error:(error)=>{
            console.error({error});
          }
        }
      );

    const respEscucharRecibirDerrota=this.websocketsService.escucharRecibirDerrota()
      .subscribe(
        {
          next:(data)=>{
            this.ganador=true;
            this.mensaje="Ganaste";

          },
          error:(error)=>{
            console.error({error});
          }
        }
      );
    this.arregloSubscripciones.push(respEscucharEventoUnirseSala);
    this.arregloSubscripciones.push(respEscucharEventoEnviarListo);
    this.arregloSubscripciones.push(respEscucharRecibirAtaque);
    this.arregloSubscripciones.push(respEscucharRecibirDerrota);
    this.websocketsService.ejecutarEventoUnirseSala();

  }
  revisarCondiciones(id:number){
    this.ataquePropio.push(id);
    let acerto=false;
    this.posicionBarcosPropios.forEach((valorActual)=>{
      if(valorActual===id){
        acerto=true;
      }
    });
    if(acerto){
      this.gridJugador[id].clases+= " boom";
    }else{
      this.gridJugador[id].clases+= " miss";

    }
    let atacados=[false,false,false,false,false];

    this.barco1.forEach((valorActual)=>{
      this.ataquePropio.forEach((atacado)=>{
        if (valorActual===atacado){
          atacados[0]=true;
        }

      });
    });

    this.barco2.forEach((valorActual)=>{
      this.ataquePropio.forEach((atacado)=>{
        if (valorActual===atacado){
          atacados[1]=true;
        }

      });
    });

    this.barco3.forEach((valorActual)=>{
      this.ataquePropio.forEach((atacado)=>{
        if (valorActual===atacado){
          atacados[2]=true;
        }

      });
    });

    this.barco4.forEach((valorActual)=>{
      this.ataquePropio.forEach((atacado)=>{
        if (valorActual===atacado){
          atacados[3]=true;
        }

      });
    });
    this.barco5.forEach((valorActual)=>{
      this.ataquePropio.forEach((atacado)=>{
        if (valorActual===atacado){
          atacados[4]=true;
        }

      });
    });
    let contador=0;
    atacados.forEach((valorActual)=> {
      if(valorActual===true){
        contador+=1;
      }

    });
    if(contador===5){
      this.mensaje="Perdiste";
      this.perdedor=true;
      this.websocketsService.ejecutarEventoEnviarDerrota(this.salaId.toString())
    }


  }

  ubicarBarco(id:number){
    if(!this.listo && this.barcosPorColocar!=0){
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
            this.mensaje="Espere que otro jugador se conectade y haga clic en emepezar juego.";



          }else{
            this.mensaje="Ubicación no válida.";
          }

          break;
        }

      }

    }


  }
  atacar(id:number){
    if(this.listo && this.enemigoListo && this.tuTurno && !this.ganador && !this.perdedor){
      let verificador=true;
      this.ataqueEnemigo.forEach((valorActual)=>{
        if(valorActual===id){
          verificador=false;
          this.mensaje="Lugar ya atacado";
        }
      });
      if(verificador){
        this.ataqueEnemigo.push(id);
        let acerto=false;
        this.posicionBarcosEnemigos.forEach((valorActual)=>{
          if(valorActual===id){
            acerto=true;
          }
        });
        if(acerto){
          this.grindEnemigo[id].clases+= " boom";
        }else{
          this.grindEnemigo[id].clases+= " miss";

        }

        this.websocketsService.ejecutarEventoEnviarAtaque(this.salaId.toString(),id);
        this.mensaje="Turno enemigo";

        this.tuTurno=false;

      }


    }

  }
  enviarListo(){
    if(this.barcosPorColocar===0 && this.enemigoConectado && !this.listo){
      this.listo=true;
      this.websocketsService.ejecutarEventoEnviarListo(this.salaId.toString(),this.posicionBarcosPropios);
      this.mensajeListo="Listo";
      if(this.numeroJugador===1){
        this.mensaje="Vas primero, da clic en un recuadro de la derecha para atacar. Pero espera a que tu enemigo esté listo.";
      }else{
        this.mensaje="Vas Segundo, espera a que tu enemigo te ataque.";

      }
    }

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
