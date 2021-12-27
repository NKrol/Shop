import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  carts: any;
  cartDetails: any;
  numbers: any;
  constructor(private productService: ProductsService,
    public router: Router) {
    this.numbers = localStorage.getItem('cart');
  }

  _getCart(): void {
    this.productService.getToCart(this.numbers).subscribe((data: any) => {
      this.carts = data;
      // this.cartDetails = data.data;
      console.log(this.carts);
    });
  }
  _increamentQTY(/*id: any,*/ quantity: any): void {
    const payload = {
      productId: 1,
      quantity,
    };
    // this.http.increaseQty(payload).subscribe(() => {
    //   this._getCart();
    //   alert('Product Added');
    // });
  }
  _emptyCart(): void {
    // this.http.emptyCart().subscribe(() => {
    //   this._getCart();
    //   alert('Cart Emptied');
    // });
  }
  ngOnInit(): void {
    this._getCart();
  }
  removeFromCart(productId: number){
    let allIds = localStorage.getItem('cart');
    allIds = allIds!.replace(productId.toString() + ";", '');
    localStorage.setItem('cart', allIds);
    window.location.reload();
  }
}
