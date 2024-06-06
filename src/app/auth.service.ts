import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthentiucated = false;
  public name = 'User'
  

  // constructor() { 
  //   this.loadFromLocalStorage()
  // }

  // private loadFromLocalStorage() {
  //   const isAuthenticated = localStorage.getItem('isAuthenticated');
  //   const name = localStorage.getItem('name');
  //   this.isAuthentiucated = isAuthenticated ? JSON.parse(isAuthenticated) : false;
  //   this.name = name ? name : 'User';
  // }
}
