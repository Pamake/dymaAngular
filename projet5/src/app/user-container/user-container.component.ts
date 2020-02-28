import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
  providers:[UserService]
})
export class UserContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
