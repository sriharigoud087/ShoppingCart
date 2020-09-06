import { Component, OnInit,Input } from '@angular/core';
import {Item} from  '../item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';
import {NewProduct} from '../NewProduct';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  cartNumber:number=0;
  product:NewProduct;
  newProducts_list:any=[];
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) { }
  getProduct(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    // //alert("selectd");
    // const id = +this.route.snapshot.paramMap.get('id');
     this.productService.getProduct(id)
       .subscribe(product=> this.product = product);
  }
  cartProducts:Item[]=[];
 
  onClick(pro:NewProduct)
  {
      this.productService.addCartProduct(pro);
      
  }
  ngOnInit(): void {
    this.getProduct();
  }

}
