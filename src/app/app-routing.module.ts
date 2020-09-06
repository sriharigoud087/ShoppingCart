import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ProductComponent } from './product/product.component';
import { UploadProductComponent } from './upload-product/upload-product.component';

const routes: Routes = [
  { path:'detail/:id', component: DetailProductComponent },
  { path:'cart', component: CartListComponent },
  {path:'detail-component',component:DetailProductComponent},
  {path:'',component:ProductComponent,pathMatch:'full'},
  {path:'products',component:ProductComponent},
  {path:'cart-list',component:CartListComponent},
  {path:'login-signup',component:LoginSignupComponent},
  {path:'upload-product',component:UploadProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
