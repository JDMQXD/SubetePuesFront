import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiculoService } from '../Service/vehiculo.service';
import { Vehiculo } from '../clases/vehiculo';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehiculo.html',
  styleUrls: ['./vehiculo.scss']
})
export class VehiculoComponent implements OnInit {
  
  vehiculos: Vehiculo[] = [];
  vehiculosFiltrados: Vehiculo[] = [];
  
  filtroMarca: string = '';
  filtroModelo: string = '';
  filtroCiudad: string = '';
  filtroDepartamento: string = '';
  filtroCategoria: string = '';
  filtroTipo: string = '';
  
  ciudades: string[] = [];
  departamentos: string[] = [];
  categorias: string[] = [];
  tipos: string[] = [];
  marcas: string[] = [];
  
  loading: boolean = true;
  error: string = '';

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos(): void {
    this.loading = true;
    this.vehiculoService.getAllVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data;
        this.vehiculosFiltrados = data;
        this.extraerOpcionesFiltros();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar vehículos:', error);
        this.error = 'Error al cargar los vehículos. Por favor, intente nuevamente.';
        this.loading = false;
      }
    });
  }

  extraerOpcionesFiltros(): void {
    this.ciudades = [...new Set(this.vehiculos
      .filter(v => v.ciudad && v.ciudad.nombre)
      .map(v => v.ciudad.nombre))
    ].sort();

    this.departamentos = [...new Set(this.vehiculos
      .filter(v => v.ciudad && v.ciudad.departamento && v.ciudad.departamento.nombre)
      .map(v => v.ciudad.departamento.nombre))
    ].sort();

    this.categorias = [...new Set(this.vehiculos
      .filter(v => v.tipoVehiculo && v.tipoVehiculo.categoria && v.tipoVehiculo.categoria.nombre)
      .map(v => v.tipoVehiculo.categoria.nombre))
    ].sort();

    this.tipos = [...new Set(this.vehiculos
      .filter(v => v.tipoVehiculo && v.tipoVehiculo.nombre)
      .map(v => v.tipoVehiculo.nombre))
    ].sort();

    this.marcas = [...new Set(this.vehiculos
      .filter(v => v.marca)
      .map(v => v.marca))
    ].sort();
  }

  aplicarFiltros(): void {
  this.vehiculosFiltrados = this.vehiculos.filter(vehiculo => {
      const cumpleMarca = !this.filtroMarca || 
        (vehiculo.marca && vehiculo.marca.toLowerCase().includes(this.filtroMarca.toLowerCase()));
      
      const cumpleModelo = !this.filtroModelo || 
        (vehiculo.modelo && vehiculo.modelo.toLowerCase().includes(this.filtroModelo.toLowerCase()));
      
      const cumpleCiudad = !this.filtroCiudad || 
        (vehiculo.ciudad && vehiculo.ciudad.nombre === this.filtroCiudad);
      
      const cumpleDepartamento = !this.filtroDepartamento || 
        (vehiculo.ciudad && vehiculo.ciudad.departamento && 
         vehiculo.ciudad.departamento.nombre === this.filtroDepartamento);
      
      const cumpleCategoria = !this.filtroCategoria || 
        (vehiculo.tipoVehiculo && vehiculo.tipoVehiculo.categoria && 
         vehiculo.tipoVehiculo.categoria.nombre === this.filtroCategoria);
      
      const cumpleTipo = !this.filtroTipo || 
        (vehiculo.tipoVehiculo && vehiculo.tipoVehiculo.nombre === this.filtroTipo);

      return cumpleMarca && cumpleModelo && cumpleCiudad && 
             cumpleDepartamento && cumpleCategoria && cumpleTipo;
    });
  }

  limpiarFiltros(): void {
    this.filtroMarca = '';
    this.filtroModelo = '';
    this.filtroCiudad = '';
    this.filtroDepartamento = '';
    this.filtroCategoria = '';
    this.filtroTipo = '';
    this.vehiculosFiltrados = this.vehiculos;
  }
}