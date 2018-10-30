import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.sass']
})
export class ConversationComponent implements OnInit {

  friendId: any;
  friends: User[];
  friend: User;
  price: Number = 78.486749857348975897349857;
  date: any = Date.now();

  constructor(private activateRoute: ActivatedRoute, private userService: UserService) {
    this.friendId = activateRoute.snapshot.params['uid'];
    this.friends = this.userService.getFriends();
    this.friend = this.friends.find((record) => {
      // tslint:disable-next-line:triple-equals
      return record.uid == this.friendId;
    });
  }

  ngOnInit() {
  }

}
