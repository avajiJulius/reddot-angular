import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Author } from 'src/app/user/author';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  public articles: Array<Article>;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  onRateUp(article: Article) {
    this.articleService.onRateUp(article);
  }

  onRateDown(article: Article) {
    this.articleService.onRateDown(article);
  }
}
