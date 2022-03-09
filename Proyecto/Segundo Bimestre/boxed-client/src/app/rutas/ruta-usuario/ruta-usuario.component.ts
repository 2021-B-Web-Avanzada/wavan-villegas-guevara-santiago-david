import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

import {BoxedService} from "../../servicios/http/boxed.service";
import {AuthService} from "../../servicios/Auth/auth.service";

declare var $:any;

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,
              private readonly router: Router,
              private readonly authService: AuthService,

              private readonly boxedService:BoxedService) { }

  ngOnInit(): void {
    this.authService.estaLogeado=true;
    this.authService.usuario=true;

  }
  jquerry(){
    $(this).toggleClass("fa-times");
    $(".nav-menus").toggleClass("active");
  }
  cerrarSesion(){
    this.afAuth.signOut();
    const ruta = ['/inicio'];
    this.router.navigate(ruta);


  }

}
