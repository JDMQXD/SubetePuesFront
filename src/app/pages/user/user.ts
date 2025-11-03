
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
  usuario: string | null = localStorage.getItem('usuario');
  rol: string | null = localStorage.getItem('rol');

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

