import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header-style2',
  templateUrl: './header-style2.component.html',
  styleUrls: ['./header-style2.component.css']
})

export class HeaderStyle2Component implements OnInit {

  @Input() logoImg: string;

  @Input() navItemList: any[];

  @Input() className: string;

  @Input() styledLogo = true;

  constructor() { }

  ngOnInit() {
  }

  jumpTo(href) {
    $('html, body').stop().animate({
      scrollTop: $(href).offset().top
    }, 1500);
  }

}
