import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/shared/Interfaces/ProfesorInterface';
import { DataService } from '../../services/data.service';
import { ApiResponse } from '../../shared/Interfaces/ApiResponseInterface';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent implements OnInit {
  public profesores: ApiResponse[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProfesores().subscribe((data) => {
      this.profesores = data;
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
