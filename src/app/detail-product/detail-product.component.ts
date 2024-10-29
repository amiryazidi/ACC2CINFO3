import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {

  constructor(private Act: ActivatedRoute, private ps:ProductService,private consP:ConsumerProductService) { }
  product!:Product
  id=this.Act.snapshot.params['id'];
  //product:Product = this.ps.listProduct.find(p=>p.id==this.id)!;
  //product: Product[] = this.ps.listProduct.filter(p => p.id == this.id)!;

  ngOnInit(){

    this.consP.getProductById(this.id).subscribe(
      (d)=>this.product=d
    )
  }



}
