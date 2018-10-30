import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user:User;
  constructor(private userService : UserService) { }

  ngOnInit() {
  }
  
  // closeMyForm: boolean = true;

  saveUser(user){
    if(this.user.id > 0){
      this.userService.newUpdateUser(user);
    }
    else {
      this.userService.createUser(user);
    }
  }
  resetForm(){
    this.user = new User();
    // this.closeMyForm = false;

  }

}
