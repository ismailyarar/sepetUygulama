import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/service/cart.service';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { ProductVatPipe } from './product/pipe/kdv.pipe';
import { ProductFilterPipe } from './product/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CartSummaryComponent,
    ProductVatPipe,
    ProductFilterPipe,
    CategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'http://localhost:3000/product',
    },

    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
