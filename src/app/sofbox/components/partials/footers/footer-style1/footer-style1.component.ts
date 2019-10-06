import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-style1',
  templateUrl: './footer-style1.component.html',
  styleUrls: ['./footer-style1.component.css']
})
export class FooterStyle1Component implements OnInit {

  @Input() socialNavItemList: any[];
  @Input() footerText: string;

  constructor() { }

  ngOnInit() {
  }

}
