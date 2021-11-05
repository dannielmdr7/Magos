import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HandleUsersComponent } from './handle-users.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

describe('HandleUsersComponent', () => {
  let component: HandleUsersComponent;
  let fixture: ComponentFixture<HandleUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandleUsersComponent],
      imports: [ReactiveFormsModule, NzModalModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
