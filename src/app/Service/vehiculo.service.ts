import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { vehiculo } from '../clases/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
  private url: string = "http://localhost:8080/api/vehiculos";
  
  constructor(private http: HttpClient) { }
  
  
  getAllVehiculos(): Observable<vehiculo[]> {
    return this.http.get<vehiculo[]>(`${this.url}/all`, { headers: this.httpHeaders });
  }
  

  getVehiculoById(id: string): Observable<vehiculo> {
    return this.http.get<vehiculo>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }
  

  saveVehiculo(vehiculo: vehiculo): Observable<vehiculo> {
    return this.http.post<vehiculo>(this.url, vehiculo, { headers: this.httpHeaders });
  }
  
 
  updateVehiculo(id: string, vehiculo: vehiculo): Observable<vehiculo> {
    return this.http.put<vehiculo>(`${this.url}/${id}`, vehiculo, { headers: this.httpHeaders });
  }
  
  
  deleteVehiculo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`, { headers: this.httpHeaders });
  }
}