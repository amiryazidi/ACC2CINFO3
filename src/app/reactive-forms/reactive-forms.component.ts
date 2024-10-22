import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  formLogin = new FormGroup(
    {
      login:new FormControl('',[Validators.required,Validators.minLength(3)]),
      pwd:new FormControl ('' ,[Validators.required,Validators.pattern(/^['a-zA-Z0-9']{6,}$/)]),
      tel:new FormControl ('' ,[Validators.required,Validators.pattern(/^['0-9']{8}$/)]),
      email:new FormControl ('' ,[Validators.required,Validators.email])
    }
  )

  show(){
    console.log(this.formLogin)
  }
}
