import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BoxedService} from "../../servicios/http/boxed.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ruta-alerta-paquetes',
  templateUrl: './ruta-alerta-paquetes.component.html',
  styleUrls: ['./ruta-alerta-paquetes.component.scss']
})
export class RutaAlertaPaquetesComponent implements OnInit {
  userEmail?:string;
  formGroup?: FormGroup;

  constructor(public afAuth: AngularFireAuth,
              private readonly boxedService:BoxedService,
              readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user && user.email) {
        this.userEmail = user.email;
        this.prepararFormulario();
      }
    });
  }

  prepararFormulario(){
    this.formGroup = this.formBuilder
      .group(
        {
          nombre: new FormControl(
            {
              value: '' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.maxLength(30),

            ]
          ),
          precio: new FormControl(
            {
              value: '' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.maxLength(6),
              Validators.pattern("\\d+(,\\d+)?"),
            ]
          ),
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
