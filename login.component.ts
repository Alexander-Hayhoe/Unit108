import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  UserName='';
  password='';
  allUsers = [];
  LoginError = false;

  constructor( private data: DataService, private router : Router, private shared: SharedService) { 
  this.allUsers = data.userList;  
  }

  login(){

    var found = false;
    for(let i=0; i < this.allUsers.length; i++){

    var user = this.allUsers[i];
    if(user.UserName == this.UserName && user.password == this.password){
      console.log("Login Successful");
      found = true;
      this.LoginError = false;

      this.shared.isUserLoggedIn = true;
      this.shared.userName = user.userName;

      this.router.navigate(['/user/register']);
    }
  }

  if(!found){
    console.error("Wrong password");
    this.LoginError = true;
    }
  }
}
