import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // step 12: write logic for 'canActivate'
  // for step 13 go to 'dashboard.component.html'

  constructor(private router: Router) { }
  routes: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('username') != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
