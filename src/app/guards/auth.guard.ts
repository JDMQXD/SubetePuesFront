import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[];
    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    if (expectedRoles && !expectedRoles.includes(rol || '')) {
      this.router.navigate(['/acceso-denegado']);
      return false;
    }

    return true;
  }
}
