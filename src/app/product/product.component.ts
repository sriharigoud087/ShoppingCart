import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ProductService } from '../product.service';
import { NewProduct } from '../NewProduct';
import { newProducts } from '../newProducts-list';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  //products: Item[] = [];
  newProducts_list: any = [];

  constructor(private productService: ProductService) {}
  // getProducts():void{
  //   this.productService.getProducts()
  //       .subscribe(products => this.products = products);
  // }

  getNewProducts(): void {
    this.productService.getNewProducts().subscribe((products) => {
      this.newProducts_list = products;
    });
  }

  ngOnInit(): void {
    //  this.getProducts();
    this.getNewProducts();
  }
}
