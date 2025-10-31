import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../Service/vehiculo.service';
import { Vehiculo } from '../../clases/vehiculo';

@Component({
  selector: 'app-vehiculo-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vehiculo-detail.html',
  styleUrls: ['./vehiculo-detail.scss']
})
export class VehiculoDetailComponent implements OnInit {
  vehiculo: Vehiculo | null = null;
  loading = true;
  constructor(private route: ActivatedRoute, private vs: VehiculoService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vs.getVehiculoById(id).subscribe(v => { this.vehiculo = v; this.loading = false; });
    } else {
      this.loading = false;
    }
  }
}
