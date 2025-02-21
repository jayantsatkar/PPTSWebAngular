import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const storedData = JSON.parse(sessionStorage.getItem('token') || '');

      if (storedData && storedData.token) {
        return true;
      } else {
        this.router.navigate(['user/login']);
        return false;
      }
    } catch (error) {
      if (error) this.router.navigate(['user/login']);
      return false;
    }
  }
}
