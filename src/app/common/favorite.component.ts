import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  template: `
    <i class="glyphicon" (click)="onElementClicked()" [ngClass]="{'glyphicon-star-empty': !isClicked, 'glyphicon-star': isClicked}"></i>
    `,
  styles: [`
    .glyphicon-star {
      color: orange;
    }
  `]
})
export class FavoriteComponent { 
  @Input() isClicked: boolean = false;
  @Output() change = new EventEmitter();

  onElementClicked() {
    this.isClicked = !this.isClicked;

    this.change.emit({ newValue: this.isClicked });
  }
}
