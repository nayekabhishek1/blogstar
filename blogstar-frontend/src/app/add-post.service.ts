import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './add-post/post-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {


  private createPostURL = 'http://localhost:8082/api/post/create';
  private showAllPostURL = 'http://localhost:8082/api/post/all';
  private showPostbyIdURL= 'http://localhost:8082/api/post/all/';

  constructor(private httpClient: HttpClient) { }


  addPost(postModel:PostModel)
  {
  return this.httpClient.post(this.createPostURL,postModel);
  }

  getAllPost(): Observable<Array<PostModel>>
  {
    return this.httpClient.get<Array<PostModel>>(this.showAllPostURL);
  }

  getPostById(permaLink: Number): Observable<PostModel>
  {
    return this.httpClient.get<PostModel>(this.showPostbyIdURL+permaLink);
  }
}
