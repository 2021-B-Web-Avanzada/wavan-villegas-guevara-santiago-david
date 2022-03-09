import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/Auth/auth.service";
import {EmpresaJphInterface} from "../../../../../../../Deber03/AppCRUD/src/app/servicios/http/interfaces/empresa-jph.interface";
import {BoxedService} from "../../servicios/http/boxed.service";

@Component({
  selector: 'app-ruta-paquetes',
  templateUrl: './ruta-paquetes.component.html',
  styleUrls: ['./ruta-paquetes.component.scss']
})
export class RutaPaquetesComponent implements OnInit {
  arregloPaquetes: EmpresaJphInterface[]=[];

  constructor(
    private readonly boxedService:BoxedService,
  ) { }

  ngOnInit(): void {



  }

}
