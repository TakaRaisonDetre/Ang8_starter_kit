import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from 'src/app/sofbox/plugins.service';
// @ts-ignore
import logoImg from '../../../assets/images/logo-footer.png';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { subHeader } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor(private plugins: PluginsService) { }

  public navLogo: string = logoImg;

  public navItems: any = [
    { href: '#iq-home', title: 'Home',
      _is_active : true,
      children: true,
      child: subHeader
    },
    { href: '#iq-services', title: 'Service' },
    { href: '#iq-team', title: 'Team' },
    { href: '#iq-counter', title: 'Counter'},
    { href: '#contact', title: 'Contact' },
  ];

  public footerText = '© 2018 Sofbox Developed by <b>iqonicthemes</b>.';

  public socialNavItems: any = [
    { href: '#', icon: '<i class="fab fa-twitter"></i>' },
    { href: '#', icon: '<i class="fab fa-facebook-f"></i>' },
    { href: '#', icon: '<i class="fab fa-google"></i>' },
    { href: '#', icon: '<i class="fab fa-github"></i>' },
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
