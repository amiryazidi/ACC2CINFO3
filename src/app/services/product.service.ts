import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listProduct:Product[] = [
    {id : 1 ,title: 'Iphone 15', price: 2000, quantity: 10, like: 0,image: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large.jpg'},
    {id : 2 ,title: 'Iphone 16', price: 3000, quantity: 0, like: 0,image: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large.jpg'},
    {id : 3 ,title: 'Iphone 17', price: 4000, quantity: 5, like: 0,image: 'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large.jpg'},

  ]
  constructor() { }

  
}
