import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router){}
  emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'

  ngOnInit(){
   
  }
  loginForm = new FormGroup({
    uName: new FormControl("",[Validators.required, Validators.maxLength(16)]),
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailRegex)]),
    password: new FormControl ("",[Validators.required])
  })
  uname(event: { charCode: any; }){
    var k ;
    k= event.charCode;
    return ((k>64 && k<91)|| (k>96 && k< 123))
  }

  getControl(name:any):AbstractControl|null{
    return this.loginForm.get(name);
    
  }
  loginbtn(){
    console.log(this.loginForm.value);
    return this.router.navigate(['/dashboard']);
  }
}
