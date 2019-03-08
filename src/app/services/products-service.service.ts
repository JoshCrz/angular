import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

    constructor() { }  
    
    getProducts(): Observable<Product[]> {
        return Observable.of(this.products).delay(2000);        
    }

    products = [
        {
            id: 1,
            name: 'T-Shirt',
            price: 3,
            qty: 1
        },
        {
            id: 2,
            name: 'Jeans',
            price: 5,
            qty: 1
        },
        {
            id: 3,
            name: 'Hoodie',
            price: 7,
            qty: 1
        },
        {
            id: 4,
            name: 'T-Shirt',
            price: 3,
            qty: 1
        },
        {
            id: 5,
            name: 'Jeans',
            price: 5,
            qty: 1
        },
        {
            id: 6,
            name: 'Hoodie',
            price: 7,
            qty: 1
        }
    ];

    getProductDetails = (id) => {
        let prod = this.products.find(product => product.id === id)        
        return prod
  }

}
