import {User} from './user';

export class Article {
  id: number;
  title: string;
  user: User;
  content: string;
  upload?: Date;
  edit?: Date;
  hidden: boolean;
  rate: number;
}
