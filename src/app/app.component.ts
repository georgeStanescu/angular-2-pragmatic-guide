import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <ul class="nav nav-pills">
      <li [class.active]="viewMode =='map'"><a (click)="viewMode='map'">Map View</a></li>
      <li [class.active]="viewMode =='list'"><a (click)="viewMode='list'">List View</a></li>
    </ul>
    <div [ngSwitch]="viewMode">
      <template [ngSwitchCase]="'map'">Map View Content</template>
      <template [ngSwitchCase]="'list'">List View Content</template>
      <template ngSwitchDefault>Default View Content</template>
    </div>
  `
})
export class AppComponent {
}
