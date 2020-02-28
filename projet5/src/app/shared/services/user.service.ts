import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../modeles/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([new User('patrick')]);

  addUser(user: User): void {

    const users = this.users.value.slice();
    users.push(new User(user.name));
    this.users.next(users);

  }

}