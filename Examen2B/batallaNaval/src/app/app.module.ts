import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaNotFoundComponent } from './ruta-not-found/ruta-not-found.component';
import { RutaSalaJuegoComponent } from './ruta-sala-juego/ruta-sala-juego.component';
import {SocketIoModule} from "ngx-socket-io";

@NgModule({
  declarations: [
    AppComponent,
    RutaNotFoundComponent,
    RutaSalaJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot({
      url: 'ws://localhost:8080',
      options: {

      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
