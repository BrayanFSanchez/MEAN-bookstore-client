import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  CanActivate,
} from '@angular/router';
import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SecurityRouter implements CanActivate {
  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.securityService.onSession()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
