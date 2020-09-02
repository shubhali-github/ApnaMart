import { ComServic } from 'src/app/services/com-servic.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptop.component.html',
  styles: [],
})
export class LaptopsComponent implements OnInit {
  lapParts: any[];
  constructor(private comServic: ComServic,
    private cartsService: CartsService) {
    }
  ngOnInit(){
    this.comServic.getLapParts().subscribe((res) => (this.lapParts = res));
  }
  handleAddToCart(mob) {
    this.cartsService.sendcart(mob);
  }
  calcProd() {
    let tot = 0;
    if (Array.isArray(this.lapParts)) {
      for (let mobPart of this.lapParts) {
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


}
