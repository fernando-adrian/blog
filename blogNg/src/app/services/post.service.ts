import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe, Subject, Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { Actions } from '../models/actions.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  BASE_URL = 'https://thronesapi.com';
  posts?: Post[] = [];
  postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getAllPosts() {
    this.http.get(this.BASE_URL + '/api/v2/Characters').subscribe((chars: any) => {
      this.posts = [];
      chars.forEach((char: any) => {
        this.posts?.push({
          title: char.fullName,
          subtitle: char.title,
          imageUrl: char.imageUrl,
          content: char.fullName + ' of ' + char.family,
          actions: [ {name: 'READ_MORE'} ]
        });
      });
      console.log(this.posts);
      this.postsUpdated.next(this.posts);
    });
  }

  getUpdatedPostListener(): Observable<Post[]>{
    return this.postsUpdated.asObservable();
  }
}
