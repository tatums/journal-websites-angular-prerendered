import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component'
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: 'articles/:id',
    component: ArticleComponent
  },
  {
    path: '',
    component: ArticlesListComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
