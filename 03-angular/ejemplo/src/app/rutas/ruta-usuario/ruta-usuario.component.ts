import { Component, OnInit } from '@angular/core';
import {UserJPHService} from "../../servicios/http/user-jph.service";


@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(
    private readonly userJphService:UserJPHService,
  ) { }

  ngOnInit(): void {
    this.userJphService
      .buscarTodos()
      .subscribe({
          next: (datos) => { // try then
            console.log({datos});
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
  }

}
