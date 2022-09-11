import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Blog } from '../model/Blog';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {

  eidtForm:FormGroup;
  title:FormControl;
  description:FormControl;
  category:FormControl
  constructor() {
    this.title = new FormControl('',Validators.required)
    this.description = new FormControl('',Validators.required)
    this.category = new FormControl('')

    this.eidtForm = new FormGroup({
      title:this.title,
      description:this.description,
      category:this.category,
    });
  }

  ngOnInit(): void {
  }

  editBlog(blog: Blog){

  }

}
