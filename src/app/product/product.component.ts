import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private ps:ProductService, private cs :CalculService, private consp:ConsumerProductService) { }
  priceMax!:number;
  listProduct:Product[]=[];

  //listProduct=this.ps.listProduct;

  ngOnInit(){
  this.consp.getProducts().subscribe(
      (data:Product[])=> this.listProduct=data
  );
}

  increment(i:number){
    this.listProduct[i].like++
  }
  buy(i:number){
    this.listProduct[i].quantity--
  }

  stock:number= this.cs.stat(this.listProduct,'quantity',0)
}
