import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
