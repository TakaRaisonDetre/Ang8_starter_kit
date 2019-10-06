import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.css']
})
export class FooterLinksComponent implements OnInit {

  @Input() color = 'white';
  @Input() title: any;
  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

}
