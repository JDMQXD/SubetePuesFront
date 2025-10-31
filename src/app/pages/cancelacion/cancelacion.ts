import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cancelacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cancelacion.html',
  styleUrls: ['./cancelacion.scss']
})
export class CancelacionComponent {}
