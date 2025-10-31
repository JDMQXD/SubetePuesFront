import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { VehiculosService, Vehiculo } from '../../core/services/vehiculos.service';
import { ReservasService } from '../../core/services/reservas.service';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [NgIf, RouterLink, MatCardModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private vs = inject(VehiculosService);
  private rs = inject(ReservasService);
  private snack = inject(MatSnackBar);

  vehiculo: Vehiculo | null = null;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehiculo = this.vs.getById(id);
  }

  confirmar() {
    if (!this.vehiculo) return;
    this.rs.crear(this.vehiculo);
    this.snack.open('✅ Reserva confirmada', 'OK', { duration: 1500 });
    this.router.navigate(['/historial']);
  }
}
