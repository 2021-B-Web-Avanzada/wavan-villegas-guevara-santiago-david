import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaRegistroComponent} from "./rutas/ruta-registro/ruta-registro.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPaquetesComponent} from "./rutas/ruta-paquetes/ruta-paquetes.component";
import {RutaAlertaPaquetesComponent} from "./rutas/ruta-alerta-paquetes/ruta-alerta-paquetes.component";
import {RutaPagosComponent} from "./rutas/ruta-pagos/ruta-pagos.component";
import {esUsuario} from "./servicios/Auth/esUsuario";
import {RutaOperadorComponent} from "./rutas/operador/ruta-operador/ruta-operador.component";
import {esOperador} from "./servicios/Auth/esOperador";
import {RutaEmpacarComponent} from "./rutas/operador/ruta-empacar/ruta-empacar.component";
import {RutaPaquetesSalidaComponent} from "./rutas/operador/ruta-paquetes-salida/ruta-paquetes-salida.component";
import {RutaPesarPaqueteComponent} from "./rutas/operador/ruta-pesar-paquete/ruta-pesar-paquete.component";


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
    canActivate:[esUsuario],
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
    path:'operador/:idAlmacen',
    component:RutaOperadorComponent,
    canActivate:[esOperador],
    children:[
      {
        path:'empacar',
        component:RutaEmpacarComponent,
      },
      {
        path:'paquetesSalida',
        component:RutaPaquetesSalidaComponent,
      },
      {
        path:'pesar',
        component:RutaPesarPaqueteComponent,
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
