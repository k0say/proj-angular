import { getDefaultService } from "selenium-webdriver/opera"
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { UserInterface } from '../interfaces/UserInterface';

@Injectable()
export class UserService {

  users: Array<User> = [
    {
      id: 1,
      name: 'Hidranos',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '45454545',
      age: 23
    },
    {
      id: 2,
      name: 'asdqwe',
      lastname: 'Arias',
      email: 'ssss@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '2222222',
      age: 33
    },
    {
      id: 3,
      name: 'Hidran',
      lastname: 'Arias',
      email: 'rrrrrr@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '3466666',
      age: 53
    }
  ]
  constructor() {
  }
/*
  getUsers()  {
    return this.users;
  }
*/
  getUser(id: number): User {
    return this.users.find(user => user.id === id);
  }

  deleteUser(user) {
    let index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1)
    }
  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    if(idx !== -1)  {
      this.users[idx] = user;
    }
  }

  createUser(user: UserInterface) {
      user.id = this.users.length + 1;
      this.users.splice(0,0,user);
    }
}