import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-barra-opciones',
  templateUrl: './barra-opciones.component.html',
  styleUrls: ['./barra-opciones.component.scss']
})
export class BarraOpcionesComponent implements OnInit {
  mostrarBarraOpciones=false;

  constructor(private router: Router,private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {

  }
  cambiarOcultarOpciones(){
    this.mostrarBarraOpciones=!this.mostrarBarraOpciones;
  }
  ejecutarEventoClick(){
    this.router.navigate(["home"]);

  }



}
