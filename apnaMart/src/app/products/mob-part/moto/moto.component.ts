import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css'],
})
export class MotoComponent  {
  mobParts: any[];

  constructor(private angularFireDatabase: AngularFireDatabase, private cartsService: CartsService) {
    angularFireDatabase
      .list('/apiData')
      .valueChanges()
      .subscribe((mobParts) => {
        this.mobParts = mobParts;
        console.log(this.mobParts);
      });
  }
  calcProd() {
    let tot = 0;
    if (Array.isArray(this.mobParts)) {
      for (let mobPart of this.mobParts) {
        tot = tot + mobPart.inStock;
      }
    }
    return tot;
  }

  upQuantity(mobPart) {
    // alert('We are in upQuantity');
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }

  catchVal(eventdata, eveObj) {
    console.clear();
    console.log("we are in 'catchVal' ", eventdata);
    console.log(' eveObj ', eveObj);
  }
  handleAddToCart(mob) {
    this.cartsService.sendcart(mob);
  }
}
