import { Data } from '@angular/router';
import { Author } from '../user/author';

export interface Article {
  articleId: number;
  title: string;
  content: string;
  rate: number;
  author: Author;
  hidden: boolean;
}
