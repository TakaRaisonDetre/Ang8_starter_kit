import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {PluginsService} from '../../../sofbox/plugins.service';

@Component({
  selector: 'app-screen-shot',
  templateUrl: './screen-shot.component.html',
  styleUrls: ['./screen-shot.component.css']
})
export class ScreenShotComponent implements OnInit {

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
  }

  swipeLeft() {
  }

  swipeRight() {
  }

}
