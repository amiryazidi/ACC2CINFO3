import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor(private http : HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductById(id:number){
    return this.http.get<Product>('http://localhost:3000/products'+'/'+id)
    }
    AddProduct(product:Product){
      return this.http.post('http://localhost:3000/products',product)
    }

}
