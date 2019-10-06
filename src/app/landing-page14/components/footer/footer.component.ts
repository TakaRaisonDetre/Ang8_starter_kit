import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  public socialNavItems: any = [
    { href: 'javascript:void(0)', icon: '<i class="fab fa-twitter"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-facebook-f"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-google"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-github"></i>' },
  ];

  ngOnInit() {
  }

}
