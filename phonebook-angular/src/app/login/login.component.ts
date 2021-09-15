import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { ArchitectService } from '../services/architect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loading = false;
  constructor(
    private _architectService: ArchitectService,
    private _router: Router,
  ) {}

  ngOnInit(): void {}

  async login() {
    this.loading = true;
    await this._architectService.login();
    this.loading = false;
    this._router.navigate(['/contacts']);
  }
}
