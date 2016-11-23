import { Component, OnInit, OnDestroy } from "@angular/core";
import { GithubService } from "./github.service";
import { GithubUser } from "./github-user";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription }   from 'rxjs/Subscription';
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/map";

@Component({
  selector: "app-github",
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
  providers: [GithubService]
})
export class GithubComponent implements OnInit, OnDestroy {
  isLoading = true;
  githubUser: GithubUser;
  username: string = "octocat";
  private _subscription: Subscription;

  constructor(private _githubService: GithubService, private _route: ActivatedRoute) {
  }

  ngOnInit() {
    // easy way, but not recommended when reusing the same component multiple times(as ngOnInit is called ony once)
    // this.username = this._route.snapshot.params["users"];

    this._subscription = this._route.params.subscribe((params) => {
      this.username = params['user'];
    });

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

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }
}
