import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {paqueteInterface} from "../../../servicios/http/interfaces/paquete.interface";

@Component({
  selector: 'app-dialogo-registro-pago',
  templateUrl: './dialogo-registro-pago.component.html',
  styleUrls: ['./dialogo-registro-pago.component.scss']
})
export class DialogoRegistroPagoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {emailUsuario:string, paquete:paqueteInterface}
  ) { }

  ngOnInit(): void {
  }

}
