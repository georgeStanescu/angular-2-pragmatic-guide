import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: `
    <input type="text" [value]="content" (input)="content = $event.target.value">
    <input type="text" [(ngModel)]="content" >
    <input type="text" bindon-ngModel="content" >
    <input type="button" value="Clear" (click)="content='' ">
    <label>Preview: {{ content }}</label>
  `
})
export class AppComponent {
  content: string = "Some content";
}
