import { Component } from '@angular/core';
import{ProductServiceService} from '../service/product-service.service';
let fruits: Array<string>;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  product:any;
  fruits = [
    {
      id:1,
      name:'Apple'
    
    },
    {
      id:2,
      name:'Orange'
    
    },
    {
      id:3,
      name:'Kiwi'
    
    }

  ]; 
  constructor( private products:ProductServiceService){
    products.products().subscribe((data)=>this.product = data);
    console.log(this.product)
  }
  ngOnInit(){
   
  }
}
