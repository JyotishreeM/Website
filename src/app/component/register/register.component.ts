import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit{

  fname(event: any){
    var k = event.charCode;
    return ((k>64 && k<91)|| (k> 96 && k<123));

  }
  Username(event:any){
    var k = event.charCode;
    return((k>64 && k< 91)|| (k>96 && k< 123) || (k>47 && k< 58));
  }
  emailInput(event:any){
    var k = event.charCode;
    return((k==46)||(k== 64)||(k>47 && k<58)||(k>64 && k<91)|| (k>96 && k< 123));
  }

  maxDate:any ;
  futureDateDisable(){
    var date:any = new Date();
    var todayDate: any = date.getDate() - 1;
    var month:any = date.getMonth() +1;
    var year: any = date.getFullYear();
    if(todayDate < 10){
      todayDate = "0"+ todayDate;
    }
     
    if(month < 10){
        month = "0"+ month;
    }
   
    this.maxDate = year + "-" + month + "-" + todayDate;
    console.log(this.maxDate);
  }
  ngOnInit(){
    this.futureDateDisable();
  }
}
