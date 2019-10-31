import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})

export class UsersComponent implements OnInit {
  title = 'Users';
  users: Array<User> = [];

  @Output() updateUser = new EventEmitter<User>();

  constructor(private service: UserService) {
    this.service = service;
  }
  ngOnInit(): void {
    this.users = this.service.users;
  }

  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({},user);
    this.updateUser.emit(userCopy);
  }

}