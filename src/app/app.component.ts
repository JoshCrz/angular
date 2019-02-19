import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './classes/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
 

    constructor(private cartService: CartService, private cart: Cart) {
        this.preRenderCart()   
    }   

    //on initial load, get cart from local storage and pass to global cart class
    //if no cart, create one
    preRenderCart() {
        let c = this.cartService.loadCart();
        if (c) {
            this.cart.update(c)
        } else {
            this.cartService.createCart();
            this.preRenderCart()
        }
    }

}
