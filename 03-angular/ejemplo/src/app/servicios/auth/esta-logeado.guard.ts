import {Injectable} from "@angular/core";
import {AuthServices} from "./auth.services";
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
@Injectable()
export  class EstaLogeadoGuard{
  //Inyeccion de dependencias
  constructor(
    private  readonly  _authService:AuthServices
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
    return  this._authService.estaLogeado
  }
}
