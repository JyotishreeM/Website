import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormBuilder,FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms'
import { PasswordMatch } from 'src/app/Validators/passworddMatch';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
integerRegex = /^\d+$/
emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
  registerForm = new FormGroup({
    fname:new FormControl("", [Validators.required, Validators.maxLength(16)]),
    lname:new FormControl("", [Validators.required, Validators.maxLength(16)]),
    age:new FormControl("", [Validators.required,Validators.max(60), Validators.min(18), Validators.pattern(this.integerRegex)]),
    mobile:new FormControl("", [Validators.required,Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)]),
    email:new FormControl("", [Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]),
    password:new FormControl("", [Validators.required, Validators.minLength(8),Validators.maxLength(24)]),
    confirm_password:new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(24)]),
 
  },[PasswordMatch ("password", "confirm_password")])
  constructor(private router:Router){}
 

  ngOnInit(){}

  getControl(name:any):AbstractControl|null{
    return this.registerForm.get(name)
  }
  onSubmit(){
    console.log(this.registerForm.value)
    this.router.navigate(['/dashboard']);
  }
}
