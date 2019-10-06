import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public temeList: any;

  constructor() {
    this.temeList = [
      {
        media: './assets/images/team/small/01.jpg',
        title: 'Ellie Davis',
        subtitle: 'CEO, Sofbox',
        socialLinks: [
          { icon: 'fab fa-facebook-f', link: '#'},
          { icon: 'fab fa-twitter', link: '#'},
          { icon: 'fab fa-pinterest-p', link: '#'}
        ]
      },
      {
        media: './assets/images/team/small/02.jpg',
        title: 'Dylan Wilson',
        subtitle: 'CEO, Sofbox',
        socialLinks: [
          { icon: 'fab fa-facebook-f', link: '#'},
          { icon: 'fab fa-twitter', link: '#'},
          { icon: 'fab fa-pinterest-p', link: '#'}
        ]
      },
      {
        media: './assets/images/team/small/03.jpg',
        title: 'Alvin Martin',
        subtitle: 'CEO, Sofbox',
        socialLinks: [
          { icon: 'fab fa-facebook-f', link: '#'},
          { icon: 'fab fa-twitter', link: '#'},
          { icon: 'fab fa-pinterest-p', link: '#'}
        ]
      },
      {
        media: './assets/images/team/small/04.jpg',
        title: 'Caleb Nelson',
        subtitle: 'CEO, Sofbox',
        socialLinks: [
          { icon: 'fab fa-facebook-f', link: '#'},
          { icon: 'fab fa-twitter', link: '#'},
          { icon: 'fab fa-pinterest-p', link: '#'}
        ]
      },
    ];
  }

  ngOnInit() {
  }

}
