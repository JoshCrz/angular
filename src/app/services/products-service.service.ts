import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts = () => {
    let myArr: Product[] = [
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
    return myArr;
  }

  getProductDetails = (id) => {
    console.log('get product details')
    console.log(id)
  }

}
