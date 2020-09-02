import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartsService } from 'src/app/services/carts.service';
import { MobParts } from 'src/app/models/mob-parts';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styles: [
  ]
})
export class ProductViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private cartsService: CartsService) {
    activatedRoute.paramMap.subscribe((param)=>
    //console.log('param:',param);
      console.log('param:', param.get('prodObj'))

    );
   }
cartItems=[];
  ngOnInit(){
  }

    
  }