import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: `
    <app-courses></app-courses>
    
    <h4>Pick a highlight color</h4>
    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>
    <p [appHighlight]="color">Highlight me!</p>
  `
})
export class AppComponent {
  color: string;
}
