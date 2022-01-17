import { Component, OnInit } from '@angular/core';
import {UserJPHService} from "../../servicios/http/user-jph.service";
import {UserJphInterface} from "../../servicios/http/interfaces/user-jph.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";



@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  arreglo: UserJphInterface[]=[];
  buscarUsuario="";

  constructor(
    private readonly userJphService:UserJPHService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const parametrosConsulta$=  this.activatedRoute
      .queryParams;


    parametrosConsulta$
      .subscribe(// ACA EMPIEZA A EJECUTARSE EL OBSERVABLE
        {
          next:(queryParams:Params)=>{//Try
            console.log(queryParams);
            this.buscarUsuario=queryParams['name'];
            this.buscarUsuarios();

          },
          error:()=>{},
          complete:()=>{},
        }


      )

    // this.router.navigate(['/app','usuario'], {queryParams:{
    //     name:'asdasd'
    //   }})
    // this.buscarUsuarios();

  }
  acttualizarParametrosDeConsulta(){
    this.router
      .navigate(
        ['/app','usuario'],//armamos la URL
        {
          queryParams:{
            name:this.buscarUsuario
          }
        }
      );

  }

   buscarUsuarios() {
    this.userJphService
      .buscarTodos({
       name:this.buscarUsuario
      })
      .subscribe({
          next: (datos) => { // try then
            this.arreglo = datos;
            this.buscarUsuario='';
            console.log({datos});
          },
          error: (error) => { // catch
            console.error({error});
          },
        }
      )
  }

  gestionarUsuario(idUsuarion:number){

  }

}
