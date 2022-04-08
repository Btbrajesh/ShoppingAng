import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin =this.fb.group({
    userName :['',Validators.required],
    password : ['',Validators.required]
  })
  constructor(private fb: FormBuilder,private loginService :LoginService ) { }

 
  ngOnInit(): void {
  }

  loginUser(){
    this.loginService.login(this.userLogin.get('userName')?.value,this.userLogin.get('password')?.value).subscribe((loggedIn:any)=>{
      if(loggedIn.isSuccess){
        alert('Login successful!');
      }
    })
  }


}
