import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from '../material-module';
import {NavComponent} from './nav/nav.component';
import { DialogProductComponent } from './components/dialog-product/dialog-product.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavComponent,
    DialogProductComponent,
    ShopCartComponent
  ],
  imports: [
    MatMenuModule,
    MatButtonModule,
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
