import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
    this.dataService.getProfesores().subscribe(
      (data) => {
        this.profesores = data;
        this.profesoresFilter = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );
  }
  handleKeyboardEvent() {
    this.profesores = this.profesoresFilter.filter((personaje) =>
      personaje.name.toLocaleLowerCase().includes(this.searchItem.toLowerCase())
    );
  }
}
