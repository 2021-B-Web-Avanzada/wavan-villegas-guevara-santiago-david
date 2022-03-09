import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaRegistroComponent} from "./rutas/ruta-registro/ruta-registro.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPaquetesComponent} from "./rutas/ruta-paquetes/ruta-paquetes.component";
import {RutaAlertaPaquetesComponent} from "./rutas/ruta-alerta-paquetes/ruta-alerta-paquetes.component";
import {RutaPagosComponent} from "./rutas/ruta-pagos/ruta-pagos.component";
import {estaLogeadoGuard} from "./servicios/Auth/estaLogeado.guard";


const routes: Routes = [
  {
    path:'inicio',
    component:RutaInicioComponent
  },
  {
    path:'registro',
    component:RutaRegistroComponent
  },

  {
    path:'usuario',
    component:RutaUsuarioComponent,
    children:[
      {
        path:'paquetes',
        component:RutaPaquetesComponent,
      },
      {
        path:'alertarPaquete',
        component:RutaAlertaPaquetesComponent,
      },
      {
        path:'pagos',
        component:RutaPagosComponent,
      }
    ]
  },
  {
    path:'**',
    component:RutaNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
