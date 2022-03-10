import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

import {BoxedService} from "../../servicios/http/boxed.service";

declare var $:any;

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  userName?:string;

  letra="";

  constructor(public afAuth: AngularFireAuth,
              private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;

        if(user.email){

          this.letra=localStorage.getItem('nombre')!!.charAt(0);


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
    localStorage.removeItem('logeado');
    localStorage.removeItem('admin');
    localStorage.removeItem('nombre');

    const ruta = ['/inicio'];
    this.router.navigate(ruta);

  }

}
