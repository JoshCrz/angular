import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products-service.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ProductsService]
})
export class MenuComponent implements OnInit {

  @Input() display: boolean;
  productSearchInput: number;
  @Output() closeMenu: EventEmitter<any> =  new EventEmitter<any>();  

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
  }

  search(id) {            
      let x = parseFloat(id);
      let y = this.productsService.getProductDetails(x)      
      if (y) {          
          this.router.navigate(['/product', { id: y.id }])
          this.closeMenu.emit()
      }
      
  }

  updateInput(val) {
      this.productSearchInput = val;
  }

}
