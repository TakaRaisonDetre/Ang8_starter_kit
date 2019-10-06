import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-logo',
  templateUrl: './footer-logo.component.html',
  styleUrls: ['./footer-logo.component.css']
})
export class FooterLogoComponent implements OnInit {

  @Input() className: string;

  @Input() sectionImage: string;

  @Input() sectionText: string;

  @Input() sectionColor = 'black';

  constructor() { }

  ngOnInit() {
  }

}
