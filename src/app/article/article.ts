import { Data } from '@angular/router';
import { Author } from '../user/author';

export class Article {
  constructor(
    public readonly articleId: number,
    public title: string,
    public content: string,
    public uploadDate: string,
    public editDate: string,
    public rate: number,
    public author: Author,
    public hidden: boolean
  ) {
    this.rate = 0;
    this.hidden = false;
  }
}
