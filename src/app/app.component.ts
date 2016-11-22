import { Component } from "@angular/core";
import {FormGroup, FormBuilder } from "@angular/forms";
// import { Observable } from "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

@Component({
  selector: "app-root",
  template: `
    <form [formGroup]="searchForm">
      <input type="text" formControlName="searchControl">
    </form>
  `
})
export class AppComponent {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      searchControl: []
    });

    let searchControl = this.searchForm.get("searchControl");

    searchControl.valueChanges
      .debounceTime(1000)
      .subscribe(x => console.log(x));
  }
}
