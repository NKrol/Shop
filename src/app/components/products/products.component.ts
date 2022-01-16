import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from './product';
import {CategoryService} from 'src/app/services/category/category.service';
import { DialogProductComponent } from '../dialog-product/dialog-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  productsAll: any;
  categorySearch: string = "";
  subCategorySearch: string = "";
  pageSize: string = "15";
  pageNumber: number = 1;

  categoryAll: any;
  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadProduct();
    
    this.categoryService.getCategory().subscribe(res => {
      this.categoryAll = res
    });
  }

  changeSize(): void {
    this.loadProduct();
  }

  openDialog(productId: string): void {
    this.matDialog.open(DialogProductComponent, {
      data: productId,
      width: "1000px",
      height: "600px",
      disableClose: true,
      hasBackdrop: false,
      autoFocus: true
    });
  }

  addToCart(productId: string): void {
    let cart = localStorage.getItem('cart');
    if(cart){
      cart += productId + ';';
      localStorage.setItem('cart', cart);
    }else{
      localStorage.setItem('cart', productId + ";");
    }
  }

  realoadCat(category: string){
    this.categorySearch = category;
    this.subCategorySearch = "";
    this.pageNumber = 1;
    this.loadProduct();
  }

  reloadSub(category: string, subcategory: string){
    this.categorySearch = category;
    this.subCategorySearch = subcategory;
    this.pageNumber = 1;
    this.loadProduct();
  }

  loadProduct(){
    this.productService.getProducts("", this.pageNumber, Number.parseInt(this.pageSize) , this.categorySearch, this.subCategorySearch).subscribe(res => {
      this.productsAll = res
    });
  }

  loadCategory(){
    this.categoryService.getCategory().subscribe(res => {
      this.categoryAll = res
    });
  }
}
