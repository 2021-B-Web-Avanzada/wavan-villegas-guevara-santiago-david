import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoAlmacenComponent } from './dialogo-almacen/dialogo-almacen.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DialogoEstadosPaqueteComponent } from './dialogo-estados-paquete/dialogo-estados-paquete.component';
import {MatStepperModule} from "@angular/material/stepper";



@NgModule({
  declarations: [
    DialogoAlmacenComponent,
    DialogoEstadosPaqueteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  exports:[
    DialogoAlmacenComponent,
    DialogoEstadosPaqueteComponent,
  ]
})
export class DialogosModule { }
