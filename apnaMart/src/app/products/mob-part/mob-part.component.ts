import { Component, OnInit } from '@angular/core';
import { ComServic } from 'src/app/services/com-servic.service';
import { MobParts } from 'src/app/models/mob-parts';
//
import { CartsService } from '../../services/carts.service';
@Component({
  selector: 'app-mob-part',
  templateUrl: './mob-part.component.html',
  styles: [],
})
export class MobPartComponent implements OnInit {
  name: string = 'Alex';
  // name = 1234;

  constructor(
    private comServic: ComServic,
    private cartsService: CartsService
  ) {
    // D.inj to create OBJ
    console.log('2 Constructor Block...!');
  } // class: DI -> obj init

  ngOnInit() {
    this.comServic.getMobParts().subscribe((res) => (this.mobParts = res));
  }
  mobParts: MobParts[]; // 10MB

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
