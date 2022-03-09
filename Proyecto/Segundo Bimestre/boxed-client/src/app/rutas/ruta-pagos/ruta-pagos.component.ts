import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/Auth/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-ruta-pagos',
  templateUrl: './ruta-pagos.component.html',
  styleUrls: ['./ruta-pagos.component.scss']
})
export class RutaPagosComponent implements OnInit {

  constructor(private readonly authService: AuthService,
              public afAuth: AngularFireAuth) { }

  ngOnInit(): void {


  }

}
