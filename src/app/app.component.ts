import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-zippy title="Who can see my stuff?">
      Content of who can see my stuff
    </app-zippy>
    <app-zippy title="Who can contact me?">
      Content of who can contact me
    </app-zippy>
  `
})
export class AppComponent {
}
