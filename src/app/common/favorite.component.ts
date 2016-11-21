import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  template: `
    <i class="glyphicon" (click)="onElementClicked()" [ngClass]="{'glyphicon-star-empty': !isClicked, 'glyphicon-star': isClicked}"></i>
    `
})
export class FavoriteComponent { 
  @Input() isClicked: boolean = false;

  onElementClicked() {
    this.isClicked = !this.isClicked;
  }
}
