import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: `
    <app-courses></app-courses>
    <div (click)="onDivClick()">
      <button class="btn btn-primary" on-click='onClick($event)'>Click one</button>
      <button class="btn btn-primary" (click)='onClick($event)'>Click two</button>
    </div> 
  `
})
export class AppComponent {

  onDivClick() {
    event.stopPropagation();
  }

  onClick(event) {
    event.stopPropagation();
    console.log("Clicked", event);
  }
}
