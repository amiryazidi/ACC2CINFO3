import { ProductService } from './../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {

  constructor(private Act: ActivatedRoute, private ps:ProductService) { }

  id=this.Act.snapshot.params['id'];
  product:Product = this.ps.listProduct.find(p=>p.id==this.id)!;
  //product: Product[] = this.ps.listProduct.filter(p => p.id == this.id)!;



}
