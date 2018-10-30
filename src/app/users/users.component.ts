import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = "Users";
  users: User[] = [];
  
  //output
  @Output() updateUser = new EventEmitter();

  constructor( private service : UserService) { 
  }

  ngOnInit() {
    this.users = this.service.getUser();
  }
  onDeleteUser(user){
    this.service.deleteUser(user);
  }
  onSelectedUser(user){
    //userCopy è una copia di user per fare in modo che non venga modificato direttamente ma viene modificato una sua copia.
    // assigne da la possibilità di assegnare user ad un oggetto vuoti
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }

}
