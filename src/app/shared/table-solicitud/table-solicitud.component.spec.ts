import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSolicitudComponent } from './table-solicitud.component';
import { NzTableModule } from 'ng-zorro-antd/table';

describe('TableSolicitudComponent', () => {
  let component: TableSolicitudComponent;
  let fixture: ComponentFixture<TableSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSolicitudComponent],
      imports: [NzTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
