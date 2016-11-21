import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  template: `
    <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm.form)">
      <div class="form-group">
        <label for="firstName">FirstName</label>
        <input ngModel name="firstNameControl" #firstNameVar="ngModel" 
          (change)="log(firstNameVar)" id="firstName" type="text" class="form-control"
          required minlength="3">
        <div *ngIf="firstNameVar.touched && firstNameVar.errors">
          <div class="alert alert-danger" *ngIf="firstNameVar.errors.required">
            First name is required.
          </div>
          <div class="alert alert-danger" *ngIf="firstNameVar.errors.minlength">
            First name should be min {{firstNameVar.errors.minlength.requiredLength}} characters.
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea ngModel name="commentControl" #commentVar="ngModel" 
          id="comment" cols="30" rows="10" class="form-control" 
          required>
        </textarea>
        <div class="alert alert-danger" *ngIf="commentVar.touched && !commentVar.valid">Comment is required.</div>
      </div>
      <button class="btn btn-primary" type="submit" [disabled]="!contactForm.valid">Submit</button>
    </form>
  `,
  styles: [`
    .ng-touched.ng-invalid:not(form) {
      border: 1px solid red;
    }
  `]
})
export class ContactFormComponent {
  constructor() { }

  log(control) {
    console.log(control);
  }

  onSubmit(form) {
    console.log(form);
  }
}
