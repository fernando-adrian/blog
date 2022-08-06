import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  filterBy: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let path: string | undefined = this.route.snapshot.routeConfig?.path;
    if (path !== undefined) this.filterBy = path;
  }
}
