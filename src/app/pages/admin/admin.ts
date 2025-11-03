import { Component } from '@angular/core';
 import { Router } from '@angular/router';

 @Component({
   selector: 'app-admin',
   standalone: true,
   templateUrl: './admin.html',
   styleUrls: ['./admin.css']
 })
 export class AdminComponent {
   usuario: string | null = localStorage.getItem('usuario');
   rol: string | null = localStorage.getItem('rol');

   constructor(private router: Router) {}

   logout() {
     localStorage.clear();
     this.router.navigate(['/login']);
   }
 }

