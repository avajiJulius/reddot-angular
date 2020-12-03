import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
  @Input() public articleCards: Array<Article>;
  @Output() private rateUp: EventEmitter<Article>;
  @Output() private rateDown: EventEmitter<Article>;

  constructor() {
    this.rateUp = new EventEmitter<Article>();
    this.rateDown = new EventEmitter<Article>();
  }

  onRateUp(i) {
    this.rateUp.emit(this.articleCards[i]);
    console.log(i);
  }

  onRateDown(i) {
    this.rateDown.emit(this.articleCards[i]);
  }
}
