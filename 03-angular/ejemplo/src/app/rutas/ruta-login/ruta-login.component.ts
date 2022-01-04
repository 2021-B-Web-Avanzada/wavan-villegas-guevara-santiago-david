import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  mostrarSegundoBanner=true;
arregloUsuarios=[
  {
    id:1,
    nombre:'Santiago',
    color:'#00BCFF',
    linkImg:'https://as01.epimg.net/meristation/imagenes/2015/09/08/noticia/1441695600_616618_1532446960_miniatura_normal.jpg',
    link:'https://www.facebook.com/'
  },
  {
    id:2,
    nombre:'David',
    color:'#007AFF',
    linkImg: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',
    link: 'https://www.youtube.com/'
  }
]
  constructor() { }

  ngOnInit(): void {
  }
  cambiarOcultarBanner(){
    this.mostrarSegundoBanner=!this.mostrarSegundoBanner;
  }

}
