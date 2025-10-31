import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './filtros.html',
  styleUrls: ['./filtros.scss']
})
export class FiltrosComponent {}
