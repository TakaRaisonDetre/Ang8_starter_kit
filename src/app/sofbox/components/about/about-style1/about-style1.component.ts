import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-style1',
  templateUrl: './about-style1.component.html',
  styleUrls: ['./about-style1.component.css']
})
export class AboutStyle1Component implements OnInit {

  @Input() ids: string;

  @Input() className: string;

  @Input() reverse: boolean;

  @Input() animation: true;

  constructor() { }

  ngOnInit() {
  }

}
