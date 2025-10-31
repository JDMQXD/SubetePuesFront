import { Component, inject } from '@angular/core';
import { ReservasService, Reserva } from '../../core/services/reservas.service';
import { NgFor, DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [NgFor, DatePipe, MatListModule, MatCardModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  private rs = inject(ReservasService);
  reservas: Reserva[] = this.rs.historial();
}
