import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

import {BoxedService} from "../../servicios/http/boxed.service";
import {AuthService} from "../../servicios/Auth/auth.service";
import {usuarioInterface} from "../../servicios/http/interfaces/usuario-interface";

declare var $:any;

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  userEmail?:string;
  userName?:string;
  autenticado=false;
  letra="";

  constructor(public afAuth: AngularFireAuth,
              private readonly router: Router,
              private readonly authService: AuthService,
              private readonly boxedService:BoxedService) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;

        if(user.email){
          this.userEmail=user.email;
          var usuario:usuarioInterface;

          const buscarUsuarioPorEmail$ = this.boxedService.buscarUsuarioPorEmail(user?.email!!);
          buscarUsuarioPorEmail$
            .subscribe(
              {
                next: (data) => {
                  usuario = data;
                  this.userName=usuario.nombre;
                  this.autenticado=true;
                  this.letra=this.userName.charAt(0);
                },
                error: (error) => {
                  const ruta = ['/inicio'];
                  this.router.navigate(ruta);


                }

              })
        }


      } else {
        const ruta = ['/inicio'];
        this.router.navigate(ruta);

      }
    });


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
