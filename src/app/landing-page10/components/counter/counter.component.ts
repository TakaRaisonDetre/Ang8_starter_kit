import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public counterContents: any = [
    {
      number: 5656123,
      title: 'App Download',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      number: 2530,
      title: 'Happy Clients',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
