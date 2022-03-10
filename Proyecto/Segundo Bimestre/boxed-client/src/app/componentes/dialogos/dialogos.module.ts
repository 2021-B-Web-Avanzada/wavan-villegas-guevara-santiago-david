import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoAlmacenComponent } from './dialogo-almacen/dialogo-almacen.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    DialogoAlmacenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,

  ],
  exports:[
    DialogoAlmacenComponent,

  ]
})
export class DialogosModule { }
