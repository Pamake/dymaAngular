import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/modeles/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  /**
   * */
  public users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.userService.users.subscribe((users: User[]) =>{
     this.users = users;
    });
  }
}
