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



msg(){
  alert('hello')
}

}

