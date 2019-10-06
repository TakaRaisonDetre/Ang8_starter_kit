import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public list: any;

  constructor() {
    this.list = [
      {
        title: 'JD Adams',
        subtitle: 'Web Designer',
        image: './assets/images/team/01.jpg'
      },
      {
        title: 'Rinkal Oberoi',
        subtitle: 'Web Designer',
        image: './assets/images/team/02.jpg'
      },
      {
        title: 'Jason Deol',
        subtitle: 'Web Designer',
        image: './assets/images/team/03.jpg'
      },
      {
        title: 'kush Jackson',
        subtitle: 'Web Designer',
        image: './assets/images/team/04.jpg'
      }
    ];
  }


  ngOnInit() {
  }

}
