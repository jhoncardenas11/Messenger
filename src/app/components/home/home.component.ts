import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  friends: User[]

  constructor() {

    let myUser: User = {
      nick: 'jhon',
      subnick: 'cardenas',
      age: 25,
      email: 'jhoncardenas.11@gmail.com',
      friend: true,
      uid: 1
    }

    let user1: User = {
      nick: 'eduardo',
      subnick: 'gonzales',
      age: 30,
      email: 'egonzales@gmail.com',
      friend: true,
      uid: 2
    }

    let user2: User = {
      nick: 'Freddy',
      subnick: 'gomez',
      age: 18,
      email: 'freddy@gmail.com',
      friend: false,
      uid: 3
    }

    let user3: User = {
      nick: 'leo',
      subnick: 'pinto',
      age: 22,
      email: 'pitnoleo@gmail.com',
      friend: false,
      uid: 4
    }

    let user4: User = {
      nick: 'nacy',
      subnick: 'lopez',
      age: 32,
      email: 'nl@gmail.com',
      friend: true,
      uid: 5
    }

    let user5: User = {
      nick: 'lina',
      subnick: 'marquez',
      age: 24,
      email: 'marlin@gmail.com',
      friend: true,
      uid: 6
    }

    this.friends = [user1, user2, user3, user4, user5]

  }

  ngOnInit() {
  }

}
