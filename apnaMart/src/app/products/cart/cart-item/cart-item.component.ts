import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../../services/carts.service';
import { MobParts } from 'src/app/models/mob-parts';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  cartItems = [];
  constructor(private cartsService: CartsService) {}
  cartTotal: number;
  private value;
  ngOnInit() {
    this.cartsService.getcart().subscribe((product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product) {
    if (this.cartItems.length == 0) {
      this.cartItems.push({
        productName: product.name,
        price: product.price,
        imgs: product.prodImg,
        des: product.description,
        id: product.id,
        quantity: product.quantity,
      });
    } else {
      for (let i in this.cartItems) {
        if (this.cartItems[i].id === product.id) {
          this.cartItems[i].quantity++;
        } else {
          this.cartItems.push({
            productName: product.name,
            price: product.price,
            imgs: product.prodImg,
            des: product.description,
            id: product.id,
            quantity: 1,
          });
        }
      }
    }
     this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
       console.log("total", this.cartTotal)
     })
    console.log(product);
  }
  removeitem(data) {
    for (let i in this.cartItems) {
    if (data == this.cartItems[i].id) {
      this.cartItems = this.cartItems.filter(item => item.id !== data);
    }
    }
  }
  
  
  }

