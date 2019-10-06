import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PluginsService} from '../plugins.service';


@Component({
  selector: 'app-root-comp',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RootComponent implements OnInit {

  constructor(private plugins: PluginsService) {

  }

  ngOnInit() {
    // Init all plugins...
    const current = this;
    current.plugins.revolutionSlider();
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      current.plugins.index();
    }, 400);
  }
}
