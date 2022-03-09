import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Injectable()
export class estaLogeadoGuard implements CanActivate {

  // Inyeccion de dependencias
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    public afAuth: AngularFireAuth
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authService.estaLogeado||!this.authService.usuario) {
      this.router.navigate(['/inicio'])
    }
    return this.authService.estaLogeado; // boolean
  }


}
