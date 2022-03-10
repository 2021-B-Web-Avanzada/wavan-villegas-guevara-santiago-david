import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoAlmacenComponent } from './dialogo-almacen/dialogo-almacen.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DialogoEstadosPaqueteComponent } from './dialogo-estados-paquete/dialogo-estados-paquete.component';
import {MatStepperModule} from "@angular/material/stepper";
import { DialogoPesarComponent } from './dialogo-pesar/dialogo-pesar.component';
import {MatDialogActions, MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";




@NgModule({
  declarations: [
    DialogoAlmacenComponent,
    DialogoEstadosPaqueteComponent,
    DialogoPesarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports:[
    DialogoAlmacenComponent,
    DialogoEstadosPaqueteComponent,
    DialogoPesarComponent,
  ]
})
export class DialogosModule { }
