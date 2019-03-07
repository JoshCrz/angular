import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { ProductsService } from '../services/products-service.service';
import { CartService } from '../cart.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

    products: Product[] = [];
    productsLoading: boolean = false;

    constructor(private productsService: ProductsService, private cartService: CartService) { }

    ngOnInit() {
        //load products
        this.productsLoading = true;
        this.productsService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.productsLoading = false;
            })        
    }

    addToCart(product) {
        this.cartService.addToCart(product)
    }

}
