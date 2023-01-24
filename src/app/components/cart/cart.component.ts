import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { getCart, removeCartItem } from 'src/app/utils/storageManager';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalCartItems = 0;
  totalPrice = 0;
  messageText = "Hello Canopy, I am interested in the following products";

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.cartItems = getCart();
      this.totalCartItems = this.cartItems.length;
      this.totalPrice = this.cartItems.reduce((accumulator, value) => {
        return accumulator + (value.product_price * value.product_quantity);
      }, 0);
    }, 1000);
  }
  
  removeProduct(id: string) {
    removeCartItem(id);
  }

  stringCart() {
    this.cartItems.forEach((product) => {
        this.messageText += product.product_id + "---" + product.product_name + "\n";
    })

    window.location.href = "https://api.whatsapp.com/send?phone=+254726987429&text=" + this.messageText;
  }
}
