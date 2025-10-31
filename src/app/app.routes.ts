import { Routes } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo';
import { LoginComponent } from './login/login';

export const routes: Routes = [
    {path: 'vehiculos', component: VehiculoComponent},
    {path: 'login', component: LoginComponent}
];
