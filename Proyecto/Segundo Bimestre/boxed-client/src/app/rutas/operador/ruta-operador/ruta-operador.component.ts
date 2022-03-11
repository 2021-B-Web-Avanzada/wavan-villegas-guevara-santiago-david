import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {ActivatedRoute, Router} from "@angular/router";
import {operadorInterface} from "../../../servicios/http/interfaces/operador.interface";
import {BoxedService} from "../../../servicios/http/boxed.service";
import {Almacen} from "../../../servicios/http/interfaces/almacen";
declare var $:any;

@Component({
  selector: 'app-ruta-operador',
  templateUrl: './ruta-operador.component.html',
  styleUrls: ['./ruta-operador.component.scss']
})
export class RutaOperadorComponent implements OnInit {
  almacenId!:string;
  operadorName?:string;
  letra="";
  almacen!:Almacen;



  constructor(
    public afAuth: AngularFireAuth,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly boxedService:BoxedService,
  ) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        if(user.email){
          this.letra=localStorage.getItem('nombre')!!.charAt(0);
          const parametroRuta$ = this.activatedRoute.params
          parametroRuta$
            .subscribe({
              next: (parametrosRuta) => {


                this.almacenId=parametrosRuta['idAlmacen'];

                const buscarAlmacenPorId$ = this.boxedService.buscarAlmacenPorId(this.almacenId);
                buscarAlmacenPorId$
                  .subscribe(
                    {
                      next: (data) => {
                        this.almacen=data;

                      }
                    });

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
    localStorage.removeItem('logeado');
    localStorage.removeItem('admin');
    localStorage.removeItem('nombre');

    const ruta = ['/inicio'];
    this.router.navigate(ruta);

  }

}
