import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import {AngularFireModule} from "@angular/fire/compat";
import { RutaRegistroComponent } from './rutas/ruta-registro/ruta-registro.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {HttpClientModule} from "@angular/common/http";
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaPaquetesComponent } from './rutas/ruta-paquetes/ruta-paquetes.component';
import { RutaAlertaPaquetesComponent } from './rutas/ruta-alerta-paquetes/ruta-alerta-paquetes.component';
import { RutaPagosComponent } from './rutas/ruta-pagos/ruta-pagos.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';

import {estaLogeadoGuard} from "./servicios/Auth/estaLogeado.guard";
import {esOperadorGuard} from "./servicios/Auth/esOperador.guard";
import {AuthService} from "./servicios/Auth/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaRegistroComponent,
    RutaUsuarioComponent,
    RutaPaquetesComponent,
    RutaAlertaPaquetesComponent,
    RutaPagosComponent,
    RutaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [ estaLogeadoGuard,esOperadorGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
