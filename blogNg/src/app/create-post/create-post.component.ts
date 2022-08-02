import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
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
  imageUrl?: string;
  imageFile?: File;
  postCollection: string[] = ['NEWS', 'REVIEWS', 'INDIE', 'OTHER'];

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
        this.imageFile,
      )
      .subscribe((postCreated) => {
        console.log(postCreated.message);
        this._snackBar.open(postCreated.message, 'Close', {
          duration: 3000,
        });
      });
  }

  upload(e: HTMLInputElement) {
    // console.log(e.files?[0].name);
    if (e.files?.length) {
      this.imageUrl = e.files[0].name;
      this.imageFile = e.files[0];
    }
  }
}
