import { Component, OnInit } from '@angular/core';
import {EmpresaJphInterface} from "../../servicios/http/interfaces/empresa-jph.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {videojuegoJphInterface} from "../../servicios/http/interfaces/videojuego-jph.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {EmpresaVieojuegoService} from "../../servicios/http/empresa-vieojuego.service";

@Component({
  selector: 'app-ruta-videojuego-editar',
  templateUrl: './ruta-videojuego-editar.component.html',
  styleUrls: ['./ruta-videojuego-editar.component.scss']
})
export class RutaVideojuegoEditarComponent implements OnInit {
  idEmpresa = "0";
  idJuego = "0";
  juegoActual?: videojuegoJphInterface;
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
          this.idJuego = parametrosRuta['idGame'];
          this.buscarJuego();

        }
      })
  }
  buscarJuego() {
    const buscarJuegoPorId$ = this.empresaVieojuegoService.buscarJuegoPorId(this.idEmpresa,this.idJuego);
    buscarJuegoPorId$
      .subscribe(
        {
          next: (data) => {
            this.juegoActual = data;
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
              value: this.juegoActual ? this.juegoActual.nombre : '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(3),
            ]
          ),
          genero: new FormControl(
            {
              value: this.juegoActual ? this.juegoActual.generoPrincipal : '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(2),
            ]
          ),
          recaudacion: new FormControl(
            {
              value: this.juegoActual ? this.juegoActual.recaudacion : '',
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
              value: this.juegoActual ? this.juegoActual.multijugador : '',
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern

            ]
          ),
          fecha: new FormControl(
            {
              value: this.juegoActual ? this.juegoActual.fechaDeSalida : '',
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

  editarJuego(){
    const valoresAEditar = this.prepararJuego();
    const actualizar$ = this.empresaVieojuegoService
      .editarJuegoPorId(
        valoresAEditar,
        this.idEmpresa,
        this.idJuego
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



}
