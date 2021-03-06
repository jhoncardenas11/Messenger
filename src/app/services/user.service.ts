import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  friends: User[];

  constructor() {

    const myUser: User = {
      nick: 'jhon',
      subnick: 'cardenas',
      age: 25,
      email: 'jhoncardenas.11@gmail.com',
      friend: true,
      icon: 'account_circle',
      status: 'green',
      nowInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      uid: 1
    };

    const user1: User = {
      nick: 'eduardo',
      subnick: 'gonzales',
      age: 30,
      email: 'egonzales@gmail.com',
      friend: true,
      icon: 'account_circle',
      status: 'red',
      nowInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      uid: 2
    };

    const user2: User = {
      nick: 'Freddy',
      subnick: 'gomez',
      age: 18,
      email: 'freddy@gmail.com',
      friend: false,
      icon: 'account_circle',
      status: 'gray',
      nowInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      uid: 3
    };

    const user3: User = {
      nick: 'leo',
      subnick: 'pinto',
      age: 22,
      email: 'pitnoleo@gmail.com',
      friend: false,
      icon: 'account_circle',
      status: 'orange',
      nowInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      uid: 4
    };

    const user4: User = {
      nick: 'nancy',
      subnick: 'lopez',
      age: 32,
      email: 'nl@gmail.com',
      friend: true,
      icon: 'account_circle',
      status: 'green',
      nowInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      uid: 5
    };

    const user5: User = {
      nick: 'lina',
      subnick: 'marquez',
      age: 24,
      email: 'marlin@gmail.com',
      friend: true,
      icon: 'account_circle',
      status: 'red',
      nowInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      uid: 6
    };

    this.friends = [user1, user2, user3, user4, user5];

  }

  getFriends() {
    return this.friends;
  }

}
