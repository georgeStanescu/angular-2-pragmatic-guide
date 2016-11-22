import { Component, OnInit } from "@angular/core";
import { PostService } from "./post";
import { GithubService, GithubUser } from "./github";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/map";

@Component({
  selector: "app-root",
  template: `
    <div *ngIf="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <div *ngIf="!isLoading && githubUser && githubUser.user">
      <h1>{{githubUser.user.login}}</h1>
      <img class="media-object avatar-large" src="{{githubUser.user.avatar_url}}">
      <h2>Followers</h2>
      <div class="media" *ngFor="let follower of githubUser.followers">
        <div class="media-left media-middle">
          <a href="#">
            <img class="media-object avatar" src="{{follower.avatar_url}}">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">{{follower.login}}</h4>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .avatar {
      width: 100px;
      height: 100px;
    }
    .avatar-large {
      width: 150px;
      height: 150px;
    }
  `],
  providers: [PostService, GithubService]
})
export class AppComponent implements OnInit {

  isLoading = true;
  githubUser: GithubUser;
  username: string = "octocat";

  constructor(private _githubService: GithubService) {
  }

  ngOnInit() {
    Observable
      .forkJoin(
        this._githubService.getUser(this.username),
        this._githubService.getFollowers(this.username)
      )
      .map(joined => <GithubUser>{user: joined[0], followers: joined[1]})
      .subscribe(gu => {
          this.githubUser = gu;
        },
        null,
        () => {
          this.isLoading = false;
        }
      );
  }
}
