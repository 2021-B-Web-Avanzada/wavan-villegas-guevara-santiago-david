import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";

const routes: Routes = [

  {
    path: 'not-found',
    component:RutaNotFoundComponent
  },
  {
    path:'home/:parametro',
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
