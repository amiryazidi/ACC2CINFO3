import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  id!:number
  product!:Product
  constructor(private route:Router,private consP:ConsumerProductService, private act:ActivatedRoute) { }

  ngOnInit(){
    // - récuperer l'id depuis l'url
    this.id= this.act.snapshot.params['id']
    //2- récuperer le produit à partir de l'id
    this.consP.getProductById(this.id).subscribe(
      (data)=> {
        this.product=data,
        //3- remplir le formulaire par les données du produit
        this.formProduct.patchValue(this.product as any)
      }
    )
  }
  formProduct = new FormGroup(
    {
      id:new FormControl('',Validators.required),
      title:new FormControl('',[Validators.required,Validators.minLength(3)]),
      price:new FormControl ('' ,[Validators.required,Validators.min(0)]),
      quantity:new FormControl (''),
      image:new FormControl ('' )
    }
  )

  update(){
      this.consP.updateProduct(this.formProduct.value as any,this.id).subscribe(
         ()=>this.route.navigateByUrl('/product')
      )
  }
}
