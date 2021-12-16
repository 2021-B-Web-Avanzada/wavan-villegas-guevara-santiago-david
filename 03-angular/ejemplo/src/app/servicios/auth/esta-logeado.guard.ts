import {Injectable} from "@angular/core";
import {AuthServices} from "./auth.services";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
@Injectable()
export  class EstaLogeadoGuard{
  //Inyeccion de dependencias
  constructor(
    private  readonly  _authService:AuthServices,
    private readonly _router: Router,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
    if(!this._authService.estaLogeado){
      this._router.navigate(['/forbidden'])
    }

    return  this._authService.estaLogeado
  }
}
