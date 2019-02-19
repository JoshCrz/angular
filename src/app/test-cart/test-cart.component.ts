import { Component, OnInit } from '@angular/core';
import { Cart } from '../classes/cart';

@Component({
  selector: 'test-cart',
  templateUrl: './test-cart.component.html',
  styleUrls: ['./test-cart.component.css']
})
export class TestCartComponent implements OnInit {

  cartIs: any;
  constructor(private cart: Cart) { }

  ngOnInit() {
      this.cart.get()
          .subscribe(r => {
              this.cartIs = r;
          })

  }

}
