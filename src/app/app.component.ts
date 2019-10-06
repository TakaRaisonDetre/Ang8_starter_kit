import { Component } from '@angular/core';
import { PluginsService } from './sofbox/plugins.service';
import { Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private plugins: PluginsService, private router: Router) { }

  title = 'sofbox-angular';

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
