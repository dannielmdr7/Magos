import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public item: string = 'Seleccione una casa';

  constructor() {}
  getItem() {
    return this.item;
  }
  setItem(item: string) {
    this.item = item;
  }
}
