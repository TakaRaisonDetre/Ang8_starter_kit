import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-address',
  templateUrl: './footer-address.component.html',
  styleUrls: ['./footer-address.component.css']
})
export class FooterAddressComponent implements OnInit {

  @Input() addressColor = 'white';
  @Input() addressTitle = 'Address';
  @Input() addressClass = 'iq-contact';
  @Input() addressContent: any;

  constructor() { }

  ngOnInit() {
  }

}
