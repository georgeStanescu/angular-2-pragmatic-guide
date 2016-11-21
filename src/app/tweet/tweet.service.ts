import { Injectable } from "@angular/core";
import { Tweet } from "./tweet";

@Injectable()
export class TweetService {

  constructor() { }

  getTweets(): Tweet[] {
    return [
      new Tweet("http://lorempixel.com/100/100/people?5", "hey hey!", 
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.", 7, true),
      new Tweet("http://lorempixel.com/100/100/people?6", "hello hello!", 
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.", 5, false),
      new Tweet("http://lorempixel.com/100/100/people?7", "yey yey!", 
        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.", 1, true)
    ];
  }
}
