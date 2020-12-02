import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articleCards: Array<ArticleCardComponent>;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    // this.getArticles();
  }

  // private getArticles() {
  //   this.articleService.getArticleList().subscribe((data) => {
  //     this.articles = data;
  //   });
  // }
}
