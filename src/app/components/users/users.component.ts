import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@gmail.com',
          registered: new Date('01/02/2018 08:30:00'),
          isActive: true,
          hide: true
        },
      {
          firstName: 'Kevin',
          lastName: 'Johnson',
          email: 'kevin@gmail.com',
          registered: new Date('11/03/2014 08:23:00'),
          isActive: true,
          hide: true
        },
      {
          firstName: 'Karen',
          lastName: 'Smith',
          email: 'karen@gmail.com',
          registered: new Date('06/26/2016 03:56:21'),
          isActive: true,
          hide: true
        }
    ];

    this.loaded = true;

  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }

}
