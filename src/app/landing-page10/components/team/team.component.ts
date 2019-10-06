import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  ratings = Array;

  public teamContents: any = [
    {
      name: 'Rinks Cooper',
      designation: 'CEO, Qwilo',
      biography: 'Simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it.',
      rating: 4,
      image: './assets/images/team/round-img1.png',
      link: '#'
    },
    {
      name: 'JD Scot',
      designation: 'CEO, Qwilo',
      biography: 'Simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it.',
      rating: 5,
      image: './assets/images/team/round-img2.png',
      link: '#'
    },
    {
      name: 'Haris Morgan',
      designation: 'CEO, Qwilo',
      biography: 'Simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it.',
      rating: 3,
      image: './assets/images/team/round-img3.png',
      link: '#'
    }
  ];


  constructor() { }

  ngOnInit() {
  }


}
