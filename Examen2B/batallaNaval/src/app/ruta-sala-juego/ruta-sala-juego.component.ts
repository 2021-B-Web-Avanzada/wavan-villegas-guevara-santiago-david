import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WebsocketsService} from "../servicios/websockets/websockets.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-ruta-sala-juego',
  templateUrl: './ruta-sala-juego.component.html',
  styleUrls: ['./ruta-sala-juego.component.scss']
})
export class RutaSalaJuegoComponent implements OnInit,AfterViewInit  {
  @ViewChild('gridPropio') gridPropio!: ElementRef;
  @ViewChild('gridAjeno') gridAjeno!: ElementRef;
  @ViewChild('destroyer') destroyer!: ElementRef;
  @ViewChild('submarine') submarine!: ElementRef;
  @ViewChild('cruiser') cruiser!: ElementRef;
  @ViewChild('battleship') battleship!: ElementRef;
  @ViewChild('carrier') carrier!: ElementRef;


  salaId='';
  ancho=10;
  esHorizontal=true;

  constructor(
    public readonly  activatedRoute:ActivatedRoute,
    public readonly  websocketsService:WebsocketsService,
    private render2: Renderer2
  ) {



  }

  ngAfterViewInit(): void {
    this.formarGrid(this.gridPropio);
    this.formarGrid(this.gridAjeno);
    }

  ngOnInit(): void {


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
  rotar(){
    if(this.esHorizontal){
      this.render2.addClass(this.destroyer.nativeElement,"destroyer-container-vertical");
      this.render2.addClass(this.submarine.nativeElement,"submarine-container-vertical");
      this.render2.addClass(this.cruiser.nativeElement,"cruiser-container-vertical");
      this.render2.addClass(this.battleship.nativeElement,"battleship-container-vertical");
      this.render2.addClass(this.carrier.nativeElement,"carrier-container-vertical");

    } else {
      this.render2.removeClass(this.destroyer.nativeElement,"destroyer-container-vertical");
      this.render2.removeClass(this.submarine.nativeElement,"submarine-container-vertical");
      this.render2.removeClass(this.cruiser.nativeElement,"cruiser-container-vertical");
      this.render2.removeClass(this.battleship.nativeElement,"battleship-container-vertical");
      this.render2.removeClass(this.carrier.nativeElement,"carrier-container-vertical");

    }
    this.esHorizontal=!this.esHorizontal;


  }


  formarGrid(grid:ElementRef){
    var gridActual=grid.nativeElement;

    for (let i = 0; i < this.ancho*this.ancho; i++) {
      const div = this.render2.createElement('button');
      if (grid===this.gridAjeno){
        this.render2.setAttribute(div,"id",(100+i).toString())
        this.render2.appendChild(gridActual,div)
      }else {
        this.render2.setAttribute(div,"id",i.toString())
        this.render2.appendChild(gridActual,div)

      }


    }


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


}
