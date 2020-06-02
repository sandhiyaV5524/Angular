import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ConsoleLog: any;
  registerForm: FormGroup;

  constructor(private router:Router, private service : RegistrationService) { }
  user =new User(0,"","","");
  msg ="";
  ngOnInit() {
    
     
  }

  Register() {
    let resp=this.service.registerUserFromRemote(this.user);
    resp.subscribe(
      data => {console.log("response received");
      this.msg="Registration Successful";
      this.router.navigate(['/login'])
    },
      error => {
        console.log("exception occured");
        this.msg=error.error;
      }

    );
  }
  /** 	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	
  	if(username == 'sandy' && password == 'sandhiya@gmail.com') {
      this.user.setUserLoggedIn();
  		this.router.navigate(['login']);
  	}
  }*/

}
