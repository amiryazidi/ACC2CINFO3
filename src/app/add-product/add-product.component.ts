import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {


  formProduct = new FormGroup(
    {
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required,Validators.minLength(3)]),
      price:new FormControl ('' ,[Validators.required,Validators.min(0)]),
      quantity:new FormControl (''),
      image:new FormControl ('' )
    }
  )

  show(){
    console.log(this.formProduct.value)
  }
}
