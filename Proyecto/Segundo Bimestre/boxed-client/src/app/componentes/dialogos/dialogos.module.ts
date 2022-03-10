import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoAlmacenComponent } from './dialogo-almacen/dialogo-almacen.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DialogoAlmacenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    DialogoAlmacenComponent
  ]
})
export class DialogosModule { }
