import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl: string = "https://10.8.0.1:8201/order/";
  baseUrlLocal: string = "https://localhost:44360/order/";
  constructor(
    private http: HttpClient
  ) { }

  getToCart(productsIds: string): Observable<any>{
    return this.http.get<any>(this.baseUrl + "CreateOrder", {params: {
      numbers: productsIds
    }} );
  }
}
