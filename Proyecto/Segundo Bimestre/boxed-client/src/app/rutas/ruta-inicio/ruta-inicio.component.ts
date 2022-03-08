import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "@angular/fire/auth";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {
  formGroup?: FormGroup;
  mensaje='';

  constructor(private readonly formBuilder: FormBuilder,public afAuth: AngularFireAuth) {

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
        console.log(user?.email,user?.uid);
      })
      .catch((error) => {
        this.mensaje="El correo o contraseña son incorrectos";
      });

  }


}
