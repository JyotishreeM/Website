import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {
  IsHide!: false;
  IsView!: false;
  entpwd :any;
  rentrpwd: any;
  Enterpwd(event:any){
    var k = event.charCode;
   
    return((k > 32 && k < 127))
    
  }

  reEnterpwd(event:any){
    var k = event.charCode;
    return((k > 32 && k < 127));
    
  }

}
