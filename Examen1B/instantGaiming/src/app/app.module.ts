import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {BarraOpcionesModule} from "./componentes/barra-opciones/barra-opciones.module";
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RutaNotFoundComponent,
    RutaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarraOpcionesModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
