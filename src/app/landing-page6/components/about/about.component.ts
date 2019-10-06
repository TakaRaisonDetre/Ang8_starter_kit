import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public cardData = [
    {
      title: 'Fully responsive',
      icon: 'ion-ios-monitor-outline',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Well documented',
      icon: 'ion-ios-albums-outline',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Easy to use',
      icon: 'ion-ios-color-wand-outline',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Clean codes',
      icon: 'ion-ios-heart-outline',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];

  ngOnInit() {
  }

}
