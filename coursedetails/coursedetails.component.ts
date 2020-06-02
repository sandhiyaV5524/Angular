import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Course } from '../course';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  courses:Course[];
  constructor(private router:Router, private service : RegistrationService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(
      response => {this.courses = response;}
     );
  }

  handleSuccessfulResponse(response)
  {
      this.courses=response;
  }
  deleteEmployee(){
    
  }
}
