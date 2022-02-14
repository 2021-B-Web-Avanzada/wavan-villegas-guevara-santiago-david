import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RutaEmpresaCrearComponent } from './rutas/ruta-empresa-crear/ruta-empresa-crear.component';
import { RutaVideojuegoCrearComponent } from './rutas/ruta-videojuego-crear/ruta-videojuego-crear.component';
import { RutaVideojuegoEditarComponent } from './rutas/ruta-videojuego-editar/ruta-videojuego-editar.component';
import { RutaEmpresaEditarComponent } from './rutas/ruta-empresa-editar/ruta-empresa-editar.component';
import { RutaEmpresasComponent } from './rutas/ruta-empresas/ruta-empresas.component';
import { RutaVideojuegosComponent } from './rutas/ruta-videojuegos/ruta-videojuegos.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,

    RutaEmpresaCrearComponent,
    RutaVideojuegoCrearComponent,
    RutaVideojuegoEditarComponent,
    RutaEmpresaEditarComponent,
    RutaEmpresasComponent,
    RutaVideojuegosComponent,
    RutaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    FormsModule,

    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
