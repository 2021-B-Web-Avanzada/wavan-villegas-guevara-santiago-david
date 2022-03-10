import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Injectable()
export class estaLogeadoGuard implements CanActivate {

  // Inyeccion de dependencias
  constructor(

    private readonly router: Router,
    public afAuth: AngularFireAuth,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if(localStorage.getItem("logeado")==='si' && localStorage.getItem("admin")==='no'){
      return true
    }else{
      const ruta = ['/inicio'];
      this.router.navigate(ruta);
      return false;

    }

  }


}