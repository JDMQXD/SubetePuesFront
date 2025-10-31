import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  private _isAuth = signal<boolean>(!!localStorage.getItem('token'));
  private _redirectUrl: string | null = null;

  constructor(private http: HttpClient) {}

  login(usuario: string, contrasena: string) {
    return this.http.post(`${this.baseUrl}/login`, { usuario, contrasena }, { responseType: 'text' })
      .pipe(
        tap(() => {
          localStorage.setItem('token', 'ok');
          this._isAuth.set(true);
        }),
        map(msg => msg)
      );
  }

  logout() { localStorage.removeItem('token'); this._isAuth.set(false); }
  isAuthenticated(): boolean { return this._isAuth(); }
  setRedirectUrl(url: string) { this._redirectUrl = url; }
  consumeRedirectUrl(): string | null {
    const r = this._redirectUrl; this._redirectUrl = null; return r;
  }
}
