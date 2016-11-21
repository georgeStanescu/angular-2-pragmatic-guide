import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: `
    <app-favorite [isClicked]="serverResponse.isFavorite"></app-favorite>
  `
})
export class AppComponent {
  serverResponse = {
    title: "title",
    isFavorite: true
  }
}
