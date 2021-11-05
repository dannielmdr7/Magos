import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiResponse } from '../shared/Interfaces/ApiResponseInterface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public personajesEmitter = new EventEmitter<ApiResponse[]>();
  constructor(private hppt: HttpClient) {}
  getPersonaje(house: string) {
    Swal.fire({
      title: 'Loading...',
      didOpen: () => {
        Swal.showLoading();
      },
    });
    this.hppt
      .get<ApiResponse[]>(
        `http://hp-api.herokuapp.com/api/characters/house/${house}`
      )
      .subscribe((data) => {
        this.personajesEmitter.emit(data);
        Swal.close();
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
