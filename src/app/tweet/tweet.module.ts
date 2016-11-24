import { NgModule } from '@angular/core';
import { LikeComponent } from "../common";
import { CommonModule } from "@angular/common";

import { TweetService, TweetComponent }  from "./";

@NgModule({
  imports: [ CommonModule ],
  exports: [ TweetComponent ],
  declarations: [ TweetComponent, LikeComponent ],
  providers: [ TweetService ],
})
export class TweetModule { }
