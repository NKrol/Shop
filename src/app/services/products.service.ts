import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../components/products/product';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ProductDetails } from '../components/dialog-product/productDetails';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = "https://10.8.0.1:8201/product/";
  baseUrlLocal: string = "https://localhost:44360/product/";
  constructor(
    private http: HttpClient
  ) { }

  getProducts(searchPhrase: string = "", pageNumber: number = 1, pageSize: number = 12, category: string="", subcategory: string = "", sortName: boolean, sortPrice: boolean, asc: boolean):  Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl + 'getall/',
    {params: {
      SearchPhrase: searchPhrase ?? null,
      PageNumber: pageNumber ?? 1,
      PageSize: pageSize ?? 12,
      Category: category ?? null,
      SubCategory: subcategory ?? null,
      SortName : sortName,
      SortPrice : sortPrice,
      Asc : asc
    }});
  }

  getSingleProduct(productId: any): Observable<ProductDetails>{
    return this.http.get<ProductDetails>(this.baseUrl + productId);
  }

  getToCart(productsIds: string): Observable<any>{
    return this.http.get<any>(this.baseUrl + "tocart", {params: {
      numbers: productsIds
    }} );
  }
}