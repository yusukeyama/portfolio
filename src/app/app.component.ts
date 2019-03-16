import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { change_animation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [change_animation]
})
export class AppComponent {
  
  component_staate: boolean;

  onChangeCompoennt(outlet: RouterOutlet) {
    //this.component_staate = !this.component_staate;
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
