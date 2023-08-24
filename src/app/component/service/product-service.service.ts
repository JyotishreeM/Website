import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private http:HttpClient) { }
  
  products(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}
