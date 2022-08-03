import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Post } from '../models/post.model';

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
                imageUrl: post.imageUrl
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
    createDate: Date,
    imageFile?: File,
  ): Observable<any> {
    console.log('add post');
    const formData = new FormData();
    formData.append('title', title);
    formData.append('postCollection', postCollection);
    formData.append('content', content);
    formData.append('contentPreview', contentPreview);
    formData.append('author', author);
    formData.append('createDate', createDate.toString());
    formData.append('imageFile', imageFile?imageFile:'', title);
    return this.http.post(this.BASE_URL + '/api/posts', formData);
  }
}
