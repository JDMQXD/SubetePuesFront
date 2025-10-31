import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent {
  vehiculos = [
  vehiculos = [
    { id: 1, brand: 'Toyota', model: 'Corolla', price: 180, img: 'https://cdn.motor1.com/images/mgl/Vzkk1/s3/toyota-corolla-gr-s-2023.jpg' },
    { id: 2, brand: 'Mazda', model: 'CX-5', price: 250, img: 'https://cdn.motor1.com/images/mgl/3e8xZ/s1/mazda-cx-5.jpg' },
    { id: 3, brand: 'Chevrolet', model: 'Onix', price: 150, img: 'https://cdn.motor1.com/images/mgl/YMM6k/s3/chevrolet-onix.jpg' }
  ];

  ];
}
