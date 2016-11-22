import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { User} from "./";
import "rxjs/add/operator/catch";

@Injectable()
export class GithubService {
  private _baseUrl = "https://api.github.com/users/";

  constructor(private _http: Http) {

  }

  getUser(username: string): Observable<User> {
    return this._http.get(this._baseUrl + username)
      .map(response => <Observable<User>>response.json())
      .catch(this.handleError);
  }

  getFollowers(username: string): Observable<User []> {
    return this._http.get(this._baseUrl + username + "/followers")
      .map(response => <Observable<User []>>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}
