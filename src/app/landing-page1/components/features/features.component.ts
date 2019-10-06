import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  public featureList: any;

  constructor() {
    this.featureList = [
      {
        icon: 'ion-ios-lightbulb-outline',
        title: 'Creative Ideas',
        description: 'Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.'
      },
      {
        icon: 'ion-ios-grid-view-outline',
        title: 'Beautiful Blog',
        description: 'Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.'
      },
      {
        icon: 'ion-ios-heart-outline',
        title: 'User Friendly',
        description: 'Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.'
      },
      {
        icon: 'ion-ios-albums-outline',
        title: 'Perfect Showcase',
        description: 'Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.'
      },
      {
        icon: 'ion-ios-settings',
        title: 'Color Schemes',
        description: 'Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.'
      },
      {
        icon: 'ion-ios-color-wand-outline',
        title: 'Easy to Use',
        description: 'Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.'
      }
    ];
  }

  ngOnInit() {
  }

}
