import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snack = inject(MatSnackBar);

  usuario = '';
  contrasena = '';

  submit() {
    this.auth.login(this.usuario, this.contrasena).subscribe({
      next: () => {
        this.snack.open('✅ Bienvenido', 'OK', { duration: 1500 });
        const redirect = this.route.snapshot.queryParamMap.get('redirect') || '/vehiculos';
        this.router.navigateByUrl(redirect);
      },
      error: () => this.snack.open('❌ Credenciales incorrectas', 'OK', { duration: 2000 })
    });
  }
}
