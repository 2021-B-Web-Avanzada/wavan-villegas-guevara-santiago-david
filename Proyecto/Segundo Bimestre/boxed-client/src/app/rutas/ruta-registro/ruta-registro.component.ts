import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {validadorCedula} from "../../validadores"
import {BoxedService} from "../../servicios/http/boxed.service";

@Component({
  selector: 'app-ruta-registro',
  templateUrl: './ruta-registro.component.html',
  styleUrls: ['./ruta-registro.component.scss']
})
export class RutaRegistroComponent implements OnInit {
  formGroup?: FormGroup;
  mensaje='';

  constructor(private readonly formBuilder: FormBuilder,
              public afAuth: AngularFireAuth,
              private readonly boxedService:BoxedService) { }

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
          ),
          nombre: new FormControl(
            {
              value: '' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(1),
              Validators.pattern("[A-Z\u00d1]{1}[a-zA-ZÀ-ÿ\u00f1\u00d1\\s]*$")
            ]
          ),
          apellido: new FormControl(
            {
              value: '' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              Validators.minLength(1),
              Validators.pattern("[A-Z\u00d1]{1}[a-zA-ZÀ-ÿ\u00f1\u00d1\\s]*$")
            ]
          ),

          cedula: new FormControl(
            {
              value: '' ,
              disabled: false
            },

            [
              Validators.required, // min, max, minLength maxLength, email, pattern
              validadorCedula



            ]
          ),
        }
      );
  }
  prepararRegistro() {
    if (this.formGroup) {
      const correo = this.formGroup.get('correo');
      const contrasena = this.formGroup.get('contrasena');
      const nombre = this.formGroup.get('nombre');
      const apellido = this.formGroup.get('apellido');
      const cedula = this.formGroup.get('cedula');

      if (correo&&
        contrasena&&
        nombre&&
        apellido&&
        cedula) {
        return {
          correo: correo.value,
          contrasena:contrasena.value,
          nombre:nombre.value,
          apellido:apellido.value,
          cedula:cedula.value,
        }
      }
    }
    return {
      correo: '',
      contrasena:'',
      nombre:'',
      apellido:'',
      cedula:'',
    }
  }

  registrarse(){
    const datosUsuario=this.prepararRegistro();
    this.afAuth.createUserWithEmailAndPassword(datosUsuario.correo,datosUsuario.contrasena)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user?.email&&user.uid){
          const crear$ = this.boxedService
            .crearUsuario(

              {
                correoElectronico: user.email,
                uid: user.uid,
                nombre: datosUsuario.nombre,
                apellido: datosUsuario.apellido,
                numCedula: datosUsuario.cedula,
              }
            );
          crear$
            .subscribe({
              next: (datos) => {


              },
              error: (error) => {
                console.error({error})
              }
            });
        }


        // ...
      })
      .catch((error) => {
        this.mensaje="Correo ya registrado"
        // ..
      });

  }

}




