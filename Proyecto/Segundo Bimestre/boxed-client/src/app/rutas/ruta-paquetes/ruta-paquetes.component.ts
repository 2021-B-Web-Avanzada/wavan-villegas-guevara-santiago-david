import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/Auth/auth.service";

@Component({
  selector: 'app-ruta-paquetes',
  templateUrl: './ruta-paquetes.component.html',
  styleUrls: ['./ruta-paquetes.component.scss']
})
export class RutaPaquetesComponent implements OnInit {

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {

  }

}
