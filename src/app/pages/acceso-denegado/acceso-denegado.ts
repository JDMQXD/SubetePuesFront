import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-denegado',
  standalone: true,
  templateUrl: './acceso-denegado.html',
  styleUrls: ['./acceso-denegado.css']
})
export class AccesoDenegadoComponent {
  constructor(private router: Router) {}

  volverAlLogin() {
    this.router.navigate(['/login']);
  }
}

