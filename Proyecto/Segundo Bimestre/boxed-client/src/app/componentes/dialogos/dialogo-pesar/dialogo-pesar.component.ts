import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BoxedService} from "../../../servicios/http/boxed.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogoAlmacenComponent} from "../dialogo-almacen/dialogo-almacen.component";
import {paqueteInterface} from "../../../servicios/http/interfaces/paquete.interface";

@Component({
  selector: 'app-dialogo-pesar',
  templateUrl: './dialogo-pesar.component.html',
  styleUrls: ['./dialogo-pesar.component.scss']
})
export class DialogoPesarComponent implements OnInit {
  formGroup?: FormGroup;

  constructor(private readonly boxedService:BoxedService,
              readonly formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<DialogoPesarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {paquete: paqueteInterface,id:number,almacen:string}

              ) { }

  ngOnInit(): void {
    this.prepararFormulario();
  }
  prepararFormulario(){
    this.formGroup = this.formBuilder
      .group(
        {
          precio: new FormControl(
            {
              value: '' ,
              disabled: false
            },
            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.maxLength(6),
              Validators.pattern("[0-9]{1,}\\.{1}[0-9]{1,2}"),
            ]
          ),

        }
      );
  }
  prepararPeso() {
    if (this.formGroup) {
      const peso = this.formGroup.get('precio');

      if (peso
        ) {
        return {
          peso: peso.value,

        }
      }
    }
    return {
      peso: ''
    }
  }
  mandarPeso(){
    var peso=this.prepararPeso().peso;
    const mandarPesoPaquete$ = this.boxedService.registrarPesoPaquete(this.data.almacen,
      this.data.paquete.id!,
      peso)
    mandarPesoPaquete$
      .subscribe(
        {
          next: (data) => {
            this.dialogRef.close({number:this.data.id});

          },
          error: (error) => {

          }

        }

      );

  }

}
