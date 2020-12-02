import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl = 'http://localhost:8888/articles';
  constructor(private httpClient: HttpClient) {}

  getArticleList(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.baseUrl}`);
  }
}
