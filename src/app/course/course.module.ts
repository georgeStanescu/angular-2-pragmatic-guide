import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CoursesComponent, CourseService }  from './';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [],
  declarations: [ CoursesComponent ],
  providers: [ CourseService, AuthService],
})
export class CourseModule { }
