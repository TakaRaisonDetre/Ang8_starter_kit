import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-banner-style1',
  templateUrl: './section-banner-style1.component.html',
  styleUrls: ['./section-banner-style1.component.css']
})
export class SectionBannerStyle1Component implements OnInit {

  @Input() className: any;
  @Input() reverse: any;
  constructor() { }

  ngOnInit() {
  }

}
