import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule ,RouterLink ,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(public auth : AuthService){

  }
  greeting = this.auth.isAuthentiucated
  dropdownOpen=  true;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  handleSignOut(){

  }

}
