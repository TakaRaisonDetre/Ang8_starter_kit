import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pricing-card-style3',
  templateUrl: './pricing-card-style3.component.html',
  styleUrls: ['./pricing-card-style3.component.css']
})
export class PricingCardStyle3Component implements OnInit {

  constructor() { }

  @Input() icon: string;
  @Input() title: string;

  ngOnInit() {
  }

}
