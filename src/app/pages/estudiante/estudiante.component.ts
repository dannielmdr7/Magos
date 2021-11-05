import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { DataService } from '../../services/data.service';
import { ApiResponse } from '../../shared/Interfaces/ApiResponseInterface';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
})
export class EstudianteComponent implements OnInit {
  public estudiantes: ApiResponse[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading();
    this.dataService.getEstudiantes().subscribe((data) => {
      this.estudiantes = data;
      Swal.close();
    });
  }
  loading() {
    Swal.fire({
      title: 'Loading...',
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
  getAge(year: any) {
    if (year) {
      let today = new Date();
      let age = today.getFullYear() - year;
      return age;
    } else {
      return 'No hay datos de la fecha de nacimiento';
    }
  }
}
