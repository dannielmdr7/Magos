import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { HttpClientModule } from '@angular/common/http';
import {
  NzDropdownMenuComponent,
  NzDropDownModule,
} from 'ng-zorro-antd/dropdown';
import { StoreService } from '../../services/store.service';

fdescribe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let storeService: StoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent, NzDropdownMenuComponent],
      imports: [HttpClientModule, NzDropDownModule],
      providers: [{ provide: StoreService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getData House Service', () => {
    storeService.setItem('test');
    component.getDataHouse('test');
    expect(storeService.getItem()).toEqual('test');
  });
  it('Select House', () => {
    component.selectHouse('test');
    expect(component.selection).toEqual('test');
    expect(storeService.getItem()).toEqual('test');
  });
});
