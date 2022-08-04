import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
})
export class PostViewComponent implements OnInit {
  post!: Post;
  constructor(private postService: PostService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.postService.getPost(this.router.snapshot.paramMap.get('id'))
    this.postService.getUpdatedPostListener().subscribe((post) => {
      this.post = post;
      console.log(post);
    });
  }
}
