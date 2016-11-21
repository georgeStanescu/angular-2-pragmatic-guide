import { Component } from '@angular/core';
import { TweetService } from './tweet.service';
import { Tweet } from './tweet';

@Component({
  selector: 'app-tweet',
  template: `
  <div class="media" *ngFor="let tweet of tweets">
    <a class="media-left" href="#">
      <img class="media-object" src="{{tweet.imageSource}}" alt="Generic placeholder image">
    </a>
    <div class="media-body">
      <h4 class="media-heading">{{tweet.heading}}</h4>
      {{tweet.content}}
      <div>
        <app-like [likes]="tweet.totalLikes" [isLiked]="tweet.likedByMe"></app-like>
      </div>
    </div>
  </div>
  `
})
export class TweetComponent {
  tweets: Tweet[];


  constructor(private tweetService: TweetService) {
    this.tweets = this.tweetService.getTweets();
  }

}
