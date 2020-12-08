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

  createUser(signUp) {
    console.log('Sign up form ', signUp.value);
    if (signUp.valid) {
      this.user = signUp.value.user;
      console.log('Creating user', this.user);
    } else {
      console.log('Form is in an invalid state');
    }
  }
}
