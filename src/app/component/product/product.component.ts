import { Component } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  product:any;
  constructor(private http:HttpClient,private products:ProductServiceService){
    
  }
  public data = [
    {name: 'test', email: 'test@gmail.com', website:'test.com'},
    {name: 'nest', email: 'nest@gmail.com', website:'nest.com'},
    {name: 'pest', email: 'pest@gmail.com', website:'pest.com'},
    {name: 'chest', email: 'chest@gmail.com', website:'chest.com'},
];
  title = 'angulardatatables';
  dtOptions: any = {};
  dtTrigger : Subject<any> = new Subject<any>();
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
           // 'copy', 'csv', 'excel', 'print'
            { extend: 'pdf', className: 'btn btn-warning' },
            { extend: 'csv', className: 'btn btn-warning' },
            { extend: 'excel', className: 'btn btn-warning' },
            { extend: 'print', className: 'btn btn-warning' },
        ]
    };
    this.LoadData()
}
LoadData(){
  this.products.products().subscribe((data)=>this.product = data);
  console.log(this.product);
  this.dtTrigger.next(null);
}
OnClickBtn(){
  
}
}
