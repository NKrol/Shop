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
   baseUrl: string = "http://localhost:40435/";
   getCategory() : Observable<Category[]>
   {
     return this.http.get<Category[]>( this.baseUrl + "category/get/")
   }
}
