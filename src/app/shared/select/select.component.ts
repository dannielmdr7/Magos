import { Component, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { House } from '../Interfaces/HouseInterface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  public selection: string = 'Seleccione una casa';
  public personajesEmitter = new EventEmitter<House>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  selectHouse(house: string) {
    this.selection = house;
    this.getDataHouse(house);
  }
  getDataHouse(house: string) {
    this.dataService.getPersonaje(house);
  }
}
