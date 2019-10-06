import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PluginsService} from '../../sofbox/plugins.service';

import { subHeader } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor(private plugins: PluginsService) { }

  public navItems: any = [
    { href: '#iq-home', title: 'Home',
      _is_active : true,
      children: true,
      child: subHeader
    },
    { href: '#about-us', title: 'About' },
    { href: '#feature', title: 'Feature' },
    { href: '#how-it-works', title: 'Service' },
    { href: '#our-pricing', title: 'Pricing' },
    { href: '#testimonial', title: 'Testimonial' },
    { href: '#get-in-tech', title: 'Contact' }
  ];

  public footerText = '© 2018 Sofbox Developed by <b>iqonicthemes</b>.';

  public socialNavItems: any = [
    { href: 'javascript:void(0)', icon: '<i class="fab fa-twitter"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-facebook-f"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-google"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-github"></i>' },
  ];

  ngOnInit() {
    // Init all plugins...
    const current = this;
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
