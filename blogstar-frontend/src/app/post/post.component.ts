import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { PostModel } from '../add-post/post-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  permaLink: Number;
  post: PostModel;
  constructor(private route: ActivatedRoute, private postService: AddPostService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.permaLink = params['id'];
    });


    this.postService.getPostById(this.permaLink).subscribe(
      (data: PostModel) => {
        this.post = data;
      },
      (err: any) => {
        console.log("Failure Response");
      });

  }



}
