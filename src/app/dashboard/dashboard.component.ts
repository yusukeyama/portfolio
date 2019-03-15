import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { ContentsService } from '../contents.service';
import { trigger, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: 'gray',
      })),
      state('colsed', style({})),
      transition('open => closed', [
        
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  menus: Menu[] = [];

  constructor(private contentsService: ContentsService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus(): void {
    this.contentsService.getMenus()
      .subscribe(menus => this.menus = menus.slice(0, 6));
  }
}
