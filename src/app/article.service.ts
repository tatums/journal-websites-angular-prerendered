import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';

import { Article } from './models/article'


@Injectable({
  providedIn: 'root'
})
export class ArticleService{

  constructor(
    private http: HttpClient
  ) { }

  getArticle(id: number): Observable<Article[]> {
    return this.http.get<Article[]>(`https://app.scholasticahq.com/api/v1/articles/${id}.json`)
      .pipe(
        tap(_ => console.log(`fetched article ${id}`))
      );
  }
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('https://app.scholasticahq.com/api/v1/articles.json?journal_id=20')
      .pipe(
        tap(_ => console.log('fetched articles'))
      );
  }

}
