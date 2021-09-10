import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('shrink', [
      transition('0=>1', [
        animate(
          '2s',
          keyframes([
            style({ transform: 'scale(1)' }),
            style({ transform: 'scale(0)' }),
            style({ transform: 'scale(1)' })
          ])
        )
      ])
    ])
  ]
})
export class AppComponent {
  growState = 0;
  shrinkState = 0;
  shakeState = 0;

  color: string = '#2033db';

  opacity: number = 0.5;

  ngOnInit() {}

  onShrinkDone() {
    this.shrinkState = this.shrinkState ? 0 : 1;
  }
}
