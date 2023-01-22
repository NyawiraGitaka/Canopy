import { Component, OnInit } from '@angular/core';
import Product from '../models/product';
import getProducts from '../models/product-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = getProducts.filter((product) => product.fresh == true);
  }

}
