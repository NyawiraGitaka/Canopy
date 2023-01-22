import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
Quantity = 2;
itemsInCartcount = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
