import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reserva.html',
  styleUrls: ['./reserva.scss']
})
export class ReservaComponent {}
