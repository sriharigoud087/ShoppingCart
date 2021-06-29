import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NewProduct } from '../NewProduct';
import { Item } from '../item';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  cartProducts: NewProduct[] = [];
  deletepro: Item;
  getCartProducts() {
    this.productService
      .getCartProducts()
      .subscribe((cartProducts) => (this.cartProducts = cartProducts));
  }
  onDelete(num: number) {
    for (var i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].productId === num) {
        this.cartProducts.splice(i, 1);
        this.getCartProducts();
        break;
      }
    }
  }
  ngOnInit(): void {
    this.getCartProducts();
  }
}
