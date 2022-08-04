import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { IndieComponent } from './indie/indie.component';
import { NewsComponent } from './news/news.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'indie', component: IndieComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'createPost', component: CreatePostComponent },
  { path: ':id', component: PostViewComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
