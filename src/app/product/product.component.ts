import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductsService]
})
export class ProductComponent implements OnInit {

    product: any
    parameters: any;
    
    constructor(private route: ActivatedRoute, private productsService: ProductsService) {
        this.route.params            
            .subscribe(params => {
                this.parameters = {
                    id: params.id
                }
                let id = parseFloat(this.parameters.id);
                this.product = this.productsService.getProductDetails(id);
            })
    }
   
    ngOnInit() {        
        window.scrollTo(0, 0);   
    }

}
