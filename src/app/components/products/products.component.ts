import { Component, Input, OnInit } from '@angular/core';
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
  searchPhrase: string = "";

  sortName: boolean = true;
  sortPrice: boolean = false;
  sortAsc : boolean = true;

  categoryAll: any;
  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
    private matDialog: MatDialog
  ) { }

  changePhrase(a: any){
    this.searchPhrase = a;
    this.loadProduct();
  }

  ngOnInit(): void {
    this.loadProduct();
    
    this.categoryService.getCategory().subscribe(res => {
      this.categoryAll = res
    });
  }

  addPage(){
    let check = this.pageNumber;
    if(check++ < this.productsAll.TotalItems){ 
      this.pageNumber++;
      this.loadProduct();
    }
    else{
      alert("Jesteś na ostatniej stronie")
    }
  }
  minusPage(){
    let check = this.pageNumber;
    if(check-- > 1){ 
    this.pageNumber--;
    this.loadProduct();
    }
    else{
      alert("Nie można wyśiwetlić strony mniejszej od 1")
    }
  }

  sortNameConfig(asc: any){
    this.sortName = true;
    this.sortPrice = false;
    this.sortAsc = asc;
    this.pageNumber = 1;
    this.loadProduct();
  }

  sortPriceConfig(asc: any){
    this.sortName = false;
    this.sortPrice = true;
    this.sortAsc = asc;
    this.pageNumber = 1;
    this.loadProduct();
  }

  resetFilters(){
    this.sortPrice = false;
    this.sortName = true;
    this.sortAsc = true;
    this.searchPhrase = "";
    this.categorySearch = "";
    this.subCategorySearch = "";
    this.pageNumber = 1;
    this.loadProduct();
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
  findPhrease(){
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
    this.productService.getProducts(this.searchPhrase, this.pageNumber, Number.parseInt(this.pageSize) , this.categorySearch, this.subCategorySearch, this.sortName, this.sortPrice, this.sortAsc).subscribe(res => {
      this.productsAll = res
    });
  }

  loadCategory(){
    this.categoryService.getCategory().subscribe(res => {
      this.categoryAll = res
    });
  }
}
