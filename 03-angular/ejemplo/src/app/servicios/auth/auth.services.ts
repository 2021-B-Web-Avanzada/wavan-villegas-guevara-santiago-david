import {Injectable} from "@angular/core";

@Injectable()
export class AuthServices{
  estaLogeado=true;
  roles=[
    'admin',
    'supervisor',
    'usuario'

  ];

}
