import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: `
    <app-favorite></app-favorite>
  `
})
export class AppComponent {
  content: string = "Some content";
}
