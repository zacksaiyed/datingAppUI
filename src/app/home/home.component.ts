import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode=false;
  users:any;
  constructor(private http:HttpClient) { }
  

  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode=!this.registerMode;
  }

  getUsers(){
    this.http.post("https://localhost:44316/api/Users/GetUsers",null).subscribe(res=>{
      this.users=res;
    },error=>{
      console.log(error);
    })
  }

  cancelRegister(event:boolean){
    this.registerMode=event;
  }

}
