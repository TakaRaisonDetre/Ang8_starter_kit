import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parallax-video-style2',
  templateUrl: './parallax-video-style2.component.html',
  styleUrls: ['./parallax-video-style2.component.css']
})
export class ParallaxVideoStyle2Component implements OnInit {

  @Input() ids: string;

  @Input() classNames: string;

  @Input() bgVideo: any;

  constructor() { }

  ngOnInit() {
  }

}
