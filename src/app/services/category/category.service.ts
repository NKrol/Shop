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

   getCategory() : Observable<Category[]>
   {
     return this.http.get<Category[]>("https://localhost:44360/category/get/")
   }
}
