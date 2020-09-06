import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import{MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
 
import{MatFormField} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { UploadProductComponent } from './upload-product/upload-product.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductsComponent,
    ProductComponent,
    DetailProductComponent,
    CartListComponent,
    LoginSignupComponent,
    UploadProductComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
