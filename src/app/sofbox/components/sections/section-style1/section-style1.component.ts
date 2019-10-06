import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-style1',
  templateUrl: './section-style1.component.html',
  styleUrls: ['./section-style1.component.css']
})
export class SectionStyle1Component implements OnInit {

  constructor() { }

  @Input() ids: string;

  ngOnInit() {
  }

}
