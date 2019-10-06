import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-carousel',
  templateUrl: './client-carousel.component.html',
  styleUrls: ['./client-carousel.component.css']
})
export class ClientCarouselComponent implements OnInit {

  @Input() options: any = [];

  @Input() images: any = [];

  @Input() carousalClass: any = [];

  constructor() { }

  ngOnInit() {
  }

}
