import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Login } from '../login';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private service : RegistrationService) { }
  login: Login=new Login("","");
  msg="";
  ngOnInit() {
  }

  loginUser() {
    console.log("hey world!");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      let resp=this.service.loginUserFromRemote(this.login);
      resp.subscribe( data => {console.log("response received");
      this.msg="Logged in";
      this.router.navigate(['/dashboard'])    
    },
      error => {
        console.log("exception occured");
        this.msg=error.error;
      }
      );
  }
    /** e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	
  	if(username == 'admin' && password == 'admin') {
      this.user.setUserLoggedIn();
  		this.router.navigate(['dashboard']);
    } 
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {console.log("response received");
      this.router.navigate(['/dashboard'])
    },
      error => {
        console.log("exception occured");
        this.msg="bad credentials,please enter valid emailid and password";
      }
    );
  

  }*/
}
