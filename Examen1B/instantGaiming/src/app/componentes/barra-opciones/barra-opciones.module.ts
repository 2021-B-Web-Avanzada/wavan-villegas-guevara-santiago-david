import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraOpcionesComponent } from './barra-opciones/barra-opciones.component';
import { NgbDropdown} from '@ng-bootstrap/ng-bootstrap';



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
