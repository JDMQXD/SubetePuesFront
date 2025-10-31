import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Vehiculo } from '../clases/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
  private url: string = "http://localhost:8080/api/vehiculos";
  // Cambia a `true` para usar datos mock en memoria (funciona sin backend)
  // Cambia a `false` para usar llamadas HTTP reales.
  private useMock: boolean = true;

  // Datos mock de ejemplo. Puedes ampliarlos o moverlos a un archivo JSON si lo prefieres.
  private mockVehiculos: Vehiculo[] = [
    {
      idVehiculo: '1',
  transmision: { idTransmision: 't1', nombre: 'Automática' },
  ciudad: { idCiudad: 'c1', nombre: 'Medellín', departamento: { idDepartamento: 'd1', nombre: 'Antioquia' } },
  propietario: { idPropietario: 'p1', nombre: 'Proveedor A', tipoDocumento: { idDocumento: 'td1', tipoDocumento: 'NIT' }, documento: '', telefono: '', correo: '', direccion: '', usuario: '', password: '', fechaRegistro: new Date() },
      tipoVehiculo: { idTipoVehiculo: 'tv1', nombre: 'SUV', categoria: { idCategoria: 'cat1', nombre: '4x4' } },
      disponibilidad: { idDisponibilidad: 'disp1', nombre: 'Disponible' },
      modelo: '2022',
      marca: 'Toyota',
      espeficicacion: '5 pasajeros, aire acondicionado',
      estadoDeCuenta: 'OK',
      fechaRegistro: new Date()
    } as Vehiculo,
    {
      idVehiculo: '2',
  transmision: { idTransmision: 't2', nombre: 'Manual' },
  ciudad: { idCiudad: 'c2', nombre: 'Bogotá', departamento: { idDepartamento: 'd2', nombre: 'Cundinamarca' } },
  propietario: { idPropietario: 'p2', nombre: 'Proveedor B', tipoDocumento: { idDocumento: 'td2', tipoDocumento: 'Cédula' }, documento: '', telefono: '', correo: '', direccion: '', usuario: '', password: '', fechaRegistro: new Date() },
      tipoVehiculo: { idTipoVehiculo: 'tv2', nombre: 'Sedán', categoria: { idCategoria: 'cat2', nombre: 'Compacto' } },
      disponibilidad: { idDisponibilidad: 'disp1', nombre: 'Disponible' },
      modelo: '2020',
      marca: 'Nissan',
      espeficicacion: '4 pasajeros, transmisión manual',
      estadoDeCuenta: 'OK',
      fechaRegistro: new Date()
    } as Vehiculo
  ];
  
  constructor(private http: HttpClient) { }
  
  
  getAllVehiculos(): Observable<Vehiculo[]> {
    if (this.useMock) {
      return of(this.mockVehiculos);
    }
    return this.http.get<Vehiculo[]>(`${this.url}/all`, { headers: this.httpHeaders });
  }
  

  getVehiculoById(id: string): Observable<Vehiculo> {
    if (this.useMock) {
      const found = this.mockVehiculos.find(v => v.idVehiculo === id) as Vehiculo;
      return of(found);
    }
    return this.http.get<Vehiculo>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }
  

  saveVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    if (this.useMock) {
      // asignar id simple incremental si no existe
      if (!vehiculo.idVehiculo) {
        vehiculo.idVehiculo = String(this.mockVehiculos.length + 1);
      }
      this.mockVehiculos.push(vehiculo);
      return of(vehiculo);
    }
    return this.http.post<Vehiculo>(this.url, vehiculo, { headers: this.httpHeaders });
  }
  
 
  updateVehiculo(id: string, vehiculo: Vehiculo): Observable<Vehiculo> {
    if (this.useMock) {
      const idx = this.mockVehiculos.findIndex(v => v.idVehiculo === id);
      if (idx !== -1) {
        this.mockVehiculos[idx] = vehiculo;
        return of(vehiculo);
      }
      // si no se encuentra, simular creación
      this.mockVehiculos.push(vehiculo);
      return of(vehiculo);
    }
    return this.http.put<Vehiculo>(`${this.url}/${id}`, vehiculo, { headers: this.httpHeaders });
  }
  
  
  deleteVehiculo(id: string): Observable<void> {
    if (this.useMock) {
      this.mockVehiculos = this.mockVehiculos.filter(v => v.idVehiculo !== id);
      return of(void 0);
    }
    return this.http.delete<void>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }
}