import { Injectable } from '@angular/core';

export type Vehiculo = {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string;
  description: string;
};

@Injectable({ providedIn: 'root' })
export class VehiculosService {
  private data: Vehiculo[] = [
    { id: 1, brand: 'Toyota', model: 'Corolla', price: 180, image: 'assets/toyota.jpg', description: 'Sedán confiable y económico.' },
    { id: 2, brand: 'Mazda', model: 'CX-5', price: 250, image: 'assets/mazda.jpg', description: 'SUV elegante y cómoda.' },
    { id: 3, brand: 'Chevrolet', model: 'Onix', price: 160, image: 'assets/onix.jpg', description: 'Perfecto para la ciudad.' },
  ];

  list() { return this.data; }
  getById(id: number) { return this.data.find(v => v.id === id) || null; }
}
