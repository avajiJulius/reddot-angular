import { Component } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css'],
})
export class ArticleCreateComponent {
  public article: Article;
  public confirmed: boolean = false;

  constructor() {
    this.article = new Article(
      3,
      '',
      'Test is important',
      new Date(1992, 12, 10).toUTCString(),
      new Date(2000, 10, 5).toUTCString(),
      100,
      { id: 2, username: 'cat' },
      false
    );
  }

  setArticleRate(rate) {
    this.article.rate = rate;
  }

  createArticle() {
    console.log('Create Article', this.article);
  }
}
