import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propietario',
  standalone: true,
  templateUrl: './propietario.html',
  styleUrls: ['./propietario.css']
})
export class PropietarioComponent {
  usuario: string | null = localStorage.getItem('usuario');
  rol: string | null = localStorage.getItem('rol');

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
