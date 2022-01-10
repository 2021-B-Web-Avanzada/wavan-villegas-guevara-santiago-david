import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraOpcionesComponent } from './barra-opciones/barra-opciones.component';




@NgModule({
  declarations: [
    BarraOpcionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarraOpcionesComponent
  ]
})
export class BarraOpcionesModule { }
