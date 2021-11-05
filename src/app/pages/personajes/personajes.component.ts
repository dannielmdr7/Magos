import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

import { StoreService } from '../../services/store.service';
import { ApiResponse } from '../../shared/Interfaces/ApiResponseInterface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit, OnDestroy {
  private personajeSubscription: Subscription = new Subscription();
  public personajes: ApiResponse[] = [];

  public item: string = '';

  constructor(
    private dataService: DataService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.item = this.storeService.getItem();
    this.dataService.getPersonaje(this.item);
    this.watchChanges();
  }
  watchChanges() {
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
