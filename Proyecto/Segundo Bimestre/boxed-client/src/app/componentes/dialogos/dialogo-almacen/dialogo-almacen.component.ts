import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Almacen} from "../../../servicios/http/interfaces/almacen";
import {BoxedService} from "../../../servicios/http/boxed.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialogo-almacen',
  templateUrl: './dialogo-almacen.component.html',
  styleUrls: ['./dialogo-almacen.component.scss']
})
export class DialogoAlmacenComponent implements OnInit {
  formGroup?: FormGroup;
  arregloAlmacenes:Almacen[]=[];

  constructor(private readonly boxedService:BoxedService,
              readonly formBuilder: FormBuilder,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.listarAlmacenes();
    this.prepararFormulario();

  }
  listarAlmacenes() {
    this.boxedService.listarAlmacenes()
      .subscribe({
          next: (datos) => { // try then
            this.arregloAlmacenes = datos;
          },
          error: (error) => { // catch
            console.error({error});

          },
        }
      )

  }
  acceder(){

  }

  prepararBodega() {
    if (this.formGroup) {

      const bodega = this.formGroup.get('bodega');

      if (
        bodega) {
        return {
          idAlmacen:bodega.value

        }
      }
    }
    return {
      precio: '',
      nombre:'',
      idAlmacen:''
    }
  }

  prepararFormulario(){
    this.formGroup = this.formBuilder
      .group(
        {

          bodega: new FormControl(
            {
              value: '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern

            ]
          )
        }
      );
  }

}
