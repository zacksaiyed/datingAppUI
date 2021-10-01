
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'datingAppUI';
  users :any;

  constructor( private http:HttpClient){}

  ngOnInit(){
   this.getUsers();
  }

  getUsers(){
    this.http.post("https://localhost:44316/api/Users/GetUsers",null).subscribe(res=>{
      this.users=res;
    },error=>{
      console.log(error);
    })
  }
}
