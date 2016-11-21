import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-voter [votes]="serverResponse.totalVotes" [userVote]="serverResponse.myVote"></app-voter>
  `
})
export class AppComponent {
  serverResponse = {
    totalVotes: 10,
    myVote: 0
  };
}
