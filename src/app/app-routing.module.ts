import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './components/marketplace/product-listing/product-listing.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';

// routes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ProductListingComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  { 
    path: 'cart',
    component: CartComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
