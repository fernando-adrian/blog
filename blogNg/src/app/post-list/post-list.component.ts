import { AfterContentInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() filter?: string = '';

  posts: Post[] = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts(this.filter?.toLocaleLowerCase());
    this.postService.getUpdatedPostListener().subscribe((posts) => {
      this.posts = posts;
    });
  }

}
