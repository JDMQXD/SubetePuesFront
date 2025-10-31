import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent {
  vehiculo = {
    id: 1,
    brand: 'Mazda',
    model: 'CX-5',
    price: 250
  };

  confirmar() {
    alert(`✅ Reserva confirmada para ${this.vehiculo.brand} ${this.vehiculo.model}`);
  }
}
