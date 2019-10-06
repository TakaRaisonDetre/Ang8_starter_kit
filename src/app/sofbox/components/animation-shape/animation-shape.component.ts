import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-animation-shape',
  templateUrl: './animation-shape.component.html',
  styleUrls: ['./animation-shape.component.css']
})
export class AnimationShapeComponent implements OnInit {

  @Input() animationShapeRight : boolean;

  constructor() { }

  ngOnInit() {
  }

}
