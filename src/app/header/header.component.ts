import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Cart } from '../classes/cart';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    animations: [
        trigger('openClose', [
            // ...
            state('open', style({
                height: '200px',
                opacity: 1,
                backgroundColor: 'yellow'
            })),
            state('closed', style({
                height: '100px',
                opacity: 0.5,
                backgroundColor: 'green'
            })),
            transition('open => closed', [
                animate('1s')
            ]),
            transition('closed => open', [
                animate('0.5s')
            ]),
        ]),
    ],
})
export class HeaderComponent implements OnInit {

    showCart: boolean;  
    showMenu: boolean = false;
    cart: any;

    constructor(private cartClass: Cart) { }

  ngOnInit() {
  }
    
  openCart() {
    this.showCart = true;
  }

  toggleMenu() {
      if (this.showMenu) {
          this.showMenu = false;
      } else {
          this.showMenu = true;
      }
  }

}
