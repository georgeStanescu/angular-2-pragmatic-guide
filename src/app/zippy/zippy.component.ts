import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  template: `
    <div class="zippy">
      <div class="zippy-title" (click)="toggleExpand()">
        {{title}}
        <i class="pull-right glyphicon" 
          [ngClass]="{ 'glyphicon-chevron-down': !isExpanded, 'glyphicon-chevron-up': isExpanded }">
        </i>
      </div>
      <div *ngIf="isExpanded" class="zippyContent">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .zippy-title {
      width: 200px;
    }
  `]
})
export class ZippyComponent { 
  isExpanded = false;
  @Input() title: string;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
