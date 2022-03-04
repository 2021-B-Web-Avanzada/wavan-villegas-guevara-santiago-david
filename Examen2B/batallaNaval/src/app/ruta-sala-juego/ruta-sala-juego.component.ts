import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WebsocketsService} from "../servicios/websockets/websockets.service";
import {ActivatedRoute} from "@angular/router";
import {recuadroInterface} from "./recuadro.interface";



@Component({
  selector: 'app-ruta-sala-juego',
  templateUrl: './ruta-sala-juego.component.html',
  styleUrls: ['./ruta-sala-juego.component.scss']
})
export class RutaSalaJuegoComponent implements OnInit  {

  salaId='';
  numeroJugador=0;
  mensaje="Ubica tus (5) barcos restantes dando clic en un cuadro de la izquierda"

  gridJugador:recuadroInterface[]=[];
  grindEnemigo:recuadroInterface[]=[];
  atacadosJugador:number[]=[];
  atacadosOponente:number[]=[];
  posicionBarcosEnemigos:number[]=[];
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






  constructor(
    public readonly  activatedRoute:ActivatedRoute,
    public readonly  websocketsService:WebsocketsService,
    private render2: Renderer2
  ) {



  }



  ngOnInit(): void {
    for (let i=0;i<100;i++){
      let cuadro: recuadroInterface;
      cuadro={id:i.toString(),atacado:false,clases:"",habilitado:false};
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
          this.logicaSalas(salaId);
        }
      });

  }








  logicaSalas(salaId:string){
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
    this.websocketsService.ejecutarEventoUnirseSala(+this.salaId,"ddffddf");

  }
  ubicarBarco(id:string){
    console.log("hola"+id);

  }
  atacar(id:string){

  }



}
