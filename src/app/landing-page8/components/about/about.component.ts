import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public count: any = {
    countTo: 5656123,
    from: 0,
    duration: 100
  };
  constructor() { }

  ngOnInit() {
  }

}
