import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  public list: any;
  constructor() {
    this.list = [
      {
        icon: 'ion-ios-monitor-outline',
        title: 'High Resolution',
        description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: 'ion-ios-settings',
        title: 'Color Schemes',
        description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: 'ion-social-googleplus-outline',
        title: 'Google Fonts',
        description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: 'ion-ios-heart-outline',
        title: 'Clean Codes',
        description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: 'ion-ios-color-wand-outline',
        title: 'Responsive Design',
        description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: 'ion-ios-checkmark-outline',
        title: 'Easy to Use',
        description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: 'ion-ios-photos-outline',
        title: 'Perfect Showcase',
        description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
      },
      {
        icon: 'ion-ios-videocam-outline',
        title: 'Video Animation',
        description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
      }
    ];
  }

  ngOnInit() {
  }

}
