import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Item} from '../app/item';
import {Products} from '../app/mock-products-list';
import{NewProduct} from '../app/NewProduct';
import { newProducts } from './newProducts-list';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl:string="https://localhost:44321/api";
  cartProducts:NewProduct[]=[];

 wishList:number[]=[];
  constructor(private _httpClient:HttpClient) { }
  // getProducts(): Observable<NewProduct[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   return of(NewProduct);
  // }
  getProduct(id: number): Observable<NewProduct> {
    // TODO: send the message _after_ fetching the hero
  
   // return of(newProducts.find(product => product.productid === id));
   return this._httpClient.get(`${this.apiurl}/newProduct/${id}`);
  }
  addCartProduct(prodcut:NewProduct)
  {
      this.cartProducts.push(prodcut);
  }
  getCartProducts():Observable<NewProduct[]>
  {
    return of(this.cartProducts);
  }
  addFavourite(num:number)
  {
      this.wishList.push(num);
  }
  getFavourite():Observable<number[]>
  {
    return of(this.wishList);
  
  }

  getNewProducts():Observable<object>{
    return this._httpClient.get(`${this.apiurl}/newProduct`);
   }


}
