import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-shot',
  templateUrl: './screen-shot.component.html',
  styleUrls: ['./screen-shot.component.css']
})
export class ScreenShotComponent implements OnInit {

  constructor() { }

  public tabs: any = [
    {
      id: 'retina1-tab',
      href: 'retina1',
      title: 'Retina Ready',
      active: true,
      icon: 'ion-ios-color-wand-outline'
    },
    {
      id: 'designs1-tab',
      href: 'designs1',
      title: 'Latest Designs',
      active: false,
      icon: 'ion-ios-heart-outline'
    },
    {
      id: 'customize1-tab',
      href: 'customize1',
      title: 'Easy to Customize',
      active: false,
      icon: 'ion-ios-settings'
    },
    {
      id: 'clean1-tab',
      href: 'clean1',
      title: 'Clean',
      active: false,
      icon: 'ion-ios-checkmark-outline'
    },
    {
      id: 'revolution1-tab',
      href: 'revolution1',
      title: 'Revolution Slider',
      active: false,
      icon: 'ion-ios-albums-outline'
    }
  ];

  ngOnInit() {
  }

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.tab-content').find('.active').removeClass('active');
    jquery('.nav-item').find('.active1').removeClass('active1');
    jquery('#' + id).addClass('active');
  }

}
