import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";

@Component({
  selector: "app-courses",
  template: `
    {{ title }}
    <h2>Courses</h2>

    <ul>
      <li *ngFor="let course of courses">
        {{ course.name }} by <a [routerLink]="['/github', course.author]">{{ course.author | uppercase }}</a>
      </li>
    </ul>
  `
})
export class CoursesComponent implements OnInit {
  title: string = "Courses page";

  courses: any[] = [];

  constructor(private courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
