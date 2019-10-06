import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

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

  public footerPlatform: any = [
    {
      section: [
        {
          href: 'javascript:void(0)',
          title: 'Linux'
        },
        {
          href: 'javascript:void(0)',
          title: 'Windows'
        },
        {
          href: 'javascript:void(0)',
          title: 'Web'
        },
        {
          href: 'javascript:void(0)',
          title: 'Android'
        }
      ]
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
    }
  ];

  public footerCommunity: any = [
    {
      section: [
        {
          href: 'javascript:void(0)',
          title: 'Knowledge'
        },
        {
          href: 'javascript:void(0)',
          title: 'Developers'
        },
        {
          href: 'javascript:void(0)',
          title: 'FAQ'
        },
        {
          href: 'javascript:void(0)',
          title: 'Forum'
        }
      ]
    }
  ];

  public footerCompany: any = [
    {
      section: [
        {
          href: 'javascript:void(0)',
          title: 'About'
        },
        {
          href: 'javascript:void(0)',
          title: 'Blog'
        },
        {
          href: 'javascript:void(0)',
          title: 'Press'
        },
        {
          href: 'javascript:void(0)',
          title: 'Careers'
        }
      ]
    }
  ];

  ngOnInit() {
  }

}
