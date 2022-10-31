import { Injectable } from '@angular/core';
import { Product } from '../model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Products! : Array<Product>;
  

  constructor() { 
    this.Products=[
      {id:1, name : "Computer",price : 6500, promotion:true},
      {id:2, name : "Printer",price : 1200, promotion:true},
      {id:3, name : "Smart Phone",price : 1400,promotion:false},

  
    ];
  }
  public getAllProducts() {
    return this.Products
   
  }
}
