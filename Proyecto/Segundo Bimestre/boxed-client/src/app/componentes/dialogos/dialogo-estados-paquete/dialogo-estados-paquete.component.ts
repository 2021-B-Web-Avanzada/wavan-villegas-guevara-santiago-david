import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {BoxedService} from "../../../servicios/http/boxed.service";
import {Estado} from "../../../servicios/http/interfaces/estado";
import {paqueteInterface} from "../../../servicios/http/interfaces/paquete.interface";
import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-dialogo-estados-paquete',
  templateUrl: './dialogo-estados-paquete.component.html',
  styleUrls: ['./dialogo-estados-paquete.component.scss']
})
export class DialogoEstadosPaqueteComponent implements OnInit {
  estadosPaquete:Estado[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data:{emailUsuario:string, paquete:paqueteInterface},
    private readonly apiService:BoxedService
  ) { }

  ngOnInit(): void {
    this.consultarEstadosPaquete()
  }

  consultarEstadosPaquete(){
    this.apiService.listarEstadosPaquetesPorUsuario(
      this.data.emailUsuario,
      this.data.paquete.id!!
    )
      .subscribe({
        next: (data) =>{
          this.estadosPaquete = data;
      }
      })
  }

}
