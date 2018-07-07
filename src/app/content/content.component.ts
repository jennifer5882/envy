import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getCollection()
      .subscribe(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }

}
