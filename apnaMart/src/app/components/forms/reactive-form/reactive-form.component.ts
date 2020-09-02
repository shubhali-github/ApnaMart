import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from 'src/app/validator/username.validators';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: [],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name= new FormControl();
//here we make an object formObject and pass to html code 
min=21;
max=40;
  formObject = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(6), UsernameValidator.noSpace,UsernameValidator.valLength]),
    pass: new FormControl('', Validators.required,),
    lname: new FormControl()    
  });
 get getuname(){
   // console.log(this.formObject.get('userName'));
   return this.formObject.get('userName');
 }  
}
