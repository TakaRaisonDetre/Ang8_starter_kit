import {Component, OnInit, AfterViewInit, ViewEncapsulation} from '@angular/core';

// @ts-ignore
import logoImg from '../../../assets/images/logo-footer.png';

import { subHeader } from '../../../constants/menu';
import { PluginsService } from '../../sofbox/plugins.service';

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
    { href: '#how-it-works', title: 'About' },
    { href: '#software-features', title: 'Service' },
    { href: '#great-features', title: 'Features' },
    { href: '#contact', title: 'Contact' },
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
