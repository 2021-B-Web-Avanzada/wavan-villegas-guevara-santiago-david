import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaSalaJuegoComponent} from "./ruta-sala-juego/ruta-sala-juego.component";
import {RutaNotFoundComponent} from "./ruta-not-found/ruta-not-found.component";


const routes: Routes = [
  {
    path:'juego',
    component:RutaSalaJuegoComponent

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
