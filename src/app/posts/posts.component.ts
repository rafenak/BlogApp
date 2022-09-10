import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/Blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  blogs: Blog[] = [];
  sortedBlogs: Blog[]=[]
  constructor(private blogservice: BlogService) {
    // this.blogs={
    //   title:"",description:"",category:"",createAt:this.d
    // }
  }

  ngOnInit(): void {
    this.blogservice.getAllBlogs().subscribe((data) => {
      console.log(data);
      this.blogs = data;
      this.sortedBlogs=this.getsortByLastModifiedDesc(this.blogs)
    });
  }

  getsortByLastModifiedDesc(blog:Blog[]) {
    return blog.sort((a: any, b: any) => {
      return <any>new Date(b.createAt) - <any>new Date(a.createAt);
    });
  }
  getsortByLastModifiedAsend(blog:Blog[]) {
    return blog.sort((a: any, b: any) => {
      return <any>new Date(b.createAt) - <any>new Date(a.createAt);
    });
  }
}
