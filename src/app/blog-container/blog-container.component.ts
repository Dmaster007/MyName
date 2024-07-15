import { Component } from '@angular/core';
import blogs from '../blog/data';
import Blog from '../blog/blogI';
import { BlogComponent } from '../blog/blog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-container',
  standalone: true,
  imports: [BlogComponent ,CommonModule],
  templateUrl: './blog-container.component.html',
  styleUrl: './blog-container.component.css'
})
export class BlogContainerComponent {
  blogs : Blog[] = blogs;
}
