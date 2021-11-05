import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteComponent } from './estudiante.component';
import { HttpClientModule } from '@angular/common/http';
import { HandleUsersModule } from '../../shared/handle-users/handle-users.module';
import { TableComponentModule } from '../../shared/table-component/table-component.module';

describe('EstudianteComponent', () => {
  let component: EstudianteComponent;
  let fixture: ComponentFixture<EstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstudianteComponent],
      imports: [HttpClientModule, HandleUsersModule, TableComponentModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
