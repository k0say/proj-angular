
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({providedIn: 'root'})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
/*    this.router.navigate(['users'])
    //  il valore booleano di ritorno dipende da eventuali IF, con controlli su token o altre auth
    return true;  */
    if(this.auth.isUserLoggedIn())  {
      return true
    } else  {
      this.router.navigate(['login']);
    }
  }
}