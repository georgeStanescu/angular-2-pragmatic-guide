import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./course";
import { CourseService } from "./course";

import { TweetService } from "./tweet";
import { TweetComponent } from "./tweet";

import { HighlightDirective } from "./common";
import { FavoriteComponent } from "./common";
import { LikeComponent } from "./common";
import { VoterComponent } from './common';
import { SummaryPipe } from "./common";
import { PanelComponent } from "./common";

import { ZippyComponent } from "./zippy";

import { ContactFormComponent } from "./contact";
import { SignupFormComponent } from "./signup";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    LikeComponent,
    VoterComponent,
    TweetComponent,
    PanelComponent,
    HighlightDirective,
    SummaryPipe,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  providers: [ CourseService, TweetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
