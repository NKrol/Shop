import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(
    private http: HttpClient
    ) {

   }
   baseUrl: string = "https://10.8.0.1:8201/";
   baseUrlLocal: string = "https://localhost:44360/";
   getCategory() : Observable<Category[]>
   {
     return this.http.get<Category[]>( this.baseUrl + "category/get/")
   }
}
