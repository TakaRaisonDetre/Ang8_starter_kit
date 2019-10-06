import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-icon-title',
  templateUrl: './section-icon-title.component.html',
  styleUrls: ['./section-icon-title.component.css']
})
export class SectionIconTitleComponent implements OnInit {

  constructor() { }
  @Input() className: string;

  ngOnInit() {
  }

}
