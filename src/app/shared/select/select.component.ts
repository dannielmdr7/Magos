import { Component, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { House } from '../Interfaces/HouseInterface';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  public selection: string = '';
  public personajesEmitter = new EventEmitter<House>();

  constructor(
    private dataService: DataService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.selection = this.storeService.getItem();
  }
  selectHouse(house: string) {
    this.selection = house;
    this.getDataHouse(house);
    this.storeService.setItem(house);
  }
  getDataHouse(house: string) {
    this.dataService.getPersonaje(house);
  }
}
