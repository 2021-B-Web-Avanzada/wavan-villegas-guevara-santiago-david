import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

import {createUserWithEmailAndPassword, getAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.scss']
})
export class RutaInicioComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection("prueba").get().subscribe(
      {
        next:((documentos)=>{
          documentos.forEach((document)=>{
            console.log(document.data());
          })


        })
      }

    );

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, 'santy@gmail.com', '123456')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("usuario registrado")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }

}
