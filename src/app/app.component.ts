import { Component } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UMS';

  userSelected: User = new User();

  showForm: boolean = false;
  
  onMyUpdateUsers(user){
    this.showForm = true;
    this.userSelected = user;
  } 
  newUser(){
    this.userSelected = new User();
    this.showForm = true;

  }
}
