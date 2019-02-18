import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../classes/cart';
import { startWith, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  basket: any;
  loading: any;
  constructor(private cart: Cart, private cartService: CartService) {
   
  }

  ngOnInit() {    
    this.loading = true;
    this.basket = this.cartService.loadCart()
    if (this.basket) {
      this.loading = false;
    }
    
  }
  
}
