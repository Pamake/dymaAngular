import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/modeles/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  public user: User = {name: ''};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   
    
  }


  ajoutUtilisateur(): void {
    console.log(this.user);

    this.userService.addUser(this.user);
  }
}
