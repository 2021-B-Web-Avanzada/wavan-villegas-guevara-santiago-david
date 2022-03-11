import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {paqueteInterface} from "../../../servicios/http/interfaces/paquete.interface";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {validadorCedula} from "../../../validadores";
import {BoxedService} from "../../../servicios/http/boxed.service";

@Component({
  selector: 'app-dialogo-registro-pago',
  templateUrl: './dialogo-registro-pago.component.html',
  styleUrls: ['./dialogo-registro-pago.component.scss']
})
export class DialogoRegistroPagoComponent implements OnInit {
  formGroup = this.formBuilder.group({
    numeroTarjeta: new FormControl('',[
      Validators.required,
      Validators.min(16)
    ]),
    codigoTarjeta: new FormControl('',[
      Validators.required,
      Validators.min(3)
    ]),
    nombrePropietario: new FormControl('',[
      Validators.required
    ]),
    fechaExp: new FormControl('',[
      Validators.required
    ])
  })
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {emailUsuario:string, paquete:paqueteInterface, posicion:number},
    private formBuilder:FormBuilder,
    private readonly apiService:BoxedService,
    public referenciaDialogo: MatDialogRef<DialogoRegistroPagoComponent>
  ) { }

  ngOnInit(): void {
  }

  registrarPago(){
    this.apiService.registrarPagoPaquete(this.data.emailUsuario,this.data.paquete.id!!)
      .subscribe({
        next: date =>{
          this.referenciaDialogo.close({pagado:true, posicion: this.data.posicion})
        }
        }
      );
  }

}
