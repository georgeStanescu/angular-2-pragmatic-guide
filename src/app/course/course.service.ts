import { Injectable } from "@angular/core";

@Injectable()
export class CourseService {

  constructor() { }

  getCourses(): any[] {
    return [
      {
        name: "Course 1",
        author: "octocat"
      },
      {
        name: "Course 2",
        author: "DeborahK"
      },
      {
        name: "Course 3",
        author: "johnpapa"
      }
    ];
  }
}
