import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productID: string;

  sizes = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    '2XL',
    '3XL',
    '4XL',
    '6m',
    '12m',
    '18m',
    '24m',
    '2T',
    '4T',
    '6T',
  ];

  colors = [
    'Black',
    'White',
    'Charcoal Triblend',
    'Heather Grey',
    'Fuschia',
    'Tahiti Blue',
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productID = params['productid'];
    });
  }

}
