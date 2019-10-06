import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-cards',
  templateUrl: './fancy-cards.component.html',
  styleUrls: ['./fancy-cards.component.css']
})
export class FancyCardsComponent implements OnInit {

  constructor() { }

  public cardData: any = [
    {
      icon: "ion-ios-monitor-outline",
      title: "High Resolution",
      text: "Lorem ipsum madolor sit amet, consectetur adipisicing elit."
    },
    {
      icon: "ion-ios-settings",
      title: "Color Schemes",
      text: "Lorem ipsum madolor sit amet, consectetur adipisicing elit."
    },
    {
      icon: "ion-social-googleplus-outline",
      title: "Google Fonts",
      text: "Lorem ipsum madolor sit amet, consectetur adipisicing elit."
    },
    {
      icon: "ion-ios-heart-outline",
      title: "Clean Codes",
      text: "Lorem ipsum madolor sit amet, consectetur adipisicing elit."
    }
  ];

  ngOnInit() {
  }

}
