import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../classes/cart';
import { Product } from '../classes/product';
import { ProductsService } from '../services/products-service.service';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [CartService, ProductsService]
})
export class HomepageComponent implements OnInit {

  products: Product[] = [];

  constructor(private cartService: CartService, private cart: Cart, private productsService: ProductsService) { }

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

    //load products
    this.products = this.productsService.getProducts()
    

  }

}
