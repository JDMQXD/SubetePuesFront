import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { VehiculosService, Vehiculo } from '../../core/services/vehiculos.service';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vehiculo-detail',
  standalone: true,
  imports: [NgIf, RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './vehiculo-detail.component.html',
  styleUrls: ['./vehiculo-detail.component.scss']
})
export class VehiculoDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private vs = inject(VehiculosService);

  vehiculo: Vehiculo | null = null;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehiculo = this.vs.getById(id);
  }

  reservar() {
    if (!this.vehiculo) return;
    this.router.navigate(['/reservar', this.vehiculo.id]);
  }
}
