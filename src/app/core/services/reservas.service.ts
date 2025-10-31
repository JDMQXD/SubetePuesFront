import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculos.service';

export type Reserva = {
  id: string;
  date: string;
  vehiculo: Vehiculo;
};

@Injectable({ providedIn: 'root' })
export class ReservasService {
  private key = 'reservas';

  private read(): Reserva[] {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : [];
  }
  private write(data: Reserva[]) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  crear(vehiculo: Vehiculo): Reserva {
    const nueva: Reserva = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      vehiculo
    };
    const all = this.read();
    all.unshift(nueva);
    this.write(all);
    return nueva;
  }

  historial(): Reserva[] { return this.read(); }
}
