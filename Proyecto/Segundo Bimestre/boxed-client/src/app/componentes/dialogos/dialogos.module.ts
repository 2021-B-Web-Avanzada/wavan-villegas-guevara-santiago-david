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
import { DialogoRegistroPagoComponent } from './dialogo-registro-pago/dialogo-registro-pago.component';
import { DialogoCambiarEstadoComponent } from './dialogo-cambiar-estado/dialogo-cambiar-estado.component';




@NgModule({
  declarations: [
    DialogoAlmacenComponent,
    DialogoEstadosPaqueteComponent,
    DialogoPesarComponent,
    DialogoRegistroPagoComponent,
    DialogoCambiarEstadoComponent
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
    DialogoRegistroPagoComponent,
    DialogoCambiarEstadoComponent,
  ]
})
export class DialogosModule { }
