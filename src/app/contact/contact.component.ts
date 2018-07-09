import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  options = [
    'Google',
    'Facebook',
    'Pinterest',
    'Etsy',
    'Instagram',
    'Referral',
    'Other'
  ];

  constructor() { }

  ngOnInit() {
  }

}
