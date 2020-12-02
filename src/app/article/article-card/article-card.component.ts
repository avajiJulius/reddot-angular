import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
  @Input() public articleCards: Array<Article>;

  constructor() {}
}
