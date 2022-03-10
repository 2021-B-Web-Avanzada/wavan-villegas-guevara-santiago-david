import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BoxedService} from "../../servicios/http/boxed.service";
import {usuarioInterface} from "../../servicios/http/interfaces/usuario-interface";
import {Router} from "@angular/router";
import {operadorInterface} from "../../servicios/http/interfaces/operador.interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogoAlmacenComponent} from "../../componentes/dialogos/dialogo-almacen/dialogo-almacen.component";



@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {
  formGroup?: FormGroup;
  mensaje='';

  constructor(private readonly formBuilder: FormBuilder,
              public afAuth: AngularFireAuth,
              private readonly boxedService:BoxedService,
              private readonly router: Router,
              private dialog: MatDialog


             ) {

  }

  ngOnInit(): void {




    this.prepararFormulario();



  }
  prepararFormulario(){
    this.formGroup = this.formBuilder
      .group(
        {
          correo: new FormControl(
            {
              value: '' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(5),
              Validators.email,
            ]
          ),
          contrasena: new FormControl(
            {
              value: '' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(6),
            ]
          )
        }
      );
  }

  prepararInicio() {
    if (this.formGroup) {
      const correo = this.formGroup.get('correo');
      const contrasena = this.formGroup.get('contrasena');

      if (correo&&
        contrasena) {
        return {
          correo: correo.value,
          contrasena:contrasena.value,

        }
      }
    }
    return {
      correo: '',
      contrasena:'',
    }
  }

  iniciarSesion(){

    const datosUsuario = this.prepararInicio();

    this.afAuth.signInWithEmailAndPassword(datosUsuario.correo, datosUsuario.contrasena)
      .then((userCredential) => {

        // Signed in
        const user = userCredential.user;

        localStorage.setItem('logeado', 'si');
        var usuario!:usuarioInterface;


        const buscarUsuarioPorEmail$ = this.boxedService.buscarUsuarioPorEmail(user?.email!!);
        buscarUsuarioPorEmail$
          .subscribe(
            {
              next: (data) => {

                usuario = data;
                localStorage.setItem('admin', 'no');
                localStorage.setItem('nombre', usuario.nombre);
                const ruta = ['/usuario','paquetes'];
                this.router.navigate(ruta);

              },
              error: (error) => {

              }


            });
        if(usuario===undefined){
          const buscarOperadorPorEmail$ = this.boxedService.buscarOperadorPorEmail(user?.email!!);
          buscarOperadorPorEmail$
            .subscribe(
              {
                next: (data) => {

                  var operador:operadorInterface;
                  operador = data;
                  localStorage.setItem('admin', 'si');
                  localStorage.setItem('nombre', operador.nombreUsuario);
                  this.abriDialogo();



                },
                error: (error) => {




                }


              });


        }
      })

      .catch((error) => {
        this.mensaje="El correo o contraseña son incorrectos";
      });

  }
  abriDialogo() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation=true;



    this.dialog.open(DialogoAlmacenComponent, dialogConfig);
  }




}
