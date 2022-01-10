import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.scss']
})
export class RutaHomeComponent implements OnInit {
  path="";
  private sub: any;
  arregloJuegos = [
    {
      id: 0,
      nombre: 'God of war',
      precio: 57.00,
      descuento: 32,
      plataforma: 'steam',
      imagen: "assets/imgs/god-of-war-pc-juego-steam-cover.jpg",
      tamanio: "itemS"
    },
    {
      id: 1,
      nombre: 'Monster Hunter Rise',
      precio: 60.00,
      descuento: 31,
      plataforma: 'steam',
      imagen: "assets/imgs/monster-hunter-rise-pc-juego-steam-cover.jpg",
      tamanio: "itemS"
    },
    {
      id: 2,
      nombre: 'Dying Light 2 Stay Human',
      precio: 68.00,
      descuento: 52,
      plataforma: 'play',
      imagen: "assets/imgs/dyin-light.jpg",
      tamanio: "itemS"
    },
    {
      id: 3,
      nombre: 'Zombie Army 4 Dead War PS4',
      precio: 60.00,
      descuento: 80,
      plataforma: 'play',
      imagen: "assets/imgs/juego-playstation-zombie-army-4-dead-war-ps4-cover.jpg",
      tamanio: "itemS"
    },

    {
      id: 4,
      nombre: 'Gears 5 ',
      precio: 30.00,
      descuento: 73,
      plataforma: 'xbox',
      imagen: "assets/imgs/gears-5-pc-xbox-one-xbox-one-pc-juego-microsoft-store-cover.jpg",
      tamanio: "itemS"
    },
    {
      id: 5,
      nombre: 'Halo Infinite',
      precio: 60.00,
      descuento: 33,
      plataforma: 'xbox',
      imagen: "assets/imgs/halo-infinite-campana-pc-xbox-one-xbox-series-xs-pc-xbox-one-xbox-serie-x-s-juego-microsoft-store-cover.jpg",
      tamanio: "itemS"
    },
    {
      id: 6,
      nombre: 'Metroid Prime 4 ',
      precio: 50.00,
      descuento: 5,
      plataforma: 'nintendo',
      imagen: "assets/imgs/metroid-prime-4-switch-switch-juego-nintendo-eshop-cover.jpg",
      tamanio: "itemS"
    },
    {
      id: 7,
      nombre: 'Worms: W.M.D ',
      precio: 20.00,
      descuento: 62,
      plataforma: 'nintendo',
      imagen: "assets/imgs/worms-wmd-switch-switch-juego-nintendo-eshop-cover.jpg",
      tamanio: "itemS"
    },
  ]
  arregloJuegosFiltrado = new Array();


  constructor(private rutaActiva: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.rutaActiva.params.subscribe(params => {
      this.path = params['filtro'];

    });
    switch(this.path) {
      case "juegos":

        this.arregloJuegosFiltrado.push(this.arregloJuegos[0]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[1]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[2]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[3]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[4]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[5]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[6]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[7]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[0]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[1]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[2]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[3]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[4]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[5]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[6]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[7]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[0]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[1]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[2]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[3]);

        break;

      case "playStation": {
        this.arregloJuegosFiltrado.push(this.arregloJuegos[2]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[3]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[2]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[3]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[2]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[3]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[2]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[3]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[2]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[3]);


        break;
      }
      case "xbox": {
        this.arregloJuegosFiltrado.push(this.arregloJuegos[4]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[5]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[4]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[5]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[4]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[5]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[4]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[5]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[4]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[5]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[4]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[5]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[4]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[5]);

        break;
      }
      case "nintendo": {
        this.arregloJuegosFiltrado.push(this.arregloJuegos[6]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[7]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[6]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[7]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[6]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[7]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[6]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[7]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[6]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[7]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[6]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[7]);

        break;
      }
      case "pc": {
        this.arregloJuegosFiltrado.push(this.arregloJuegos[0]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[1]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[0]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[1]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[0]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[1]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[0]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[1]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[0]);
        this.arregloJuegosFiltrado.push(this.arregloJuegos[1]);

        break;
      }
      default: {
        this.router.navigate(["not-found"]);

        break;
      }
    }



  }
  ejecutarEventoClick(a:number){
    window.location.href="comprar/"+a.toString();
  }


}
