import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../model/Blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postForm:FormGroup;
  title:FormControl;
  description:FormControl;
  category:FormControl
  constructor(private blogservice:BlogService,private router:Router) {


    this.title = new FormControl('',Validators.required)
    this.description = new FormControl('',Validators.required)
    this.category = new FormControl('')

    this.postForm = new FormGroup({
      title:this.title,
      description:this.description,
      category:this.category,
    });
   }

  ngOnInit(): void {
  }

  addBlog(blog: Blog) {
    blog.createAt=new Date();
    this.blogservice.addBlog(blog).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/view']);
    });
  }

}
