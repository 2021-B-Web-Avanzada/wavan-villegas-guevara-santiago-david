import { Component, OnInit } from '@angular/core';

import {AngularFireAuth} from "@angular/fire/compat/auth";
import {paqueteInterface} from "../../servicios/http/interfaces/paquete.interface";
import {BoxedService} from "../../servicios/http/boxed.service";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogoRegistroPagoComponent
} from "../../componentes/dialogos/dialogo-registro-pago/dialogo-registro-pago.component";

@Component({
  selector: 'app-ruta-pagos',
  templateUrl: './ruta-pagos.component.html',
  styleUrls: ['./ruta-pagos.component.scss']
})
export class RutaPagosComponent implements OnInit {
  arregloPaquetes:paqueteInterface[]=[];
  userEmail?:string;

  constructor(public afAuth: AngularFireAuth,
              private readonly boxedService:BoxedService,
              public dialog:MatDialog) { }

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
      .listarPaquetesConPagosPendientesPorUsuario(email)
      .subscribe({
          next: (datos) => { // try then
            this.arregloPaquetes = datos;
          },
          error: (error) => { // catch
            console.error({error});

          },
        }
      )

  }
  pagarPaquete(posicion:number){
    this.dialog.open(DialogoRegistroPagoComponent,{
      height: "50vh",
      width: "55vw",
      data: {
        emailUsuario: this.userEmail,
        paquete: this.arregloPaquetes[posicion]
      }
    })

  }

}
