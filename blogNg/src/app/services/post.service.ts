import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe, Subject, Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { Actions } from '../models/actions.model';
import { ActionsEnum } from '../enum/actions.enum';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  BASE_URL = 'http://localhost:3000';
  posts?: Post[] = [];
  postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getUpdatedPostListener(): Observable<Post[]> {
    return this.postsUpdated.asObservable();
  }

  getAllPosts(filter?: string) {

    // filter = filter? '/' + filter: '';
    this.http
      .get(this.BASE_URL + '/api/posts/' + filter)
      .pipe(
        map((postData: any) => {
          return {
            maxPosts: postData.maxPosts,
            posts: postData.posts.map((post: any) => {
              return {
                id: post._id,
                title: post.title,
                content: post.content,
                contentPreview: post.contentPreview,
                author: post.author,
                createDate: post.createDate,
                totalLikes: post.totalLikes,
              };
            }),
          };
        })
      )
      .subscribe((postsData: any) => {
        this.postsUpdated.next(postsData.posts);
      });
  }

  addPost(
    title: string,
    postCollection: string,
    author: string,
    content: string,
    contentPreview: string,
    createDate: Date
  ): Observable<any> {
    console.log('add post');
    return this.http.post(this.BASE_URL + '/api/posts', {
      title,
      postCollection,
      content,
      contentPreview,
      author,
      createDate,
    });
  }
}
