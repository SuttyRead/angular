import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (next.params['id'] == null) {
      console.log('id');
      console.log(next.params['id']);
      this.router.navigate(['/admin']);
    }
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
