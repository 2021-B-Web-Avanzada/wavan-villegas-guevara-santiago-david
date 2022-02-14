import { Component, OnInit } from '@angular/core';
import {DateAdapter} from "@angular/material/core";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmpresaVieojuegoService} from "../../servicios/http/empresa-vieojuego.service";




@Component({
  selector: 'app-ruta-empresa-crear',
  templateUrl: './ruta-empresa-crear.component.html',
  styleUrls: ['./ruta-empresa-crear.component.scss']
})
export class RutaEmpresaCrearComponent implements OnInit {
  formGroup?: FormGroup;
  valor?:string;


  constructor(
    private dateAdapter: DateAdapter<Date>,private readonly router: Router,
    private readonly empresaVieojuegoService: EmpresaVieojuegoService,
    private readonly formBuilder: FormBuilder,) {
    this.dateAdapter.setLocale('es');
  }

  ngOnInit(): void {

    this.prepararFormulario();


  }

  prepararFormulario() {
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
              Validators.minLength(3),
            ]
          ),
          pais: new FormControl(
            {
              value: '' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(2),
            ]
          ),
          trabajadores: new FormControl(
            {
              value: '' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(1),
              Validators.pattern("^[0-9]*$"),
            ]
          ),
          independiente: new FormControl(
            {
              value: 'true' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern

            ]
          ),
          fecha: new FormControl(
            {
              value: '12/2/2022' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern

            ]
          ),

        }
      );
    const cambio$ = this.formGroup.valueChanges;
    cambio$.subscribe({
      next: (valor) => {
        if (this.formGroup) {
          console.log(valor, this.formGroup);
          if (this.formGroup?.valid) {
            console.log('YUPI')
          } else {
            console.log(':(')
          }
        }
      }
    })
  }


  prepararEmpresa() {
    if (this.formGroup) {
      const nombre = this.formGroup.get('nombre');
      const numeroTrabajadores = this.formGroup.get('trabajadores');
      const fechaDeFundacion = this.formGroup.get('fecha');
      const pais = this.formGroup.get('pais');
      const independiente = this.formGroup.get('independiente');




      if (nombre&&
        numeroTrabajadores&&
        fechaDeFundacion&&
        pais&&
        independiente) {
        return {
          nombre: nombre.value,
          numeroTrabajadores:numeroTrabajadores.value,
          fechaDeFundacion:fechaDeFundacion.value,
          pais:pais.value,
          independiente:independiente.value
        }
      }
    }
    return {
      nombre: '',
      numeroTrabajadores:'',
      fechaDeFundacion:'',
      pais:'',
      independiente:''
    }
  }
  crearEmpresa(){
    const valoresACrear = this.prepararEmpresa();
    const actualizar$ = this.empresaVieojuegoService
      .crearEmpresa(
        valoresACrear
      );
    actualizar$
      .subscribe({
        next: (datos) => {
          const ruta = ['/empresas'];
          this.router.navigate(ruta);

        },
        error: (error) => {
          console.error({error})
        }
      });

  }


  regresar(){
    const ruta = ['/empresas'];
    this.router.navigate(ruta);

  }

}
