import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <ul>
      <li *ngFor="let course of courses, let i = index">
        {{ i + 1 }} - {{course}}
      </li>
    </ul>

    <ul>
      <template ngFor let-course [ngForOf]="courses" let-i="index">
        <li>{{ i + 1 }} - {{course}}</li>
      </template>
    </ul>
  `
})
export class AppComponent {
  courses = ["Course A", "Course B"];
}
