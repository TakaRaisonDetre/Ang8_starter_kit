import {Component, Input, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-parallax-hero-style1',
  templateUrl: './parallax-hero-style1.component.html',
  styleUrls: ['./parallax-hero-style1.component.css']
})
export class ParallaxHeroStyle1Component implements OnInit, AfterViewInit {

  @Input() ids: string;

  @Input() classNames: string;

  @Input() bgImage: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
