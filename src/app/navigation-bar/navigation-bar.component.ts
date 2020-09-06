import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { NewProduct } from '../NewProduct';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  constructor(private productService: ProductService) {}
  cartProducts: NewProduct[] = [];
  wishList: number[] = [];
  count: number = 0;
  getCartProducts() {
    this.productService
      .getCartProducts()
      .subscribe((cartProducts) => (this.cartProducts = cartProducts));
  }
  getFavourite() {
    this.productService
      .getFavourite()
      .subscribe((wishlist) => (this.wishList = wishlist));
  }
  ngOnInit(): void {
    this.getCartProducts();
    this.getFavourite();
    
  }

  

}
