import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
   host:{
    role: 'contentinfo'
  }
})
export class FooterComponent implements OnInit {

  constructor() {
    console.log('Footer constructor called');
  }

  ngOnInit() {
  }
}