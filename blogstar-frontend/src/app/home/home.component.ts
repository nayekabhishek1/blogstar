import { Component, OnInit } from '@angular/core';
import { AddPostService } from '../add-post.service';
import { Observable } from 'rxjs';
import { PostModel } from '../add-post/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts : Observable<Array<PostModel>>;
  constructor(private postService: AddPostService) { }

  ngOnInit(): void {
    this.posts=this.postService.getAllPost();
  }

}
