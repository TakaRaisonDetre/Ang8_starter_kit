import {Component, Input, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-header-style1',
  templateUrl: './header-style1.component.html',
  styleUrls: ['./header-style1.component.css']
})
export class HeaderStyle1Component implements OnInit {

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
