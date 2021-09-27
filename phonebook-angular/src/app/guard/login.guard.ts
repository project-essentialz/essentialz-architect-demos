import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Services
import { ArchitectService } from '../services/architect.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private _architectService: ArchitectService,
    private _router: Router,
  ) {}
  canActivate() {
    if (this._architectService.isLoggedIn()) {
      return this._router.parseUrl('/contacts');
    }
    return true;
  }
}
