import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { House } from '../../shared/Interfaces/HouseInterface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit, OnDestroy {
  private personajeSubscription: Subscription = new Subscription();
  public personajes: House[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.personajeSubscription.add(
      this.dataService.personajesEmitter.subscribe((data) => {
        if (data) {
          this.personajes = data;
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.personajeSubscription.unsubscribe();
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
