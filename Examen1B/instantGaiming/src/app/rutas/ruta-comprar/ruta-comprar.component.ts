import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-comprar',
  templateUrl: './ruta-comprar.component.html',
  styleUrls: ['./ruta-comprar.component.scss']
})
export class RutaComprarComponent implements OnInit {
  path=-1;
  private sub: any;
  juegoActual: { precio: number; estilo: string; tamanio: string; descuento: number; plataforma: string; imagen: string; id: number; video: string; nombre: string } | { precio: number; estilo: string; tamanio: string; descuento: number; plataforma: string; imagen: string; id: number; video: string; nombre: string } | { precio: number; estilo: string; tamanio: string; descuento: number; plataforma: string; imagen: string; id: number; video: string; nombre: string } | { precio: number; estilo: string; tamanio: string; descuento: number; plataforma: string; imagen: string; id: number; video: string; nombre: string } | { colorFondo: string; precio: number; estilo: string; tamanio: string; descuento: number; plataforma: string; imagen: string; id: number; video: string; nombre: string; fotoFondo: string } | { precio: number; estilo: string; tamanio: string; descuento: number; plataforma: string; imagen: string; id: number; video: string; nombre: string } | { precio: number; estilo: string; tamanio: string; descuento: number; plataforma: string; imagen: string; id: number; video: string; nombre: string } | { precio: number; estilo: string; tamanio: string; descuento: number; plataforma: string; imagen: string; id: number; video: string; nombre: string } ={
    id: 4,
    nombre: 'Gears 5 ',
    precio: 30.00,
    descuento: 73,
    plataforma: 'xbox',
    imagen: "assets/imgs/gears-5-pc-xbox-one-xbox-one-pc-juego-microsoft-store-cover.jpg",
    tamanio: "itemS",
    fotoFondo:"assets/imgs/2712.jpg",
    colorFondo:"#2F3339",
    estilo:"background:  url(assets/imgs/2712.jpg) center 0px no-repeat #2F3339;",
    video:"https://www.youtube.com/embed/HqQMh_tij0c"
  }
  arregloJuegos = [
    {
      id: 0,
      nombre: 'God of war',
      precio: 57.00,
      descuento: 32,
      plataforma: 'steam',
      imagen: "assets/imgs/god-of-war-pc-juego-steam-cover.jpg",
      tamanio: "itemL",
      estilo: "background:  url(assets/imgs/capaing-kratos.jpg) center 0px no-repeat #213946;",
      video:"https://www.youtube.com/embed/HqQMh_tij0c"
    },
    {
      id: 1,
      nombre: 'Monster Hunter Rise',
      precio: 60.00,
      descuento: 31,
      plataforma: 'steam',
      imagen: "assets/imgs/monster-hunter-rise-pc-juego-steam-cover.jpg",
      tamanio: "itemL",
      estilo: "background:  url(assets/imgs/capaing-kratos.jpg) center 0px no-repeat #213946;",
      video:"url(https://www.youtube.com/embed/HqQMh_tij0c)"
    },
    {
      id: 2,
      nombre: 'Dying Light 2 Stay Human',
      precio: 68.00,
      descuento: 52,
      plataforma: 'play',
      imagen: "assets/imgs/dyin-light.jpg",
      tamanio: "itemL",
      estilo: "background:  url(assets/imgs/capaing-kratos.jpg) center 0px no-repeat #213946;",
      video:"https://www.youtube.com/watch?v=d-diB65scQU&list=RDMMd-diB65scQU&start_radio=1"
    },
    {
      id: 3,
      nombre: 'Zombie Army 4 Dead War PS4',
      precio: 60.00,
      descuento: 80,
      plataforma: 'play',
      imagen: "assets/imgs/juego-playstation-zombie-army-4-dead-war-ps4-cover.jpg",
      tamanio: "itemL",
      estilo: "background:  url(assets/imgs/capaing-kratos.jpg) center 0px no-repeat #213946;",
      video:"https://www.youtube.com/watch?v=d-diB65scQU&list=RDMMd-diB65scQU&start_radio=1"
    },

    {
      id: 4,
      nombre: 'Gears 5 ',
      precio: 30.00,
      descuento: 73,
      plataforma: 'xbox',
      imagen: "assets/imgs/gears-5-pc-xbox-one-xbox-one-pc-juego-microsoft-store-cover.jpg",
      tamanio: "itemL",
      fotoFondo:"assets/imgs/2712.jpg",
      colorFondo:"#2F3339",
      estilo:"background:  url(assets/imgs/2712.jpg) center 0px no-repeat #2F3339;",
      video:"https://www.youtube.com/watch?v=d-diB65scQU&list=RDMMd-diB65scQU&start_radio=1"
    },
    {
      id: 5,
      nombre: 'Halo Infinite',
      precio: 60.00,
      descuento: 33,
      plataforma: 'xbox',
      imagen: "assets/imgs/halo-infinite-campana-pc-xbox-one-xbox-series-xs-pc-xbox-one-xbox-serie-x-s-juego-microsoft-store-cover.jpg",
      tamanio: "itemL",
      estilo: "background:  url(assets/imgs/capaing-kratos.jpg) center 0px no-repeat #213946;",
      video:"https://www.youtube.com/watch?v=d-diB65scQU&list=RDMMd-diB65scQU&start_radio=1"
    },
    {
      id: 6,
      nombre: 'Metroid Prime 4 ',
      precio: 50.00,
      descuento: 5,
      plataforma: 'nintendo',
      imagen: "assets/imgs/metroid-prime-4-switch-switch-juego-nintendo-eshop-cover.jpg",
      tamanio: "itemL",
      estilo: "background:  url(assets/imgs/capaing-kratos.jpg) center 0px no-repeat #213946;",
      video:"https://www.youtube.com/watch?v=d-diB65scQU&list=RDMMd-diB65scQU&start_radio=1"
    },
    {
      id: 7,
      nombre: 'Worms: W.M.D ',
      precio: 20.00,
      descuento: 62,
      plataforma: 'nintendo',
      imagen: "assets/imgs/worms-wmd-switch-switch-juego-nintendo-eshop-cover.jpg",
      tamanio: "itemL",
      estilo: "background:  url(assets/imgs/capaing-kratos.jpg) center 0px no-repeat #213946;",
      video:"https://www.youtube.com/watch?v=d-diB65scQU&list=RDMMd-diB65scQU&start_radio=1"
    },
  ]

  constructor(private rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.rutaActiva.params.subscribe(params => {
      this.path = params['juego'];

    });
    if(this.path>=0&&this.path<=7) {
      this.juegoActual = this.arregloJuegos[this.path];
    }else
    {
      this.router.navigate(["not-found"]);
    }


  }

  ejecutarEventoClick(a:number){
    window.location.href="comprar/"+a.toString();
  }

}
