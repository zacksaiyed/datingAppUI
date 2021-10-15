import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

baseUrl ="https://localhost:44316/api/";

private currentUserSource= new ReplaySubject<User>(1);
currentUser$= this.currentUserSource.asObservable();

  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post(this.baseUrl+'Account/Login',model).pipe(
    map((response:User)=>{
      const user=response;
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
        this.currentUserSource.next(user);
      }
      })
    )
   }
   setCurrentUser(user){
     this.currentUserSource.next(user);
   }
   logout(){
     localStorage.removeItem('user');
     this.currentUserSource.next(null);
   }


   register(model:any){
     return this.http.post(this.baseUrl+'Account/Register',model).pipe(
      map((user:User)=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })

     )
   }

  

}
