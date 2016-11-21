import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
  <div class="voter">
    <div><i class="glyphicon glyphicon-menu-up vote-button" [ngClass]="{'selected': userVote===1}" (click)="onVote(1)"></i></div>
    <div>{{votes}}</div>
    <div><i class="glyphicon glyphicon-menu-down vote-button" [ngClass]="{'selected': userVote===-1}" (click)="onVote(-1)"></i></div>
  </div>
  `,
  styles: [`
    .voter {
      width: 20px;
      text-align: center;
      color: #999;
    }

    .vote-button {
      cursor: pointer;
    }

    .selected {
      color: orange;
    }
  `]
})
export class VoterComponent {
  @Input() votes = 0;
  @Input() userVote = 0;

  constructor() { }

  onVote(currentVote: number) {
    if ((currentVote === 1 && this.userVote < 1) || (currentVote === -1 && this.userVote > -1)) {
      this.userVote = currentVote + this.userVote;
      this.votes = this.votes + currentVote;
    }
  }

}
