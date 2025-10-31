import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 necesario para [(ngModel)]
import { CommonModule } from '@angular/common';
import { AuthService } from '../Service/auth.service'; // ajusta la ruta si cambia

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 importante
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.correo, this.password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        localStorage.setItem('token', response.token); // Guarda el token
        // Redirige a otra ruta si lo deseas
      },
      error: (err) => {
        console.error('Error de login:', err);
        this.errorMessage = 'Correo o contraseña incorrectos.';
      },
    });
  }
}
