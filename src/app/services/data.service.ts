import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { ApiResponse } from '../shared/Interfaces/ApiResponseInterface';
import { Estudiantes } from '../shared/Interfaces/EstudiantesInterface';
import { Profesor } from '../shared/Interfaces/ProfesorInterface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public personajesEmitter = new EventEmitter<ApiResponse[]>();
  constructor(private hppt: HttpClient) {}
  getPersonaje(house: string) {
    this.hppt
      .get<ApiResponse[]>(
        `http://hp-api.herokuapp.com/api/characters/house/${house}`
      )
      .subscribe((data) => {
        this.personajesEmitter.emit(data);
      });
  }
  getProfesores() {
    return this.hppt.get<ApiResponse[]>(
      'http://hp-api.herokuapp.com/api/characters/staff'
    );
  }
  getEstudiantes() {
    return this.hppt.get<ApiResponse[]>(
      'http://hp-api.herokuapp.com/api/characters/students'
    );
  }
}
