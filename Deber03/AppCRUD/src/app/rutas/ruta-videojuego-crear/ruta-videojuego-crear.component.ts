import { Component, OnInit } from '@angular/core';
import {EmpresaJphInterface} from "../../servicios/http/interfaces/empresa-jph.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmpresaVieojuegoService} from "../../servicios/http/empresa-vieojuego.service";
import {DateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-ruta-videojuego-crear',
  templateUrl: './ruta-videojuego-crear.component.html',
  styleUrls: ['./ruta-videojuego-crear.component.scss']
})
export class RutaVideojuegoCrearComponent implements OnInit {
  idEmpresa = "0";
  empresaActual?: EmpresaJphInterface;
  formGroup?: FormGroup;

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly empresaVieojuegoService: EmpresaVieojuegoService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {
    this.dateAdapter.setLocale('es');
  }

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
    const buscarEmpresaPorId$ = this.empresaVieojuegoService.buscarEmpresaPorId(id);
    buscarEmpresaPorId$
      .subscribe(
        {
          next: (data) => {
            this.empresaActual = data;
            this.prepararFormulario();
          },
          error: (error) => {
            console.error(error);
            const ruta = ['/empresa'];
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
              value: '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(3),
            ]
          ),
          genero: new FormControl(
            {
              value:  '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(2),
            ]
          ),
          recaudacion: new FormControl(
            {
              value: '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(1),
              Validators.pattern("\\d+(,\\d+)?"),
            ]
          ),
          multijugador: new FormControl(
            {
              value: '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern

            ]
          ),
          fecha: new FormControl(
            {
              value: '',
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
    const ruta = ['/empresa',this.idEmpresa,'videojuegos'];
    this.router.navigate(ruta);

  }

  crearJuego(){
    const valoresACrear = this.prepararJuego();
    const actualizar$ = this.empresaVieojuegoService
      .crearVideojuegos(
        valoresACrear,
        this.idEmpresa
      );
    actualizar$
      .subscribe({
        next: (datos) => {
          const ruta = ['/empresa',this.idEmpresa,'videojuegos'];
          this.router.navigate(ruta);

        },
        error: (error) => {
          console.error({error})
        }
      });

  }

  prepararJuego() {
    if (this.formGroup) {
      const nombre = this.formGroup.get('nombre');
      const recaudacion = this.formGroup.get('recaudacion');
      const fecha = this.formGroup.get('fecha');
      const multijugador = this.formGroup.get('multijugador');
      const genero = this.formGroup.get('genero');




      if (nombre&&
        recaudacion&&
        fecha&&
        multijugador&&
        genero) {
        return {
          nombre: nombre.value,
          recaudacion:recaudacion.value,
          fechaDeSalida:fecha.value,
          generoPrincipal:genero.value,
          multijugador:multijugador.value
        }
      }
    }
    return {
      nombre: '',
      recaudacion:'',
      fechaDeSalida:'',
      generoPrincipal:'',
      multijugador:''
    }
  }

}
