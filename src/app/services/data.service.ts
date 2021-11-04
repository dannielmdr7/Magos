import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Estudiantes } from '../shared/Interfaces/EstudiantesInterface';

import { House } from '../shared/Interfaces/HouseInterface';
import { Profesor } from '../shared/Interfaces/ProfesorInterface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public personajesEmitter = new EventEmitter<House[]>();
  constructor(private hppt: HttpClient) {}
  getPersonaje(house: string) {
    this.hppt
      .get<House[]>(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .subscribe((data) => {
        this.personajesEmitter.emit(data);
      });
  }
  getProfesores() {
    return this.hppt.get<Profesor[]>(
      'http://hp-api.herokuapp.com/api/characters/staff'
    );
  }
  getEstudiantes() {
    return this.hppt.get<Estudiantes[]>(
      'http://hp-api.herokuapp.com/api/characters/students'
    );
  }
}
