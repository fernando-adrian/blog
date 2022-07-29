import { Component, Input, OnInit } from '@angular/core';
import { ActionsEnum } from '../enum/actions.enum';
import { Actions } from '../models/actions.model';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post?: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
