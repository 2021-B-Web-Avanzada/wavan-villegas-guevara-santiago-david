import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaRegistroComponent} from "./rutas/ruta-registro/ruta-registro.component";

const routes: Routes = [
  {
    path:'inicio',
    component:RutaInicioComponent
  },
  {
    path:'registro',
    component:RutaRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
