import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoJuegosComponent } from './catalogo-juegos/catalogo-juegos.component';
import {BarraOpcionesComponent} from "../barra-opciones/barra-opciones/barra-opciones.component";



@NgModule({
  declarations: [
    CatalogoJuegosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CatalogoJuegosComponent
  ]
})
export class CatalogoJuegosModule { }
