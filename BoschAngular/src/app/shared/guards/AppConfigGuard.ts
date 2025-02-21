import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { map, Observable } from 'rxjs';
import { JsonService } from '../services/json.service';
@Injectable({
  providedIn: 'root',
})
export class AppConfigGuard implements CanActivate {
  constructor(private jsonService: JsonService, private router: Router) {}

  canActivate(): boolean {
    const appConfig = this.jsonService.getConfig(); // Get the config value from the service

    // Check if the key exists and is true
    if (appConfig.IsSSO === true) {
      return true;
    } else {
      // If not true, redirect to 'user' route
       this.router.navigate(['/login']);
      return false;
    }
  }
}
