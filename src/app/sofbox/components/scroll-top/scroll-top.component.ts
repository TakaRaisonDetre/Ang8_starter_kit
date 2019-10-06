import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTop() {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  }

}
