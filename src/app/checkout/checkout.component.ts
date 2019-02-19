import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../classes/cart';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  basket: any;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private cart: Cart, private cartService: CartService) {
   
  }

  ngOnInit() {    
      this.isLoading$.next(true);
      this.cart.get()
        .subscribe(r => {
            this.basket = r;
            this.isLoading$.next(false);
        })              
  }

  removeItem(item) {
      this.cartService.removeItem(item)
  }

}
