import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public carousalOption: any = {
    items: 5,
    dots: false,
    nav: true,
    autoplay: true,
    loop: true,
    navText: [
      '<i class="fas fa-angle-left fa-2x"></i>',
      '<i class="fas fa-angle-right fa-2x"></i>'
    ]
  };

  public carousalClass: any = 'owl-carousel ';

  public carousalImages: any = [
    { src: './assets/images/clients/01.png' },
    { src: './assets/images/clients/02.png' },
    { src: './assets/images/clients/03.png' },
    { src: './assets/images/clients/04.png' },
    { src: './assets/images/clients/05.png' },
    { src: './assets/images/clients/06.png' },
    { src: './assets/images/clients/07.png' },
    { src: './assets/images/clients/09.png' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
