import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/user/author';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  public author: Author = { id: 1, username: 'avaji' };
  public articles: Array<Article>;

  constructor() {}

  ngOnInit(): void {
    this.articles = [
      new Article(
        1,
        'War',
        'War is war',
        new Date(1992, 12, 10).toUTCString(),
        new Date(2000, 10, 5).toUTCString(),
        12,
        this.author
      ),
      new Article(
        2,
        'Lemon',
        'I love Lemons',
        new Date(1992, 12, 10).toUTCString(),
        new Date(2000, 10, 5).toUTCString(),
        1003,
        this.author
      ),
    ];
  }
}
