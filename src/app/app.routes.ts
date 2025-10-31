import { Routes } from '@angular/router';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { VehiculoDetailComponent } from './pages/vehiculo-detail/vehiculo-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'vehiculos', pathMatch: 'full' },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'vehiculos/:id', component: VehiculoDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'historial', component: HistorialComponent },
  { path: '**', redirectTo: 'vehiculos' }
];
