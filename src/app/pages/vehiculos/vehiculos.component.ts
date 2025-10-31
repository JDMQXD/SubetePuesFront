import { Component } from '@angular/core';
import { VehiculosService, Vehiculo } from '../../core/services/vehiculos.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [NgFor, RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent {
  cars: Vehiculo[] = [];
  constructor(private vs: VehiculosService) {
    this.cars = this.vs.list();
  }
}
