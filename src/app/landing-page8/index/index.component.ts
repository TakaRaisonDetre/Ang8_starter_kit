import {Component, OnInit, AfterViewInit, ViewEncapsulation} from '@angular/core';
// @ts-ignore
import logoImg from '../../../assets/images/logo-footer.png';

import { PluginsService } from '../../sofbox/plugins.service';

import { subHeader } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit, AfterViewInit {


  constructor(private plugins: PluginsService) { }

  public navLogo: string = logoImg;

  public navItems: any = [
    { href: '#iq-home', title: 'Home',
      _is_active : true,
      children: true,
      child: subHeader
    },
    { href: '#how-it-works', title: 'About' },
    { href: '#software-features', title: 'Service' },
    { href: '#great-features', title: 'Features' },
    { href: '#blog', title: 'Blog' },
    { href: '#contact', title: 'Contact' },
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
    setTimeout(function () {
      current.plugins.index();
    }, 200);
  }

  ngAfterViewInit() {

  }

}
