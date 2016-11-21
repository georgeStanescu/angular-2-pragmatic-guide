import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./course";
import { CourseService } from "./course";

import { HighlightDirective } from "./common";
import { FavoriteComponent } from "./common";
import { LikeComponent } from "./common";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    LikeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  providers: [ CourseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
