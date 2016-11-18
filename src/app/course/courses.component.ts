import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-courses",
  template: `
    {{ title }}
    <h2>Courses</h2>

    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent implements OnInit {
  title: string = "Courses page";

  courses: string[] = ["Course 1", "Course 2", "Course 3"]

  constructor() { }

  ngOnInit() {
  }

}
