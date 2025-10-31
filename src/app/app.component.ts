import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
  <mat-toolbar color="primary" class="toolbar">
    <span class="logo" (click)="go('vehiculos')">🚗 Súbete Pues</span>
    <span class="spacer"></span>

    <button mat-button [routerLink]="['/vehiculos']">Vehículos</button>
    <button mat-button *ngIf="isAuth()" [routerLink]="['/historial']">Historial</button>

    <button mat-raised-button color="accent" *ngIf="!isAuth()" [routerLink]="['/login']">
      <mat-icon>login</mat-icon>&nbsp; Iniciar sesión
    </button>

    <button mat-raised-button color="warn" *ngIf="isAuth()" (click)="logout()">
      <mat-icon>logout</mat-icon>&nbsp; Cerrar sesión
    </button>
  </mat-toolbar>

  <router-outlet></router-outlet>
  `,
  styles: [`
    .toolbar { position: sticky; top: 0; z-index: 100; }
    .spacer { flex: 1 1 auto; }
    .logo { font-weight: 700; cursor: pointer; letter-spacing: .5px; }
  `]
})
export class AppComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  isAuth = computed(() => this.auth.isAuthenticated());
  go(path: string) { this.router.navigate([`/${path}`]); }
  logout() { this.auth.logout(); this.router.navigate(['/vehiculos']); }
}
