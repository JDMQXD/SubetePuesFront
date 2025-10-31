import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehiculo-detail',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './vehiculo-detail.component.html',
  styleUrls: ['./vehiculo-detail.component.scss']
})
export class VehiculoDetailComponent {
  @Input() vehiculo = {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    price: 180,
    img: 'https://cdn.motor1.com/images/mgl/Vzkk1/s3/toyota-corolla-gr-s-2023.jpg'
  };

  reservar() {
    alert(`🚗 Reserva iniciada para ${this.vehiculo.brand} ${this.vehiculo.model}`);
  }
}
