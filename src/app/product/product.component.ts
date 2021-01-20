import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { CartService } from '../cart/service/cart.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  products: Product[];
  addedProduct: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private activatedRoute:ActivatedRoute
  ) {}

  filterText = '';
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe((data) => {
        this.products = data;
    })
    
    });
  }
  addToCard(product: Product) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);
  }
}
