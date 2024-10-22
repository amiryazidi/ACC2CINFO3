import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private ps:ProductService, private cs :CalculService) { }
  priceMax!:number;

  listProduct=this.ps.listProduct

  increment(i:number){
    this.listProduct[i].like++
  }
  buy(i:number){
    this.listProduct[i].quantity--
  }

  stock:number= this.cs.stat(this.listProduct,'quantity',0)
}
