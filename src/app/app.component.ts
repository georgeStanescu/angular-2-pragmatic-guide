import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: `
    <app-favorite [isClicked]="serverResponse.isFavorite" (change)="onFavoriteChanged($event)"></app-favorite>
  `
})
export class AppComponent {
  serverResponse = {
    title: "title",
    isFavorite: true
  };

  onFavoriteChanged(event) {
    console.log(event);
  }
}
