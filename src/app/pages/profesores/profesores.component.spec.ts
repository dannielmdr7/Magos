import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresComponent } from './profesores.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponentModule } from '../../shared/table-component/table-component.module';
import { DataService } from 'src/app/services/data.service';
import { of, throwError } from 'rxjs';
import {
  ApiResponse,
  Patronus,
} from '../../shared/Interfaces/ApiResponseInterface';

describe('ProfesoresComponent', () => {
  let component: ProfesoresComponent;
  let fixture: ComponentFixture<ProfesoresComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesoresComponent],
      imports: [HttpClientModule, TableComponentModule],
      providers: [{ provide: DataService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dataService.getProfesores', () => {
    let dataResponse: ApiResponse[] = [
      {
        name: 'Minerva McGonagall',
        yearOfBirth: 1925,
        patronus: Patronus.Boar,
        actor: 'Dame Maggie Smith',
        image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg',
      },
    ];
    let spyResponse = spyOn(dataService, 'getProfesores').and.returnValue(
      of(dataResponse)
    );
    component.ngOnInit();
    expect(spyResponse).toHaveBeenCalled();
  });

  it('should call dataService.getProfesores and error response', () => {
    let spyResponse = spyOn(dataService, 'getProfesores').and.returnValue(
      throwError('Error get Data')
    );
    component.ngOnInit();
    expect(spyResponse).toHaveBeenCalled();
  });
});
