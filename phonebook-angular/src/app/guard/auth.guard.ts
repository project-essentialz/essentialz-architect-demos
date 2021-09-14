import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// Services
import { ArchitectService } from '../services/architect.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _architectService: ArchitectService) {}
  canActivate() {
    return this._architectService.isLoggedIn();
  }
}
