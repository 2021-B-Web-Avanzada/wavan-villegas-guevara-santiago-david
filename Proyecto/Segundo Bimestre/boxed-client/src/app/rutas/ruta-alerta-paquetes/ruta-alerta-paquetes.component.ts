import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BoxedService} from "../../servicios/http/boxed.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {paqueteInterface} from "../../servicios/http/interfaces/paquete.interface";
import {Almacen} from "../../servicios/http/interfaces/almacen";

@Component({
  selector: 'app-ruta-alerta-paquetes',
  templateUrl: './ruta-alerta-paquetes.component.html',
  styleUrls: ['./ruta-alerta-paquetes.component.scss']
})
export class RutaAlertaPaquetesComponent implements OnInit {
  userEmail?:string;
  formGroup?: FormGroup;
  arregloAlmacenes:Almacen[]=[];


  constructor(public afAuth: AngularFireAuth,
              private readonly boxedService:BoxedService,
              readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged((user) => {
      if (user && user.email) {
        this.userEmail = user.email;
        this.listarAlmacenes()
        this.prepararFormulario();
      }
    });
  }

  crearPaquete(){

    const valoresACrear = this.prepararPaquete();
    const crear$ = this.boxedService
      .crearPaquete(
        this.userEmail!!,
        valoresACrear

      );
    crear$
      .subscribe({
        next: (datos) => {
          this.prepararFormulario();



        },
        error: (error) => {
          console.error({error})
        }
      });


  }

  prepararPaquete() {
    if (this.formGroup) {
      const precio = this.formGroup.get('precio');
      const nombre = this.formGroup.get('nombre');
      const bodega = this.formGroup.get('bodega');

      if (nombre&&
        precio&&
        bodega) {
        return {
          precio: precio.value,
          nombre:nombre.value,
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
