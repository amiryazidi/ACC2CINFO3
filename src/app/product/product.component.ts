import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private ps:ProductService) { }
  priceMax!:number;

  listProduct=this.ps.listProduct

  increment(i:number){
    this.listProduct[i].like++
  }
  buy(i:number){
    this.listProduct[i].quantity--
  }
}
