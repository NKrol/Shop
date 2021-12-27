import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDetails } from './productDetails';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css']
})
export class DialogProductComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    public router: Router,
    private productsService: ProductsService,
    private matDialogRef: MatDialogRef<DialogProductComponent>
  ) { }
  
  productDetails!: ProductDetails;

  addToCart(productId: number): void {
    let cart = localStorage.getItem('cart');
    if(cart){
      cart += productId + ";" ;
      localStorage.setItem('cart', cart);
    }else{
      localStorage.setItem('cart', productId.toString());
    }
  }

  loadData(productId: string): void {
    this.productsService.getSingleProduct(productId).subscribe(res => {
      this.productDetails = res;
    })
  }
  ngOnInit(): void {
    console.log(this.data);
    if (this.data != "") {
      this.loadData(this.data);
    }else{
      return;
    }
  }

  onClose() {
    this.matDialogRef.close(this.data);
  }
}
