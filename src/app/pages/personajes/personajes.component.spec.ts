import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesComponent } from './personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from '../../shared/select/select.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TableComponentModule } from 'src/app/shared/table-component/table-component.module';

describe('PersonajesComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonajesComponent, SelectComponent],
      imports: [
        HttpClientModule,
        NzDropDownModule,
        NzInputModule,
        TableComponentModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
