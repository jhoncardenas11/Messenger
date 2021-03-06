import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  friends: User[];
  query = '';

  constructor(private userService: UserService) {
    this.friends = userService.getFriends();
  }

  ngOnInit() {
    $(document).ready(function() {
      M.updateTextFields();
    });
  }

}
