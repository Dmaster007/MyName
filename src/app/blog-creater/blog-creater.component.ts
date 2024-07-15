import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blog-creater',
  standalone: true,
  imports: [],
  templateUrl: './blog-creater.component.html',
  styleUrl: './blog-creater.component.css'
})
export class BlogCreaterComponent {
  constructor(public auth : AuthService , public router : Router){
    if(auth.isAdmin!==true){
      router.navigateByUrl('/')
    }
  }
}
