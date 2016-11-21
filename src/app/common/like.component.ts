import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  template: `
    <i class="glyphicon glyphicon-heart" (click)="onLikeClicked()" [ngClass]="{'like-clicked': isLiked}"></i>
    {{likes}}
    `,
  styles: [`
    .glyphicon-heart {
      cursor: pointer;
      color: #cccccc;
    }
    
    .like-clicked {
      color: deeppink;
    }
  `]
})
export class LikeComponent {
  @Input() likes: number = 0;
  @Input() isLiked: boolean = false;

  onLikeClicked() {
    this.isLiked = !this.isLiked;

    if (this.isLiked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
 }
