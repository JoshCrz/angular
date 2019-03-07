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


  constructor(private cartService: CartService, private cart: Cart) { }

    

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
