import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title:string = "welcome 2cinfo3"
color:string = "red"
image:string = "https://www.w3schools.com/w3images/lights.jpg"
listUsers = [
  {id : 1 ,name: 'John', age: 25},
  {id : 2 ,name: 'Amir', age: 28},
  {id : 3 ,name: 'nour', age: 29},
]

listProduct = [
  {id : 1 ,title: 'Iphone 15', prix: 2000, quantity: 10, like: 0},
  {id : 2 ,title: 'Iphone 16', prix: 3000, quantity: 0, like: 0},
  {id : 3 ,title: 'Iphone 17', prix: 4000, quantity: 5, like: 0},

]

msg(){
  alert('hello')
}

}

