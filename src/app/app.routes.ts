import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BlogCreaterComponent } from './blog-creater/blog-creater.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'register' , component:RegisterComponent},
    {path:'create' , component:BlogCreaterComponent}
];
