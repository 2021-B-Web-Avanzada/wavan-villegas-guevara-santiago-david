import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BoxedService} from "../../../servicios/http/boxed.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {paqueteInterface} from "../../../servicios/http/interfaces/paquete.interface";
import {Estado} from "../../../servicios/http/interfaces/estado";

@Component({
  selector: 'app-dialogo-cambiar-estado',
  templateUrl: './dialogo-cambiar-estado.component.html',
  styleUrls: ['./dialogo-cambiar-estado.component.scss']
})
export class DialogoCambiarEstadoComponent implements OnInit {
  formGroup?: FormGroup;
  mensaje='';
  nuevoEstado: 'bodega' | 'despachado' | 'empacado' | 'en-aduana' | 'reparto'="bodega";

  constructor(private readonly boxedService:BoxedService,
              readonly formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<DialogoCambiarEstadoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {paquete: paqueteInterface,id:number,almacen:string}) { }

  ngOnInit(): void {
    this.prepararFormulario();
    switch(this.data.paquete.ultimoEstado) {
      case 'bodega': {
        this.mensaje='Empacado';
        this.nuevoEstado='empacado';
        break;
      }
      case 'empacado': {
        this.mensaje='Despachado';
        this.nuevoEstado='despachado';
        //statements;
        break;
      }
      case 'despachado': {
        this.mensaje='Enviado a aduana';
        this.nuevoEstado='en-aduana';
        break;
      }
      case 'en-aduana': {
        this.mensaje='Enviado a reparto';
        this.nuevoEstado='reparto';
        break;
      }

    }

  }
  prepararFormulario(){
    this.formGroup = this.formBuilder
      .group(
        {
          comentario: new FormControl(
            {
              value: '' ,
              disabled: false
            },
            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.maxLength(150),

            ]
          ),

        }
      );
  }

  preparaEstado() {
    if (this.formGroup) {
      const comentario = this.formGroup.get('comentario');

      if (comentario
      ) {
        return {

          comentario:comentario.value

        }
      }
    }
    return {
      peso: ''
    }
  }
  mandarEstado(){
    var estado=this.preparaEstado();
    var enviarEstado:Estado={nombre:this.nuevoEstado,comentario:estado.comentario}
    const mandarEstado$ = this.boxedService.registrarNuevoEstadoAlmacen(this.data.almacen,this.data.paquete.id!,enviarEstado)
    mandarEstado$
      .subscribe(
        {
          next: (data) => {
            this.dialogRef.close({number:this.data.id,estado:this.nuevoEstado});

          },
          error: (error) => {

          }

        }

      );




  }

}
