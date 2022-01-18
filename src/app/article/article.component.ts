import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  params: any
  article: any

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      console.log('params', params)
      this.articleService.getArticle(params.id).subscribe(article => {
        this.article = article
      })
    });
  }

}
