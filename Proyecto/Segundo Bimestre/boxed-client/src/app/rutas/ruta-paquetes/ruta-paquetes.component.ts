import { Component, OnInit } from '@angular/core';

import {BoxedService} from "../../servicios/http/boxed.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {paqueteInterface} from "../../servicios/http/interfaces/paquete.interface";

@Component({
  selector: 'app-ruta-paquetes',
  templateUrl: './ruta-paquetes.component.html',
  styleUrls: ['./ruta-paquetes.component.scss']
})
export class RutaPaquetesComponent implements OnInit {
  arregloPaquetes:paqueteInterface[]=[];

  userEmail?:string;

  constructor(
    public afAuth: AngularFireAuth,
    private readonly boxedService:BoxedService,
  ) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user && user.email) {
        this.userEmail = user.email;
        this.buscarPaquetes(this.userEmail);
      }
    });
  }
  buscarPaquetes(email:string) {
    this.boxedService
      .listarPaquetesUsuario(email)
      .subscribe({
          next: (datos) => { // try then
            this.arregloPaquetes = datos;
            console.log(this.arregloPaquetes);

          },
          error: (error) => { // catch
            console.error({error});

          },
        }
      )

  }
  seguimientoPaquete(posicion:number){
    console.log(posicion);

  }



}
