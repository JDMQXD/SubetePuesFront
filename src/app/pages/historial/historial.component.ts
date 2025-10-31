import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule, DatePipe],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  reservas = [
    { id: 1, vehiculo: { brand: 'Toyota', model: 'Corolla' }, date: '2025-10-31' },
    { id: 2, vehiculo: { brand: 'Mazda', model: 'CX-5' }, date: '2025-10-29' },
  ];
}
