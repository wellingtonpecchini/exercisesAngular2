import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[]= [
    {
      name: 'Wellington ',
      lastname: 'Pecchini ', 
      email: 'wellingtonpecchini@gmail.com ',
      fiscalCode: 'PCCWLN90A07Z6090 ',
      province: 'Milan ',
      phone:3334567896,
    },
    {
      name: 'Wellington2 ',
      lastname: 'Pecchini2 ', 
      email: 'wellingtonpecchini@gmail.com ',
      fiscalCode: 'PCCWLN90A07Z6090 ',
      province: 'Milan ',
      phone:3334567896 ,
    },
    {
      name: 'Wellington3 ',
      lastname: 'Pecchini4 ', 
      email: 'wellingtonpecchini@gmail.com ',
      fiscalCode: 'PCCWLN90A07Z6090 ',
      province: 'Milan ',
      phone:3334567896 ,
    }
  ];
  
  constructor() { }
  getUser(){
    return this.users;
  };

  
  deleteUser(user){
    // per eliminare un elemento dalla tabella si potrebbe utilizzare l'index off
    let index = this.users.indexOf(user);
    if(index >= 0){
    this.users.splice(index, 1);
    }
  }

}
