import { Author } from './author';

export class User {
  constructor(
    public identity: Author,
    public email: string,
    public password: string
  ) {}
}
