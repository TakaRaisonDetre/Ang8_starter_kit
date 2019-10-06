import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-style5',
  templateUrl: './card-style5.component.html',
  styleUrls: ['./card-style5.component.css']
})
export class CardStyle5Component implements OnInit {

  @Input() step: any;
  constructor() { }

  ngOnInit() {
  }

}
