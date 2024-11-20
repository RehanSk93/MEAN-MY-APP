import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  loggedIn: boolean = false;
  
  isAuthenticate() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.login)
      }, 800)
    }) 
  }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }

  constructor() {}
}
