import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../entities/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit{
  @Input() article: Article;

  ngOnInit(): void {
  }

}