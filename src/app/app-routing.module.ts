import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./course";
import { ContactFormComponent } from "./contact";
import { TweetComponent } from "./tweet";
import { GithubComponent } from "./github";

const appRoutes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'tweets', component: TweetComponent },
    { path: 'github/:user', component: GithubComponent },
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: '**', redirectTo: 'courses', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
