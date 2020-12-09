import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Article } from '../article/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:8888/articles', {
      responseType: 'json',
    });
  }

  createArticleWithNotify(article: Article): Observable<any> {
    return this.http.post('http://localhost:8888/articles', article);
  }
}
