import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/login']);
      return false;
    }
    if (sessionStorage.getItem('role') === 'USER') {
      this.router.navigate(['/user']);
      return false;
    } else {
      return true;
    }
  }
}
