import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../classes/cart';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [CartService]
})
export class HomepageComponent implements OnInit {

  products: any = [
    {
      name: 'T-Shirt',
      price: 3,
      qty: 1
    },
    {
      name: 'Jeans',
      price: 5,
      qty: 1
    },
    {
      name: 'Hoodie',
      price: 7,
      qty: 1
    },
    {
      name: 'T-Shirt',
      price: 3,
      qty: 1
    },
    {
      name: 'Jeans',
      price: 5,
      qty: 1
    },
    {
      name: 'Hoodie',
      price: 7,
      qty: 1
    }

  ]

    constructor(private cartService: CartService, private cart: Cart) { }

    addToCart(product) {
      this.cartService.addToCart(product)
    }

  getCart() {
    console.log('get cart');
    this.cart.get()
      .subscribe(r => {
        console.log('r')
        console.log(r)
      })
    }
  

  ngOnInit() {
  }

}
