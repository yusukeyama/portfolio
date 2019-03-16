import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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
