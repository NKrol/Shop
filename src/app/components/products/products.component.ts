import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from './product';
import {CategoryService} from 'src/app/services/category/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsAll: any;

  categoryAll: any;
  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.productsAll = res
    });

    this.categoryService.getCategory().subscribe(res => {
      this.categoryAll = res
    });
  }
  realoadCat(category: string){
    this.productService.getProducts("", 1, 12, category).subscribe(res => {
      this.productsAll = res
    });
  }

  reloadSub(category: string, subcategory: string){
    this.productService.getProducts("", 1, 12, category, subcategory).subscribe(res => {
      this.productsAll = res
    });
  }

  loadProduct(){
    this.productService.getProducts().subscribe(res => {
      this.productsAll = res
    });
  }

  loadCategory(){
    this.categoryService.getCategory().subscribe(res => {
      this.categoryAll = res
    });
  }
}
