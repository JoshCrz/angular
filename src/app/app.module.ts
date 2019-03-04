import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { Cart } from './classes/cart';
import { Product } from './classes/product';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartService } from './cart.service';
import { RoutesService } from './routes.service';
import { AnimationsComponent } from './animations/animations.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TestCartComponent } from './test-cart/test-cart.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,    
    AnimationsComponent,
    CartComponent,
    CheckoutComponent,
    TestCartComponent,
    FooterComponent,
    MenuComponent    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  //pass service as provider for a single instance accross the app
  providers: [CartService, Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }
