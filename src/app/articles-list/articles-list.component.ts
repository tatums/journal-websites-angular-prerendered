import { Component, OnInit } from '@angular/core';

import { Article } from '../models/article';
import { Observable, map } from 'rxjs';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  articles$: Observable<any> = this.articleService.getArticles().pipe(
    map((resp: any) => resp.articles)
  )

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void { }

}
