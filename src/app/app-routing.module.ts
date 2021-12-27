import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';

const routes: Routes = [
  {path: 'home', component: ProductsComponent},
  {path: 'cart', component: ShopCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


