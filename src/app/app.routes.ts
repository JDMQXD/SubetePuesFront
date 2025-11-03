import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { AdminComponent } from './pages/admin/admin';
import { UserComponent } from './pages/user/user';
import { PropietarioComponent } from './pages/propietario/propietario';
import { AccesoDenegadoComponent } from './pages/acceso-denegado/acceso-denegado';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
  { path: 'propietario', component: PropietarioComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_PROPIETARIO'] } },
  { path: 'acceso-denegado', component: AccesoDenegadoComponent },
  { path: '**', redirectTo: 'login' }
];
