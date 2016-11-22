import { Component, OnInit } from "@angular/core";
import { PostService } from "./post";

@Component({
  selector: "app-root",
  template: `
    <div *ngIf="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
  `,
  providers: [PostService]
})
export class AppComponent implements OnInit {

  isLoading = true;

  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(posts => {
        this.isLoading = false;
        console.log(posts[0].title);
      });
  }
}
