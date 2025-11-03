import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const body = { correo: this.correo, password: this.password };

    this.http.post('http://localhost:8080/auth/login', body).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('rol', response.rol.toUpperCase());
        localStorage.setItem('usuario', response.usuario);

        if (response.rol.toUpperCase() === 'ROLE_ADMIN') {
          this.router.navigate(['/admin']);
        } else if (response.rol.toUpperCase() === 'ROLE_USER') {
          this.router.navigate(['/user']);
        } else if (response.rol.toUpperCase() === 'ROLE_PROPIETARIO') {
          this.router.navigate(['/propietario']);
        }
      },
      error: () => {
        this.errorMessage = '❌ Credenciales incorrectas o usuario no encontrado';
      }
    });
  }
}
