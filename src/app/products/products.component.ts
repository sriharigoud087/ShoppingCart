import { Component, Input, OnInit } from '@angular/core';
import {Item} from '../item';
import { NewProduct } from '../NewProduct';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product:NewProduct;
  selectedProduct:Item;
 
  constructor(private productService:ProductService) { }
  onFavourite()
  {
      this.productService.addFavourite(1);
     
  }
 
  ngOnInit(): void {
    
  }

}
