import { Component, OnInit } from '@angular/core';
import { AddProduct } from '../AddProduct';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css'],
})
export class UploadProductComponent implements OnInit {
  constructor(private _httpClient: HttpClient) {}

  apiurl: string = 'https://localhost:44321/api/newProduct';

  product = new AddProduct(
    1998,
    'sriha',
    ' ',
    'edd ',
    ' sdfsefd',
    'dsfsdfs ',
    ' sdfsdfs',
    'sdfsdfs ',
    'sdfsfs ',
    ''
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.product));
    this._httpClient.post<any>(this.apiurl, this.product).subscribe((x) => {
      console.log(x);
    });

    alert(JSON.stringify(this.product));
  }

  onClick() {
    this.product = new AddProduct(1998, '', ' ', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {}
  get diagnostic() {
    return JSON.stringify(this.product);
  }
}
