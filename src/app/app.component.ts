import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-like [likes]="serverResponse.totalLikes" [isLiked]="serverResponse.isLiked"></app-like>
  `
})
export class AppComponent {
  serverResponse = {
    totalLikes: 10,
    isLiked: false
  };
}
