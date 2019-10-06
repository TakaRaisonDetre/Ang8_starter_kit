import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fancy-card',
  templateUrl: './fancy-card.component.html',
  styleUrls: ['./fancy-card.component.css']
})
export class FancyCardComponent implements OnInit {

  constructor() { }

  @Input() icon: string;

  @Input() title: string;

  @Input() text: string;

  ngOnInit() {
  }

}
