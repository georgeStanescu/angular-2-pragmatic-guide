import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-panel>
      <div class="heading">Heading</div>
      <div class="body">this is the body</div>
      <div class="body">this is another body</div>
    </app-panel>
  `
})
export class AppComponent {
}
