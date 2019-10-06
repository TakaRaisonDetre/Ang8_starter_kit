import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-style',
  templateUrl: './section-style.component.html',
  styleUrls: ['./section-style.component.css']
})
export class SectionStyleComponent implements OnInit {

  @Input() fullWidth = false;
  @Input() sectionId = '';
  @Input() sectionClass = 'overview-block-ptb text-center';

  constructor() { }

  ngOnInit() {
  }

}
