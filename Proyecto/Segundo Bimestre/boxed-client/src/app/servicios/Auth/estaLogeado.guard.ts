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

    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        return true

        // ...
      } else {
        return false
      }
    });
    return true;
  }


}
