import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaComprarComponent} from "./rutas/ruta-comprar/ruta-comprar.component";

const routes: Routes = [

  {
    path: 'not-found',
    component:RutaNotFoundComponent
  },
  {
    path: 'comprar/:juego',
    component:RutaComprarComponent
  },
  {
    path:'home/:filtro',
    component:RutaHomeComponent
  },
  {
    path: '**',
    component:RutaNotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
