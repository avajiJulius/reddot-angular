import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  public user: User;
  public confirmed: boolean = false;

  constructor() {
    this.user = new User({ id: null, username: '' }, '', '');
  }

  createUser() {
    console.log('User is ', this.user);
  }
}
