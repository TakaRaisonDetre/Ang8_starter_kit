import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public featureList: any;

  constructor() {
    this.featureList = [
      {
        icon: './assets/images/services/icon-4.png',
        title: 'Easy to customize',
        description: 'Lorem Ipsum is simply dummy text of.',
        buttonLabel: 'Social security'
      },
      {
        icon: './assets/images/services/icon-5.png',
        title: 'Multipurpose layout',
        description: 'Lorem Ipsum is simply dummy text of.',
        buttonLabel: 'Social security'
      },
      {
        icon: './assets/images/services/icon-6.png',
        title: 'Unique design',
        description: 'Lorem Ipsum is simply dummy text of.',
        buttonLabel: 'Social security'
      },
    ];
  }

  ngOnInit() {
  }

}
