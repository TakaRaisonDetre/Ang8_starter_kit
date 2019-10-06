import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-style1',
  templateUrl: './card-style1.component.html',
  styleUrls: ['./card-style1.component.css']
})
export class CardStyle1Component implements OnInit {

  @Input() link: any;
  constructor() { }

  ngOnInit() {
  }

}
