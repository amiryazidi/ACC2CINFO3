import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    constructor(private ps:ProductService, private route:Router) { }
  formProduct = new FormGroup(
    {
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required,Validators.minLength(3)]),
      price:new FormControl ('' ,[Validators.required,Validators.min(0)]),
      quantity:new FormControl (''),
      image:new FormControl ('' )
    }
  )

  add(){
    const FormValue = this.formProduct.value ;
    const product:Product = {
        id:Number(FormValue.id),
        title:FormValue.title ?? '',
        price:Number(FormValue.price),
        quantity:Number(FormValue.quantity),
        like:0,
        image:FormValue.image ?? ''
    }
    this.ps.listProduct.push(product)
    this.route.navigateByUrl('/product')
    console.log(this.formProduct.value)
  }
}
