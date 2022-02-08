import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import {AuthServices} from "./servicios/auth/auth.services";
import {EstaLogeadoGuard} from "./servicios/auth/esta-logeado.guard";
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";
import { RutaReporteComponent } from './modulos/modulo-inventario/rutas/ruta-reporte/ruta-reporte.component';
import { RutaBodegaComponent } from './modulos/modulo-inventario/rutas/ruta-bodega/ruta-bodega.component';
import {BannerImagenesComponent} from "./componentes/banner-imagenes/banner-imagenes/banner-imagenes.component";
import {BannerImagenesModule} from "./componentes/banner-imagenes/banner-imagenes.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RutaUsuarioPerfilComponent } from './rutas/ruta-usuario-perfil/ruta-usuario-perfil.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {KnobModule} from "primeng/knob";
import {SplitButtonModule} from "primeng/splitbutton";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import { RutaEjemploComponent } from './rutas/ruta-ejemplo/ruta-ejemplo.component';
import { ModalEjemploComponent } from './componentes/modales/modal-ejemplo/modal-ejemplo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {SocketIoModule} from "ngx-socket-io";
import {NgbButtonsModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaInicioComponent,
    RutaUsuarioComponent,
    RutaPostComponent,
    RutaAppComponent,
    RutaReporteComponent,
    RutaBodegaComponent,
    RutaUsuarioPerfilComponent,
    RutaEjemploComponent,
    ModalEjemploComponent
  ],
  //app.module.ts
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    KnobModule,
    KnobModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    NgbButtonsModule,
    SocketIoModule.forRoot({
      url:'ws:http://localhost:8080',
      options:{

      }
    })

  ],
  providers: [AuthServices,
  EstaLogeadoGuard,
  EsAdministradorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
