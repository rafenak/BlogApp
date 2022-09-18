import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../model/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  url: string = 'http://localhost:3000/blog';

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url);
  }
  getBlogById(id: number): Observable<Blog> {
    return this.http.get<Blog>(this.url + '/' + id);
  }
  addBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.url, blog);
  }
  updateBlog(blog: Blog, id: number): Observable<Blog> {
    return this.http.put<Blog>(this.url + '/' + id, blog);
  }
  // deleteBlog(id:number){
  //   this.http.delete(this.url+'/'+id)
  // }
  deleteBlog(id: number): Observable<Blog> {
    return this.http.delete<Blog>(this.url + '/' + id);
  }
}
