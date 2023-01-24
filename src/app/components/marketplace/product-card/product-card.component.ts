import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { setCart } from 'src/app/utils/storageManager';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {} as Product;

  constructor(private cart: CartComponent) { }

  ngOnInit(): void {
  }

  setCartItem(product: Product) {
    setCart(product);
  }
}
