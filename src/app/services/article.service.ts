import { Injectable } from '@angular/core';
import { Article } from '../article/article';
import { Author } from '../user/author';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public author: Author = { id: 1, username: 'avaji' };
  public articles: Array<Article>;

  constructor() {
    this.articles = [
      new Article(
        1,
        'War',
        'War is war',
        new Date(1992, 12, 10).toUTCString(),
        new Date(2000, 10, 5).toUTCString(),
        12,
        this.author,
        false
      ),
      new Article(
        2,
        'Lemon',
        'I love Lemons',
        new Date(1992, 12, 10).toUTCString(),
        new Date(2000, 10, 5).toUTCString(),
        1003,
        this.author,
        false
      ),
      new Article(
        3,
        'Test',
        'Test is important',
        new Date(1992, 12, 10).toUTCString(),
        new Date(2000, 10, 5).toUTCString(),
        100,
        this.author,
        false
      ),
    ];
  }

  getArticles(): Array<Article> {
    return this.articles;
  }

  createArticle(article: Article) {
    if (this.articleIsExist(article)) {
      return false;
    }
    this.articles.push(article);
    return true;
  }

  onRateUp(article: Article) {
    let foundArticle = this.findArticle(article);
    foundArticle.rate++;
  }

  onRateDown(article: Article) {
    let foundArticle = this.findArticle(article);
    foundArticle.rate--;
  }

  private articleIsExist(article: Article): boolean {
    let foundArticle = this.findArticle(article);
    if (foundArticle) {
      return true;
    } else {
      return false;
    }
  }

  private findArticle(article: Article) {
    return this.articles.find((each) => each.title === article.title);
  }
}
