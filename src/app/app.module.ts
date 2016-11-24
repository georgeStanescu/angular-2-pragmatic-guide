import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppRoutingModule } from './routing/app-routing.module';

import { SignupModule } from "./signup/signup.module";
import { GithubModule } from "./github/github.module";
import { TweetModule } from "./tweet/tweet.module";
import { ContactModule } from "./contact/contact.module";
import { CourseModule } from "./course/course.module";

import { HighlightDirective } from "./common";
import { FavoriteComponent } from "./common";
import { VoterComponent } from './common';
import { SummaryPipe } from "./common";
import { PanelComponent } from "./common";
import { ZippyComponent } from "./zippy";

import { AppComponent }       from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    VoterComponent,
    PanelComponent,
    HighlightDirective,
    SummaryPipe,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2BootstrapModule,
    AppRoutingModule,

    SignupModule,
    GithubModule,
    TweetModule,
    ContactModule,
    CourseModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
