import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  products: Product[];

  sortoptions = [
    'Popularity',
    'Price: Low to High',
    'Price: High to Low',
  ];

  constructor(private productService: ProductService) { }

  getProducts(): void {
    this.productService.getCollection()
      .subscribe(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }

}

