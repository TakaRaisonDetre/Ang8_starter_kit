import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-section-style6',
  templateUrl: './section-style6.component.html',
  styleUrls: ['./section-style6.component.css']
})
export class SectionStyle6Component implements OnInit {

  @Input() fullWidth = false;
  @Input() reverse = false;
  @Input() colRight = 6;
  @Input() colLeft = 6;
  @Input() sectionClass = '';

  constructor() { }

  ngOnInit() {
  }

}
