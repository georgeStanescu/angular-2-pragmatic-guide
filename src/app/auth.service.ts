import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  isLoggedIn = false;

  login(username, password) {
    // normally we should send the login request to server
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
