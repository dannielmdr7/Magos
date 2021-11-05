import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from '../../shared/Interfaces/NewUserInterface';

@Component({
  selector: 'app-handle-users',
  templateUrl: './handle-users.component.html',
  styleUrls: ['./handle-users.component.css'],
})
export class HandleUsersComponent implements OnInit {
  public newStudentModal: boolean = false;
  public solicitudes: NewUser[] = [];
  public listUsers: boolean = false;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      age: [null, [Validators.required]],
    });
  }
  showNewStudent() {
    this.newStudentModal = true;
  }
  closeNewUser() {
    this.newStudentModal = false;
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    let email: string = this.validateForm.get('email')?.value;
    let name: string = this.validateForm.get('userName')?.value;
    let age: number = this.validateForm.get('age')?.value;
    let newUser: NewUser = {
      name,
      email,
      age,
    };
    this.solicitudes.push(newUser);

    this.validateForm.reset();
  }
  showList() {
    this.listUsers = true;
  }
  closeList() {
    this.listUsers = false;
  }
}
