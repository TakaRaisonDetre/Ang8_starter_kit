import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent implements OnInit {

  @Input() title: any;

  @Input() subTitle: any;

  @Input() light: any;

  constructor() { }

  ngOnInit() {
  }

}
