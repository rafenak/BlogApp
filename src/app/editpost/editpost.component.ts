import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../model/Blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css'],
})
export class EditpostComponent implements OnInit {
  eidtForm: FormGroup;
  title: FormControl;
  description: FormControl;
  category: FormControl;
  blogs: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogservice: BlogService
  ) {
    this.title = new FormControl(Validators.required);
    this.description = new FormControl(Validators.required);
    this.category = new FormControl();

    this.eidtForm = new FormGroup({
      title: this.title,
      description: this.description,
      category: this.category,
    });
    this.id = this.route.snapshot.paramMap.get('id');

    this.blogservice.getBlogById(parseInt(this.id)).subscribe((data) => {
      this.blogs = data;
      this.eidtForm.patchValue({
        title: this.blogs.title,
        description: this.blogs.description,
        category: this.blogs.category,
      });
    });
  }

  ngOnInit(): void {}

  editBlog(blog: Blog) {
    blog.createAt = new Date();
    console.log(blog);
    this.blogservice.updateBlog(blog, this.id).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/view']);
    });
  }
}
