import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styles: [],
})
export class TemplateFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  cities=[
    {code:1,city:"pune"},
    { code: 2, city: "mumbai" },
    { code: 3, city: "nagpur" },
    { code: 4, city: "solapur" }
  ]
  log(tempVar) {
   // console.log(tempVar);
   console.log(tempVar.value);
  }
  showForm(ftempVar){
   // console.log(ftempVar);
    console.log(ftempVar.value);
  }
}
