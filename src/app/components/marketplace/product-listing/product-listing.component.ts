import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import getProducts from 'src/app/models/product-data';
import { ProductApiService } from 'src/app/services/network-calls/product-api.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    // private productAPISerive: ProductApiService
    this.products = getProducts;
  }

  // private getProducts() {
  //   this.productAPISerive.getProducts().subscribe((response: any) => {
  //     console.log(response.products);
  //   });
  // }
}
