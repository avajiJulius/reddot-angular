import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/user/author';
import { Article } from '../article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  public articles: Array<Article>;
  public author: Author = { id: 1, username: 'avaji' };

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
        'Lemons',
        'I love lemons',
        new Date(2008, 2, 12).toUTCString(),
        new Date(2012, 6, 7).toUTCString(),
        12,
        this.author
      ),
    ];
  }
}
