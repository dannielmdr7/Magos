import { Component, OnInit } from '@angular/core';
import { Estudiantes } from 'src/app/shared/Interfaces/EstudiantesInterface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
})
export class EstudianteComponent implements OnInit {
  public estudiantes: Estudiantes[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getEstudiantes().subscribe((data) => {
      this.estudiantes = data;
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
