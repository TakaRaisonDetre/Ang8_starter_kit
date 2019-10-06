import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public items: any;

  constructor() {
    this.items = [
      {
        icon: 'ion-ios-monitor-outline',
        title: 'Easy To Customize',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        icon: 'ion-ios-settings',
        title: 'Multipurpose Layout',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        icon: 'ion-social-googleplus-outline',
        title: 'Unique Design',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        icon: 'ion-ios-heart-outline',
        title: 'Clean Codes',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        icon: 'ion-ios-color-wand-outline',
        title: 'Easy to Use',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
      {
        icon: 'ion-ios-checkmark-outline',
        title: 'Responsive Design',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
      },
     ];
  }

  ngOnInit() {
  }

}
