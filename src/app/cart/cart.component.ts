import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../classes/cart';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: any;
  showCart: any;
  @Output() closed = new EventEmitter<any>();

  constructor(private cartService: CartService, private cartClass: Cart, private router: Router) {
    this.cartClass.get()
        .subscribe(r => {
        this.cart = r;
      })
  }

  ngOnInit() {
  }

  closeCart() {
    this.showCart = false;
    this.closed.emit(true)
  }

  removeItem(item) {
    this.cartService.removeItem(item)
  }

  navigateToCheckout() {
      this.closeCart();
      this.router.navigate(['checkout']);
  }

}
