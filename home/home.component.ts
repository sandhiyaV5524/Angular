import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
  getUrl()
{
  return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
}

  User(e) {
  	e.preventDefault();
    console.log(e);
     this.user.setUserLoggedIn();
  		this.router.navigate(['login']);
  	}

}

