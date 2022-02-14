import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserJPHService} from '../../servicios/http/user-jph.service';
import {UserJphInterface} from '../../servicios/http/interfaces/user-jph.interface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ModalEjemploComponent} from '../../componentes/modales/modal-ejemplo/modal-ejemplo.component';

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {

  idUsuario = 0;
  usuarioActual?: UserJphInterface;
  formGroup?: FormGroup;
  valorKnob = 30;
  items = [
    {
      label: 'Update', icon: 'pi pi-refresh', command: () => {
        console.log('Hola')
      }
    },
    {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ];

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userJPHService: UserJPHService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    public dialog: MatDialog
  ) {
  }

  abrirDialogo() {
    const referenciaDialogo = this.dialog.open(
      ModalEjemploComponent,
      {
        disableClose: true,
        data: {
          animal: 'panda',
        },
      }
    );
    const despuesCerrado$ = referenciaDialogo.afterClosed();
    despuesCerrado$
      .subscribe(
        (datos) => {
          console.log(datos);
        }
      );
  }

  guardar() {
    console.log('GUARDAR')
  }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe({
        next: (parametrosRuta) => {
          console.log(parametrosRuta);
          this.idUsuario = +parametrosRuta['idUsuario'];
          this.buscarUsuario(this.idUsuario);
        }
      })
  }

  buscarUsuario(id: number) {
    const buscarUsuarioPorId$ = this.userJPHService.buscarUno(id);
    buscarUsuarioPorId$
      .subscribe(
        {
          next: (data) => {
            this.usuarioActual = data;
            this.prepararFormulario();
          },
          error: (error) => {
            console.error(error)
          }
        }
      )
  }

  prepararFormulario() {
    this.formGroup = this.formBuilder
      .group(
        {
          email: new FormControl( // [''], [Validors.required]
            {
              value: this.usuarioActual ? this.usuarioActual.email : '',
              disabled: false
            },
            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(3),
            ]
          ),
          esAdministrador: new FormControl(true)
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

  prepararObjeto() {
    if (this.formGroup) {
      const email = this.formGroup.get('email')
      if (email) {
        return {
          email: email.value,
        }
      }
    }
    return {
      email: '',
    }
  }

  actualizarUsuario() {
    if (this.usuarioActual) {
      const valoresAActualizar = this.prepararObjeto();
      const actualizar$ = this.userJPHService
        .actualizarPorId(
          this.usuarioActual.id,
          valoresAActualizar
        );
      actualizar$
        .subscribe({
          next: (datos) => {
            console.log({datos});
            const url = ['/app', 'usuario'];
            this.router.navigate(url);
          },
          error: (error) => {
            console.error({error})
          }
        });
    }
  }

}
