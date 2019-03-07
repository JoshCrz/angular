import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { ProductsService } from '../services/products-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

    products: Product[] = [];

    constructor(private productsService: ProductsService, private cartService: CartService) { }

    ngOnInit() {
        //load products
        this.productsService.getProducts()
            .subscribe(products => {
                this.products = products;
            })        
    }

    addToCart(product) {
        this.cartService.addToCart(product)
    }

}
