import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostModel } from './post-model';
import { AddPostService } from '../add-post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  addPostForm: FormGroup;
  title = new FormControl('');
  body = new FormControl('');
  postModel: PostModel;


  constructor(private addPostService:AddPostService , private router:Router) {
    this.addPostForm = new FormGroup(
      {
        title: this.title,
        body: this.body
      }
    )

    this.postModel = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit(): void {
  }


  addPost() { 
    this.postModel.content=this.addPostForm.get('body').value;
    this.postModel.title=this.addPostForm.get('title').value;
    this.addPostService.addPost(this.postModel).subscribe(
      data => {
        console.log("Blog Post created successfully");
        this.router.navigateByUrl("/home");
      },
      error => {
        console.log("Failure response while creating blog post");
      }
    );
  }
}
