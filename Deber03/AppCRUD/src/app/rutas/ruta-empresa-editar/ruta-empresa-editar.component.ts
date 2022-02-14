import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmpresaJphInterface} from "../../servicios/http/interfaces/empresa-jph.interface";

import {ActivatedRoute, Router} from "@angular/router";
import {EmpresaVieojuegoService} from "../../servicios/http/empresa-vieojuego.service";

@Component({
  selector: 'app-ruta-empresa-editar',
  templateUrl: './ruta-empresa-editar.component.html',
  styleUrls: ['./ruta-empresa-editar.component.scss']
})
export class RutaEmpresaEditarComponent implements OnInit {
  idEmpresa = "0";
  empresaActual?: EmpresaJphInterface;
  formGroup?: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly empresaVieojuegoService: EmpresaVieojuegoService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe({
        next: (parametrosRuta) => {
          console.log(parametrosRuta);
          this.idEmpresa = parametrosRuta['id'];
          this.buscarEmpresa(this.idEmpresa);

        }
      })
  }
  buscarEmpresa(id: string) {
    const buscarUsuarioPorId$ = this.empresaVieojuegoService.buscarEmpresaPorId(id);
    buscarUsuarioPorId$
      .subscribe(
        {
          next: (data) => {
            this.empresaActual = data;
            this.prepararFormulario();
          },
          error: (error) => {
            console.error(error);
            const ruta = ['/empresas'];
            this.router.navigate(ruta);
          }
        }
      )
  }
  prepararFormulario() {
    this.formGroup = this.formBuilder
      .group(
        {
          nombre: new FormControl(
            {
              value: this.empresaActual ? this.empresaActual.nombre : '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(3),
            ]
          ),
          pais: new FormControl(
            {
              value: this.empresaActual ? this.empresaActual.pais : '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(2),
            ]
          ),
          trabajadores: new FormControl(
            {
              value: this.empresaActual ? this.empresaActual.numeroTrabajadores : '',
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
              value: this.empresaActual ? this.empresaActual.independiente : '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern

            ]
          ),
          fecha: new FormControl(
            {
              value: this.empresaActual ? this.empresaActual.fechaDeFundacion : '',
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
  regresar(){
    const ruta = ['/empresas'];
    this.router.navigate(ruta);

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
  actualizarEmpresa() {
    var confirmacion = confirm("¿Está seguro de que desea actualizar la empresa: " + this.empresaActual?.nombre + '?')
    if (confirmacion == true) {
      const valoresAActulizar = this.prepararEmpresa();
      const actualizar$ = this.empresaVieojuegoService
        .editarEmpresaPorId(
          valoresAActulizar,
          this.idEmpresa
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
  }



}
