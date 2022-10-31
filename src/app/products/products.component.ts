import { Component, OnInit } from '@angular/core';
import { Product } from '../model/products.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Products! : Array<Product>;
  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
    this.Products=this.ProductService.getAllProducts();
      
    }


 
  handleDeleteProduct(p : any){
    let conf=confirm("Are you sure? ")
    if(conf==false) return;
    let index=this.Products.indexOf(p);
    this.Products.splice(index,1);
    
    

  }
}

  



