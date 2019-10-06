import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.css']
})
export class FooterMainComponent implements OnInit {

  @Input() footerClass = 'iq-footerr iq-pt-40 iq-pb-20';

  constructor() { }

  ngOnInit() {
  }

}
