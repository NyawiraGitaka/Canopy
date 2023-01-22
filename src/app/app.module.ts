import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-core/common/header/header.component';
import { FooterComponent } from './app-core/common/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductListingComponent } from './components/marketplace/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/marketplace/product-details/product-details.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductCardComponent } from './components/marketplace/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    ForgotPasswordComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    SlideshowComponent,
    AboutUsComponent,
    ContactComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
