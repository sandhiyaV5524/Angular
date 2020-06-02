import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient ) { }
  /*public loginUserFromRemote(user :User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/login",user.emailId+user.password)

  }*/
  public registerUserFromRemote(user :User){
    return this.http.post("http://localhost:8090/enter/add",user,{responseType: 'text' as 'json'})

  }
  public loginUserFromRemote(login :Login)
  {
      let temp=new String(login.emailId);
      let temp1=new String(login.password);
      console.log("temp="+temp);
      return this.http.post("http://localhost:8090/enter/authenticate",login,{responseType: 'text' as 'json'});
  }

  getEmployees()
  {
    console.log("test call");
    return this.http.get<Course[]>('http://localhost:8090/enter/getcourses');
  }
 

}
