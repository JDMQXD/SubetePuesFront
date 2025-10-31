import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './historial.html',
  styleUrls: ['./historial.scss']
})
export class HistorialComponent {}
