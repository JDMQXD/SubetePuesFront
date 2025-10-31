import { RenderMode, ServerRoute } from '@angular/ssr';

// Configure server routes for development
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },
  { path: 'catalog', renderMode: RenderMode.Server },
  { path: 'vehiculos', renderMode: RenderMode.Server },
  { path: 'vehiculos/:id', renderMode: RenderMode.Server },
  { path: 'filtros', renderMode: RenderMode.Server },
  { path: 'reserva', renderMode: RenderMode.Server },
  { path: 'cancelacion', renderMode: RenderMode.Server },
  { path: 'historial', renderMode: RenderMode.Server },
  { path: 'admin', renderMode: RenderMode.Server },
  { path: 'login', renderMode: RenderMode.Server }
];
