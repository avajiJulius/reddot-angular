import {Article} from './entities/article';
import {User} from './entities/user';

export const users: Array<User> = [
  {id: 1, username: 'avaji', email: 'avaji@reddot.com', password: '123', status: 'ONLINE', avatar: 'https://www.dictionary.com/e/wp-content/uploads/2015/08/Socialism_vs__Communism_1000x700_jpg_1gEUB2ad.jpg'},
  {id: 2, username: 'cat', email: 'cat@reddot.com', password: '123', status: 'ONLINE', avatar: 'https://pm1.narvii.com/7058/fc375b28596dbbdc42d924dd3f2b0d6df4a0152dr1-755-800v2_uhq.jpg'},
  {id: 3, username: 'psyco', email: 'psyco@reddot.com', password: '123', status: 'ONLINE', avatar: 'https://im.vsco.co/aws-us-west-2/a1065b/128169996/5d2b30609ae14d3e5fc0927f/vsco5d2b306267058.jpg?w=412&dpr=2.625'}
];

export const articles: Array<Article> = [
  {id: 1, title: 'Lemon', user: {id: 1, username: 'avaji', email: 'avaji@reddot.com', password: '123', status: 'ONLINE', avatar: 'https://www.dictionary.com/e/wp-content/uploads/2015/08/Socialism_vs__Communism_1000x700_jpg_1gEUB2ad.jpg'}, content: 'I love Lemons', hidden: false, rate: 20},
  {id: 2, title: 'War', user:   {id: 2, username: 'cat', email: 'cat@reddot.com', password: '123', status: 'ONLINE', avatar: 'https://pm1.narvii.com/7058/fc375b28596dbbdc42d924dd3f2b0d6df4a0152dr1-755-800v2_uhq.jpg'}, content: 'War is war', hidden: false, rate: -814},
  {id: 3, title: 'Peace', user:  {id: 3, username: 'psyco', email: 'psyco@reddot.com', password: '123', status: 'ONLINE', avatar: 'https://im.vsco.co/aws-us-west-2/a1065b/128169996/5d2b30609ae14d3e5fc0927f/vsco5d2b306267058.jpg?w=412&dpr=2.625'}, content: 'War is peace', hidden: false, rate: 1237294}
];
