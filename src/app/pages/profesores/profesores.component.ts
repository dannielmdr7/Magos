import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DataService } from '../../services/data.service';
import { ApiResponse } from '../../shared/Interfaces/ApiResponseInterface';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent implements OnInit {
  public profesores: ApiResponse[] = [];
  public profesoresFilter: ApiResponse[] = [];
  public searchItem: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading();
    this.dataService.getProfesores().subscribe(
      (data) => {
        this.profesores = data;
        this.profesoresFilter = data;
        Swal.close();
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );
  }
  loading() {
    Swal.fire({
      title: 'Loading...',
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
  handleKeyboardEvent() {
    this.profesores = this.profesoresFilter.filter((personaje) =>
      personaje.name.toLocaleLowerCase().includes(this.searchItem.toLowerCase())
    );
  }
}
