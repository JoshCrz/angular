import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './classes/cart';

@Injectable()
export class CartService {

  constructor(private http: HttpClient, private cart: Cart) {

    }

    addToCart(item) {
        let jsonCart = window.localStorage.getItem('cart');
        if (jsonCart) {
          let cart = JSON.parse(jsonCart);
          let duplicate = false;
          cart.items.forEach((i) => {
            if (i.name == item.name) {
              i.qty++
              duplicate = true;
            } 
          })
          if (duplicate == false) {
            cart.items.push(item);
          }          

            this.updateCart(cart);
        } else {
            this.createCart(item)
        }        
    }

    createCart(item?) {        
        let newCart = {
            items: []
        }
        if (item) {
            newCart.items.push(item)
        }
        let jsCart = JSON.stringify(newCart);
        window.localStorage.setItem('cart', jsCart);  
        this.cart.update(jsCart)
    }

    updateCart(cart) {
      let jsonCart = JSON.stringify(cart);      
      window.localStorage.setItem('cart', jsonCart)      
      this.cart.update(cart);
    }

    removeItem(itemToDelete) {
     let cartObj;
     this.cart.get()
        .subscribe(r => {
            cartObj = r;
        })
      //create new cart, parse items from previous and push to new if id's dont match
      let newCart = {
        items: []
      }
      cartObj.items.forEach((item) => {
        if (item.name != itemToDelete.name) {
          //this would compare id's rather than names
          newCart.items.push(item);
        }
      })
      this.updateCart(newCart)
    }

    deleteCart() {

    }   

    loadCart = () => {
        let jsonCart = window.localStorage.getItem('cart');
        let cart = JSON.parse(jsonCart);
        return cart;
    }

}
