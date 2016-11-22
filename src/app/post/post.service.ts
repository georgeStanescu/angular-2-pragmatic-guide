import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { IPost } from "./post";

@Injectable()
export class PostService {
  private _url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) { }
  
  getPosts(): Observable<IPost[]> {
    return this._http.get(this._url)
    .map(response => response.json())
    // .toPromise()
    .catch(this.handleError);
  };

  createPost(post: IPost) {
    return this._http.post(this._url, JSON.stringify(post))
      .map(res => res.json)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}
