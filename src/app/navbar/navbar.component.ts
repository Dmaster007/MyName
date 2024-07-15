import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { NotificationsService } from '../notifications.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule ,RouterLink ,RouterModule,MatIconModule ,MatBadgeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(public auth : AuthService , public router : Router, public noti : NotificationsService){
    
  }
  greeting = this.auth.isAuthentiucated
  dropdownOpen=  true;
  notifdropdownOpen=  true;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  handleSignOut(){

  }

  toggleNotif(){
    this.notifdropdownOpen = !this.notifdropdownOpen
    if(this.notifdropdownOpen !== false){
      this.clearNotif();
    }
  }
  clearNotif(){
    
    this.noti.notificationList = [];
  }

}
