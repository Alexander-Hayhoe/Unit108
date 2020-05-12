import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userList: User[] = [];

  constructor() { 
  var admin = new User();
  admin.firstName = 'Admin';
  admin.lastName = 'User';
  admin.userName = 'Admin';
  admin.password = '12345';
  
  this.userList.push(admin);
  }


  saveUser(user){
    this.userList.push(user);
  }
}
