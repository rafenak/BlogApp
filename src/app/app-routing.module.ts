import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpostComponent } from './editpost/editpost.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'add', component: PostComponent },
  { path: 'view', component: PostsComponent },
  { path: 'edit/:id', component: EditpostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
