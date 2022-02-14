import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaVideojuegosComponent} from "./rutas/ruta-videojuegos/ruta-videojuegos.component";
import {RutaEmpresasComponent} from "./rutas/ruta-empresas/ruta-empresas.component";
import {RutaEmpresaCrearComponent} from "./rutas/ruta-empresa-crear/ruta-empresa-crear.component";
import {RutaEmpresaEditarComponent} from "./rutas/ruta-empresa-editar/ruta-empresa-editar.component";
import {RutaVideojuegoCrearComponent} from "./rutas/ruta-videojuego-crear/ruta-videojuego-crear.component";
import {RutaVideojuegoEditarComponent} from "./rutas/ruta-videojuego-editar/ruta-videojuego-editar.component";
import {RutaForbiddenComponent} from "../../../../03-angular/ejemplo/src/app/rutas/ruta-forbidden/ruta-forbidden.component";

const routes: Routes = [
  {
    path:'empresas',
    component:RutaEmpresasComponent

  },
  {
    path:'empresa/crear',
    component:RutaEmpresaCrearComponent

  },
  {
    path:'empresa/editar/:id',
    component:RutaEmpresaEditarComponent

  },
  {
    path:'empresa/:id/videojuegos',
    component:RutaVideojuegosComponent

  },
  {
    path:'empresa/:id/videojuego/crear',
    component:RutaVideojuegoCrearComponent

  },
  {
    path:'empresa/:id/videojuego/editar/:idGame',
    component:RutaVideojuegoEditarComponent

  },
  {
    path:'**',
    component:RutaForbiddenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
