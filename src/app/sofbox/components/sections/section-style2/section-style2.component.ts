import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-style2',
  templateUrl: './section-style2.component.html',
  styleUrls: ['./section-style2.component.css']
})
export class SectionStyle2Component implements OnInit {

  @Input() id: any;

  @Input() small: boolean;

  constructor() { }

  ngOnInit() {
  }

}
