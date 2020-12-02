import { Data } from '@angular/router';
import { Author } from '../user/author';

export class Article {
  hidden: boolean = false;

  constructor(
    public articleId: number,
    public title: string,
    public content: string,
    public uploadDate: string,
    public editDate: string,
    public rate: number,
    public author: Author
  ) {}

  isPrivate(): boolean {
    return this.hidden == true;
  }
}
