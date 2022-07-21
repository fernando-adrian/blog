import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { IndieComponent } from './indie/indie.component';
import { NewsComponent } from './news/news.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'indie', component: IndieComponent },
  { path: 'contact', component: ContactoComponent },
  { path: '', component: PostListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
