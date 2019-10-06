import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-style2',
  templateUrl: './card-style2.component.html',
  styleUrls: ['./card-style2.component.css']
})
export class CardStyle2Component implements OnInit {

  @Input() list: any;

  @Input() active: any;

  constructor() { }

  ngOnInit() {
  }

}
