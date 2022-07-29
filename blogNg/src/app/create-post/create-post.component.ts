import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  post?: Post;
  createDate: Date;
  postCollection: string[] = [
    'NEWS',
    'REVIEWS',
    'INDIE',
    'OTHER'
  ];

  constructor(
    private postService: PostService,
    private _snackBar: MatSnackBar
  ) {
    this.createDate = new Date();
  }

  onPublish(formValue: any) {
    if (formValue.invalid) return;

    this.postService
      .addPost(
        formValue.title,
        formValue.postCollection,
        formValue.author,
        formValue.content,
        formValue.contentPreview,
        new Date(),
      )
      .subscribe((postCreated) => {
        console.log(postCreated.message);
        this._snackBar.open(postCreated.message, 'Close', {
          duration: 3000
        });
      });
  }
}
