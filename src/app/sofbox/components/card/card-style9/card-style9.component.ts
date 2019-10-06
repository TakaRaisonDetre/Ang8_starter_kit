import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-style9',
  templateUrl: './card-style9.component.html',
  styleUrls: ['./card-style9.component.css']
})
export class CardStyle9Component implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() description: string;

  ngOnInit() {
  }

}
