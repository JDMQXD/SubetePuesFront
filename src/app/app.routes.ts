import { Routes } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo';
import { LoginComponent } from './login/login';
import { CatalogComponent } from './pages/catalog/catalog';
import { FiltrosComponent } from './pages/filtros/filtros';
import { ReservaComponent } from './pages/reserva/reserva';
import { CancelacionComponent } from './pages/cancelacion/cancelacion';
import { HistorialComponent } from './pages/historial/historial';
import { AdminComponent } from './pages/admin/admin';

export const routes: Routes = [
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'catalog', component: CatalogComponent },
    { path: 'vehiculos', component: VehiculoComponent },
    { path: 'vehiculos/:id', loadComponent: () => import('./pages/vehiculo-detail/vehiculo-detail').then(m => m.VehiculoDetailComponent) },
    { path: 'filtros', component: FiltrosComponent },
    { path: 'reserva', component: ReservaComponent },
    { path: 'cancelacion', component: CancelacionComponent },
    { path: 'historial', component: HistorialComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginComponent }
];
