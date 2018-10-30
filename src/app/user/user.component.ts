import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component({
  // inputs: [
  //   'user: user-data'
  // ],
  // outputs: [
  //   'onDeleteUser: userDelete = new EventEmitter()'
  // ],
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // variabile di input ovvero la ricevo dal suo componente padre => users.component e la inserisco all'interno del mio user.component.html
  
  //questo input è uguale a quello che c'è dentro al component
  @Input('user-data') user: User;

  @Output() userDeleted = new EventEmitter();
  @Output() userSelected = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  deleteUser(user){
    this.userDeleted.emit(user)
  }
  updateUser(user){
    this.userSelected.emit(user)
  }
}
