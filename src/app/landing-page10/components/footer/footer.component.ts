import { Component, OnInit } from '@angular/core';
// @ts-ignore
import logoImg from '../../../../assets/images/logo-footer.png';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public navLogo: string = logoImg;

  public footerText: any = [
    {
      icon: true,
      iconClass: 'ion-ios-location-outline',
      text: '1234 North Luke Lane, South Bend, IN 360001'
    },
    {
      icon: true,
      iconClass: 'ion-ios-telephone-outline',
      text: '+0123 456 789'
    },
    {
      icon: true,
      iconClass: 'ion-ios-email-outline',
      text: 'mail@sofbox.com'
    }
  ];

  public footerHome: any = [
    {
      section: [
        {
          href: 'javascript:void(0)',
          title: 'Home'
        },
        {
          href: 'javascript:void(0)',
          title: 'About us'
        },
        {
          href: 'javascript:void(0)',
          title: 'Our team'
        },
        {
          href: 'javascript:void(0)',
          title: 'Portfolio'
        }
      ]
    },
    {
      section: [
        {
          href: 'javascript:void(0)',
          title: 'FAQs'
        },
        {
          href: 'javascript:void(0)',
          title: 'Blog'
        },
        {
          href: 'javascript:void(0)',
          title: 'Our services'
        },
        {
          href: 'javascript:void(0)',
          title: 'Contact us'
        }
      ]
    }
  ];

  public footerTiming: any = [
    {
      icon: false,
      text: 'MON - FRI: 09AM - 05PM'
    },
    {
      icon: false,
      text: 'SAT: 09AM - 01PM'
    },
    {
      icon: false,
      text: 'SUN: Enjoy Day'
    }
  ];

  // @ts-ignore
  public footerTextBottom = '© 2018 Sofbox Developed by <b>iqonicthemes</b>.';

  public socialNavItems: any = [
    { href: 'javascript:void(0)', icon: '<i class="fab fa-twitter"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-facebook-f"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-google"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-github"></i>' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
