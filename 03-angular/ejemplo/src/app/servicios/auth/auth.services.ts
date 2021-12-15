import {Injectable} from "@angular/core";

@Injectable()
export class AuthServices{
  estaLogeado=false;
  roles=[
    'admin',
    'supervisor',
    'usuario'

  ];

}
