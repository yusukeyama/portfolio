import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('changeTrigger', [
      state('close', style({ opacity: 0 })),
      state('open', style({ opacity: 1 })),
      transition('open <=> close', animate('0.5s ease-in-out'))
    ])
  ]
})
export class AppComponent {
  title = 'COLORFULPALETTE';
  sub_title = 'YUSUKE.Y PORTFORIO';
  
  component_staate: boolean;

  onChangeCompoennt() {
    this.component_staate = !this.component_staate;
  }
}
