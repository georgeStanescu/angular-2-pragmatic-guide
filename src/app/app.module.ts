import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./course";
import { CourseService } from "./course";

import { HighlightDirective } from "./common";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CourseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
