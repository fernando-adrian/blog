import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
    {
      title: 'titulo1',
      subtitle: 'subtitulo1',
      content: 'contenido 1',
      imageUrl: 'null',
    },
    {
      title: 'titulo2',
      subtitle: 'subtitulo2',
      content: 'contenido 2',
      imageUrl: 'null',
    },
    {
      title: 'titulo3',
      subtitle: 'subtitulo3',
      content: 'contenido 3',
      imageUrl: 'null',
    },
    {
      title: 'titulo4',
      subtitle: 'subtitulo4',
      content: 'contenido 4',
      imageUrl: 'null',
    },
  ];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts();
    this.postService.getUpdatedPostListener().subscribe((posts)=>{
      this.posts = posts;
      console.log('mapped',posts);
    });

  }

}
