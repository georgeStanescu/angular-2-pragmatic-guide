import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { UsernameValidators } from "./UsernameValidators";

@Component({
  selector: 'app-signup-form',
  template: `
    <form [formGroup]="formGroup" (ngSubmit)="signup()">
      <div class="form-group">
        <label for="username">Username</label>
        <input id="username" type="text" class="form-control" formControlName="usernameControl">
        <div *ngIf="formGroup.controls.usernameControl.touched && formGroup.controls.usernameControl.errors">
          <div 
            *ngIf="formGroup.controls.usernameControl.errors.required"
            class="alert alert-danger">Username is required.</div>
          <div 
            *ngIf="formGroup.controls.usernameControl.errors.cannotContainSpace"
            class="alert alert-danger">Username cannot contain space.</div>
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="text" class="form-control" formControlName="passwordControl">
        <div 
          *ngIf="!formGroup.controls.passwordControl.valid"
          class="alert alert-danger">Password is required.</div>
      </div>
      <button class="btn btn-primary" type="submit">Sign Up</button>
    </form>
  `
})
export class SignupFormComponent {
  formGroup: FormGroup;

  // formGroup = new FormGroup({
  //   usernameControl: new FormControl('', Validators.required),
  //   passwordControl: new FormControl('', Validators.required)
  // });

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      usernameControl: ['', Validators.compose([
        Validators.required, 
        UsernameValidators.cannotContainSpace
      ])],
      passwordControl: ['', Validators.required]
    });
  }

  signup() {
    console.log(this.formGroup.value);
  }
}
