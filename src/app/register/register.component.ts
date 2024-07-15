import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule ,FormGroup, Validators } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatTabsModule ,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}
  name = new FormControl<string|null>('' , Validators.minLength(3))
  password = new FormControl<string|null>('', Validators.minLength(6))
  loginForm = new FormGroup({
    name : this.name,
    password : this.password
  })

  onSubmit(){
    this.authService.isAuthentiucated = true;
    if(this.name.value){
      this.authService.name = this.name.value
    } 
    if(this.password.value === this.authService.password && this.name.value === this.authService.admin){
      this.authService.isAdmin = true;
    }
    this.router.navigate([`/`]);
    console.log('heelo');
    
  }


}
