import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaForbiddenComponent} from "./rutas/ruta-forbidden/ruta-forbidden.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaAppComponent} from "./rutas/ruta-app/ruta-app.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPostComponent} from "./rutas/ruta-post/ruta-post.component";
import {EstaLogeadoGuard} from "./servicios/auth/esta-logeado.guard";
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";

//login
//inicio
//app
    //usuario
    //post
//configuracion

const routes: Routes = [
  {
    path: 'login',
    canActivate:[EstaLogeadoGuard],
    component: RutaLoginComponent,
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent,
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent,
  },


  {
    path: 'lazy-inventario',
    loadChildren:()=>import("./modulos/modulo-inventario/modulo-inventario.module")
      .then(m=>m.ModuloInventarioModule)
  },





  {
    path: 'inicio',
    component: RutaInicioComponent,
  },
  {
    path: 'app',
    component: RutaAppComponent,
    children:[
      {
        path: 'usuario',
        component:RutaUsuarioComponent,
      },
      {
        path: 'post',
        component:RutaPostComponent,
        canActivate:[EsAdministradorGuard],

      }
    ]
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: RutaNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
