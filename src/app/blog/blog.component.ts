import { Component, Input } from '@angular/core';
import blogs from './data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
    blogs = blogs
    @Input() title ='';
    @Input() content ='';
    @Input() author ='';
    @Input() img ='';



}
