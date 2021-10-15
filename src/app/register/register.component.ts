import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:any={};
  
  @Output() cancelRegister=new EventEmitter();

  constructor(private accountService:AccountsService) { }

  ngOnInit(): void {
  }

register(){
  this.accountService.register(this.model).subscribe(res=>{
  console.log(res);
  this.cancel();

  },error=>{
    console.log(error);
  })
}
cancel(){
  this.cancelRegister.emit(false);
}

}
