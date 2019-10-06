import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  public packageList: any;

  constructor() {
    this.packageList  = [
      {
        title: 'Start Up',
        price: '$1.99',
        items: [
          { icon: 'ion-checkmark-round', title: 'Photoshop'},
          { icon: 'ion-checkmark-round', title: 'HTML5 & CSS 3'},
          { icon: 'ion-close-round', title: 'Wordpress'},
          { icon: 'ion-close-round', title: 'Javascript'},
          { icon: 'ion-close-round', title: 'Animation'}
        ],
        active: 0
      },
      {
        title: 'Professional',
        price: '$4.99',
        items: [
          { icon: 'ion-checkmark-round', title: 'Photoshop'},
          { icon: 'ion-checkmark-round', title: 'HTML5 & CSS 3'},
          { icon: 'ion-close-round', title: 'Wordpress'},
          { icon: 'ion-close-round', title: 'Javascript'},
          { icon: 'ion-close-round', title: 'Animation'}
        ],
        active: 1
      },
      {
        title: 'Advanced',
        price: '$9.99',
        items: [
          { icon: 'ion-checkmark-round', title: 'Photoshop'},
          { icon: 'ion-checkmark-round', title: 'HTML5 & CSS 3'},
          { icon: 'ion-close-round', title: 'Wordpress'},
          { icon: 'ion-close-round', title: 'Javascript'},
          { icon: 'ion-close-round', title: 'Animation'}
        ],
        active: 0
      },
      {
        title: 'Premium',
        price: '$45.99',
        items: [
          { icon: 'ion-checkmark-round', title: 'Photoshop'},
          { icon: 'ion-checkmark-round', title: 'HTML5 & CSS 3'},
          { icon: 'ion-close-round', title: 'Wordpress'},
          { icon: 'ion-close-round', title: 'Javascript'},
          { icon: 'ion-close-round', title: 'Animation'}
        ],
        active: 0
      }
    ];
  }

  ngOnInit() {
  }

}
