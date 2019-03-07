import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Cart } from './classes/cart';
import { Product } from './classes/product';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartService } from './cart.service';
import { RoutesService } from './routes.service';
import { AnimationsComponent } from './animations/animations.component';
import { CartComponent } from './header/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TestCartComponent } from './test-cart/test-cart.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './header/menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { GenericSingleInputComponent } from './re-usables/generic-single-input/generic-single-input.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponentComponent    
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
      path: '**',
      redirectTo: '/404'
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
    MenuComponent,
    ProductsComponent,
    ProductComponent,
    GenericSingleInputComponent,
    NotFoundComponentComponent    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //pass service as provider for a single instance accross the app
  providers: [CartService, Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }
